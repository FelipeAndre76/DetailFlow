import Link from "next/link";
import { serviceOrders } from "@/lib/service-orders";


function getStatusClasses(status: string) {
  switch (status) {
    case "Em andamento":
      return "bg-sky-500/10 text-sky-300";
    case "Aguardando":
      return "bg-amber-500/10 text-amber-300";
    case "Concluída":
      return "bg-emerald-500/10 text-emerald-300";
    default:
      return "bg-white/10 text-slate-300";
  }
}
export default function ServiceOrdersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Ordens de serviço</h1>
      <p className="mt-2 text-slate-400">
        Acompanhe os serviços realizados nos veículos.
      </p>
      <div className="mt-8 overflow-x-auto rounded-lg border border-white/10">
        <table className="min-w-full text-left">
          <thead className="bg-white/5 text-xs uppercase text-slate-400">
            <tr>
              <th className="px-5 py-4 font-medium">Ordem</th>
              <th className="px-5 py-4 font-medium">Cliente e veículo</th>
              <th className="px-5 py-4 font-medium">Serviço</th>
              <th className="px-5 py-4 font-medium">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/10">
            {serviceOrders.map((order) => (
              <tr key={order.number} className="bg-white/3 hover:bg-white/5">
                <td className="whitespace-nowrap px-5 py-4 font-semibold text-sky-300">
                  <Link
                    href={`/ordens/${order.number}`}
                    className="hover:text-sky-200 hover:underline"
                  >
                    {order.number}
                  </Link>
                </td>

                <td className="px-5 py-4">
                  <p className="font-medium text-white">{order.customer}</p>
                  <p className="mt-1 text-sm text-slate-400">{order.vehicle}</p>
                </td>

                <td className="px-5 py-4 text-slate-300">{order.services[0].description}</td>

                <td className="px-5 py-4">
                  <span
                    className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${getStatusClasses(order.status)}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
