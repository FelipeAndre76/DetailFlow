import {
  CalendarDays,
  Car,
  ClipboardList,
  Gauge,
  Package,
  Settings,
  ShoppingBag,
  Users,
  WalletCards,
} from "lucide-react";

export const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: Gauge },
  { href: "/agenda", label: "Agenda", icon: CalendarDays },
  { href: "/ordens", label: "Ordens", icon: ClipboardList },
  { href: "/clientes", label: "Clientes", icon: Users },
  { href: "/veiculos", label: "Veículos", icon: Car },
  { href: "/produtos", label: "Produtos", icon: ShoppingBag },
  { href: "/estoque", label: "Estoque", icon: Package },
  { href: "/financeiro", label: "Financeiro", icon: WalletCards },
  { href: "/configuracoes", label: "Configurações", icon: Settings },
];
