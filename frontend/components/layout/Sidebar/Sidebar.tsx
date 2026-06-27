"use client";

import { usePathname } from "next/navigation";

import { Logo } from "../Logo/Logo";
import { menuItems } from "./navigation";
import { SidebarItem } from "../Sidebar/SidebarItem";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      data-admin-sidebar
      className="fixed left-0 top-0 z-40 hidden h-screen w-72 border-r border-white/10 bg-slate-950/95 px-5 py-6 print:hidden lg:block"
    >
      <Logo />

      <nav className="mt-10 space-y-1">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={pathname === item.href}
          />
        ))}
      </nav>
    </aside>
  );
}
