$folders = @(
    "assets",
    "hooks",
    "lib",
    "services",
    "styles",
    "types",
    "utils",

    "components/ui",
    "components/layout",
    "components/dashboard",
    "components/forms",
    "components/tables",
    "components/charts",
    "components/timeline",

    "app/(auth)",
    "app/(dashboard)",
    "app/dashboard",
    "app/clientes",
    "app/veiculos",
    "app/produtos",
    "app/estoque",
    "app/ordens",
    "app/financeiro",
    "app/configuracoes"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

Write-Host "✅ Estrutura criada com sucesso!" -ForegroundColor Green