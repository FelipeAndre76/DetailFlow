import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <aside className="fixed left-0 top-0 h-screen w-72 border-r border-slate-800 bg-slate-900/80 p-6">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-sky-400">DetailFlow</h1>
          <p className="text-sm text-slate-400">Estética Automotiva</p>
        </div>

        <nav className="space-y-2">
          {[
            "Dashboard",
            "Agenda",
            "Ordens",
            "Clientes",
            "Veículos",
            "Produtos",
            "Estoque",
            "Financeiro",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-sky-500/10 hover:text-sky-300"
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      <main className="ml-72 min-h-screen p-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Painel administrativo</p>
            <h2 className="text-3xl font-bold">Dashboard</h2>
          </div>

          <div className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
            Felipe André
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}