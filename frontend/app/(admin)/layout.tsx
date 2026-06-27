import { Header } from "@/components/layout/Header/Header";
import { Sidebar } from "@/components/layout/Sidebar/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 print:min-h-0 print:bg-white print:text-slate-950">
      <Sidebar />

      <div
        data-admin-content
        className="min-h-screen lg:pl-72 print:min-h-0 print:pl-0"
      >
        <Header />

        <main data-admin-main className="p-6 print:p-0 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
