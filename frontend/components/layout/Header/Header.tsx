"use client";

import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { MobileMenu } from "@/components/layout/Sidebar/MobileMenu";



const pageTitles = [
  { path: "/dashboard", title: "Dashboard" },
  { path: "/agenda", title: "Agenda" },
  { path: "/ordens", title: "Ordens de serviço" },
  { path: "/clientes", title: "Clientes" },
  { path: "/veiculos", title: "Veículos" },
  { path: "/produtos", title: "Produtos" },
  { path: "/estoque", title: "Estoque" },
  { path: "/financeiro", title: "Financeiro" },
  { path: "/configuracoes", title: "Configurações" },
];
export function Header() {

  const pathname = usePathname();
  const pageTitle =
  pageTitles.find((page) => pathname.startsWith(page.path))?.title ??
  "DetailFlow";


  return (
    <header
      data-admin-header
      className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-slate-950/80 px-4 backdrop-blur-xl print:hidden sm:px-6 lg:px-8"
    >
      <div className="flex items-center gap-3">
        <MobileMenu />
        <Image
          src="/favicon.svg"
          alt="DetailFlow"
          width={44}
          height={44}
          priority
          className="lg:hidden"
        />

        <div className="hidden sm:block">
          <p className="hidden text-sm text-slate-400 sm:block">
            Painel administrativo
          </p>
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            {pageTitle}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden w-80 md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <Input
            placeholder="Pesquisar..."
            className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-slate-500"
          />
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white">
          <Bell className="h-5 w-5" />
        </button>

        <Avatar>
          <AvatarFallback className="bg-sky-500 text-white">FA</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
