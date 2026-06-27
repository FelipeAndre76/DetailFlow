import Image from "next/image";

import type { ServiceOrder } from "@/lib/service-orders";

type PrintableServiceOrderProps = {
  order: ServiceOrder;
  total: number;
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function PrintableServiceOrder({
  order,
  total,
}: PrintableServiceOrderProps) {
  return (
    <article className="print-order hidden flex-col bg-white text-slate-950 print:flex">
      <header className="flex items-start justify-between border-b-2 border-slate-900 pb-6">
        <div className="flex items-center gap-3">
          <Image src="/favicon.svg" alt="DetailFlow" width={54} height={54} />
          <div>
            <p className="text-2xl font-extrabold leading-none">
              Detail<span className="text-sky-600">Flow</span>
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Estética automotiva
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Ordem de serviço
          </p>
          <h1 className="mt-1 text-3xl font-extrabold">{order.number}</h1>
          <p className="mt-2 inline-block border border-slate-300 px-3 py-1 text-xs font-semibold">
            {order.status}
          </p>
        </div>
      </header>

      <section className="grid grid-cols-2 gap-x-12 gap-y-5 border-b border-slate-300 py-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
            Cliente
          </p>
          <p className="mt-1 text-sm font-semibold">{order.customer}</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
            Data de abertura
          </p>
          <p className="mt-1 text-sm font-semibold">{order.openedAt}</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
            Veículo
          </p>
          <p className="mt-1 text-sm font-semibold">{order.vehicle}</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
            Placa
          </p>
          <p className="mt-1 text-sm font-semibold">{order.plate}</p>
        </div>
      </section>

      <section className="py-6">
        <h2 className="text-sm font-extrabold uppercase tracking-[0.12em]">
          Serviços autorizados
        </h2>

        <table className="mt-4 w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-900 text-left text-[10px] uppercase tracking-[0.1em] text-white">
              <th className="px-3 py-3 font-semibold">Descrição</th>
              <th className="px-3 py-3 text-right font-semibold">Qtd.</th>
              <th className="px-3 py-3 text-right font-semibold">Unitário</th>
              <th className="px-3 py-3 text-right font-semibold">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.services.map((service) => (
              <tr key={service.description} className="border-b border-slate-300">
                <td className="px-3 py-4 font-medium">{service.description}</td>
                <td className="px-3 py-4 text-right">{service.quantity}</td>
                <td className="px-3 py-4 text-right">
                  {currencyFormatter.format(service.unitPrice)}
                </td>
                <td className="px-3 py-4 text-right font-semibold">
                  {currencyFormatter.format(
                    service.quantity * service.unitPrice,
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="ml-auto mt-5 flex w-64 items-center justify-between border-t-2 border-slate-900 pt-3">
          <span className="text-xs font-bold uppercase tracking-[0.12em]">
            Total
          </span>
          <strong className="text-xl">{currencyFormatter.format(total)}</strong>
        </div>
      </section>

      <section className="border-t border-slate-300 pt-5">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
          Observações
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">{order.notes}</p>
      </section>

      <div className="mt-auto grid grid-cols-2 gap-16 pt-20 text-center text-xs text-slate-600">
        <div className="border-t border-slate-500 pt-2">
          Responsável DetailFlow
        </div>
        <div className="border-t border-slate-500 pt-2">Cliente</div>
      </div>

      <footer className="mt-8 flex items-center justify-between border-t border-slate-300 pt-3 text-[9px] uppercase tracking-[0.1em] text-slate-500">
        <span>DetailFlow - Estética automotiva</span>
        <span>{order.number}</span>
      </footer>
    </article>
  );
}
