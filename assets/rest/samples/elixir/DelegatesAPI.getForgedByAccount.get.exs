import RiseElixir

try do
  result =
    RiseElixir.Delegates.get_forged_by_account(%{
      generatorPublicKey: "7f31f1b13f211ada60b61e47778b8d59e7f0ecb56fd6f9ea9200c805e352f6a8"
    })

  IO.puts("Forged: #{result["forged"]}")
catch
  err -> "API error #{err}"
end
