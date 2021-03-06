import { observable, action, computed, autorun } from "mobx";
import {
  join,
  includes,
  values,
  reject,
  isEmpty,
  first,
  split,
  reduce,
  entries,
  last
} from "lodash/fp";

export enum handlers {
  NOT_FOUND = "notfound",
  PAGES = "pages",
  API = "api",
  RISE_TS = "rise-js"
}

type matcher = (root: string, path: string) => boolean;
type matchers = { [key in handlers]: matcher };
type pathObject = { root: string; path: string; bang: string };

export const matchers: matchers = {
  [handlers.PAGES]: (root, _path) => /^pages$/i.test(root),
  [handlers.NOT_FOUND]: (_root, _path) => false,
  [handlers.API]: (root, _path) => /^(api|operation|section|tag)$/i.test(root),
  [handlers.RISE_TS]: (root, _path) => /^rise-js$/i.test(root)
};

export const paths = {
  INDEX: "Home"
};

export const HOME_PATH_OBJECT = {
  root: handlers.PAGES,
  path: paths.INDEX,
  bang: ""
};

const matchPath = (
  newPath: string
): { handler: handlers; path: string; bang: string } => {
  const pathObject = splitPath(newPath);
  const { root, path, bang } = isEmpty(pathObject.root)
    ? HOME_PATH_OBJECT
    : pathObject;
  const handler = reduce(
    (result: handlers, entry: [handlers, matcher]): handlers => {
      const [handler, matcher] = entry;
      if (matcher(root, path)) {
        return handler;
      }
      return result;
    },
    handlers.NOT_FOUND,
    entries(matchers)
  );
  return { handler, path, bang };
};

const splitPath = (path: string): pathObject => {
  const pathWithoutHash = path[0] === "#" ? path.slice(1) : path;
  const [pathWithoutBang, ...bangParts] = pathWithoutHash.split("!");
  const [root, ...rest] = split("/", pathWithoutBang);
  return {
    root,
    path: join("/", reject(isEmpty, rest)),
    bang: join("!", reject(isEmpty, bangParts))
  };
};

const joinPath = (root?: string, path?: string, bang?: string): string => {
  let result = root || "";
  if (!isEmpty(result) && !isEmpty(path)) {
    result = result + "/" + path;
  }
  if (!isEmpty(result) && !isEmpty(bang)) {
    result = result + "!" + bang;
  }
  return result;
};

export const HOME = joinPath(HOME_PATH_OBJECT.root, HOME_PATH_OBJECT.path);

export class NavigationStore {
  @observable
  path = paths.INDEX;
  @observable
  handler = handlers.PAGES;
  @observable
  bang = "";
  @observable
  tick = 0;
  entryPath: string;

  constructor() {
    this.entryPath = window.location.hash;
    this.navigate(this.entryPath, false);
    this.subscribe();
    this.syncDocumentTitle();
  }

  subscribe = () => {
    window.addEventListener("click", evt => {
      const { target } = evt;
      if (
        evt.target &&
        !isEmpty((target as HTMLElement).tagName) &&
        (target as HTMLElement).tagName.toLowerCase() == "a" &&
        (target as HTMLAnchorElement).origin == window.location.origin &&
        (target as HTMLAnchorElement).pathname == window.location.pathname &&
        !isEmpty((target as HTMLAnchorElement).hash)
      ) {
        evt.preventDefault();
        return this.navigate(
          joinPath(
            this.handler,
            this.path,
            (target as HTMLAnchorElement).hash.slice(1)
          )
        );
      }
    });
    window.onpopstate = ({ state }) => {
      let path = window.location.hash;
      if (isEmpty(state)) {
        if (path !== this.entryPath) {
          return;
        }
      } else if (!isEmpty(state.path)) {
        path = state.path;
      } else {
        return;
      }
      this.navigate(path, false);
    };
  };

  syncDocumentTitle = () =>
    autorun(
      () => (window.document.title = `${this.title} - RISE | Developers`)
    );

  @action
  navigate = (newPath: string, push = true) => {
    const { handler, path, bang } = matchPath(newPath);
    this.handler = handler;
    this.path = path;
    this.bang = bang;
    this.tick = this.tick + 1;
    if (push) {
      this.doPushState();
    }
  };

  doPushState = () => {
    window.history.pushState(
      { path: this.fullPath },
      this.title,
      "#" + this.fullPath
    );
  };

  @computed
  get title() {
    switch (this.handler) {
      case handlers.NOT_FOUND:
        return "Not Found";
      case handlers.PAGES:
        return "Guides";
      case handlers.API:
        return "API Reference";
      case handlers.RISE_TS:
        return "RiseJS";
    }
    return "Loading";
  }

  @computed
  get fullPath() {
    return joinPath(this.handler, this.path, this.bang);
  }

  @computed
  get banglessPath() {
    return joinPath(this.handler, this.path);
  }
}

export const navigationStore = new NavigationStore();
