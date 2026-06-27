import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PrintOrderButton } from "@/components/orders/PrintOrderButton";
import { PrintableServiceOrder } from "@/components/orders/PrintableServiceOrder";
import { serviceOrders } from "@/lib/service-orders";

type ServiceOrderPageProps = {
  params: Promise<{
    number: string;
  }>;
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default async function ServiceOrderPage({
  params,
}: ServiceOrderPageProps) {
  const { number } = await params;

  const order = serviceOrders.find(
    (serviceOrder) => serviceOrder.number === number,
  );

  if (!order) {
    notFound();
  }

  const total = order.services.reduce(
    (sum, service) => sum + service.quantity * service.unitPrice,
    0,
  );

  return (
    <>
    <div className="print:hidden">
      <Link
        href="/ordens"
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
      >
        <ArrowLeft className="size-4" />
        Voltar para ordens
      </Link>

      <p className="mt-6 text-sm text-slate-400">Ordem de serviço</p>
      <h1 className="mt-1 text-3xl font-bold text-white">{order.number}</h1>
      <div className="mt-5">
        <PrintOrderButton />
      </div>

      <section className="mt-8 grid gap-5 rounded-lg border border-white/10 bg-white/5 p-5 sm:grid-cols-2">
        <div>
          <p className="text-sm text-slate-400">Cliente</p>
          <p className="mt-1 font-medium text-white">{order.customer}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Veículo</p>
          <p className="mt-1 font-medium text-white">
            {order.vehicle} — {order.plate}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Abertura</p>
          <p className="mt-1 font-medium text-white">{order.openedAt}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Status</p>
          <p className="mt-1 font-medium text-white">{order.status}</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-white">Serviços</h2>

        <div className="mt-4 overflow-x-auto rounded-lg border border-white/10">
          <table className="w-full min-w-[640px] text-left">
            <thead className="bg-white/5 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-5 py-4 font-medium">Descrição</th>
                <th className="px-5 py-4 text-right font-medium">Quantidade</th>
                <th className="px-5 py-4 text-right font-medium">
                  Valor unitário
                </th>
                <th className="px-5 py-4 text-right font-medium">Subtotal</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/10">
              {order.services.map((service) => (
                <tr key={service.description}>
                  <td className="px-5 py-4 text-white">
                    {service.description}
                  </td>
                  <td className="px-5 py-4 text-right text-slate-300">
                    {service.quantity}
                  </td>
                  <td className="px-5 py-4 text-right text-slate-300">
                    {currencyFormatter.format(service.unitPrice)}
                  </td>
                  <td className="px-5 py-4 text-right font-medium text-white">
                    {currencyFormatter.format(
                      service.quantity * service.unitPrice,
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot className="border-t border-white/10 bg-white/5">
              <tr>
                <td
                  colSpan={3}
                  className="px-5 py-4 text-right font-semibold text-slate-300"
                >
                  Total
                </td>
                <td className="px-5 py-4 text-right text-lg font-bold text-white">
                  {currencyFormatter.format(total)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <section className="mt-8 border-t border-white/10 pt-6">
        <h2 className="text-lg font-semibold text-white">Observações</h2>
        <p className="mt-2 text-slate-300">{order.notes}</p>
      </section>
    </div>
    <PrintableServiceOrder order={order} total={total} />
    </>
  );
}
