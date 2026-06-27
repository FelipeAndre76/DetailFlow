"use client";

import { FileDown } from "lucide-react";

export function PrintOrderButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-400 print:hidden"
    >
      <FileDown className="size-4" />
      Exportar PDF
    </button>
  );
}