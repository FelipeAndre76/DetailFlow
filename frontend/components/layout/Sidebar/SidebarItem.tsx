import Link from "next/link";
import { LucideIcon } from "lucide-react";
import type { MouseEventHandler } from "react";

type SidebarItemProps = {
  href: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function SidebarItem({
  href,
  label,
  icon: Icon,
  active = false,
  onClick,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
        active
          ? "bg-sky-500/15 text-sky-300"
          : "text-slate-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
}
