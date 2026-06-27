import { CalendarDays, CircleDollarSign, Clock3, Users } from "lucide-react";

const indicators = [
  {
    label: "Agendamentos hoje",
    value: "8",
    icon: CalendarDays,
    color: "bg-sky-500/10 text-sky-300",
  },
  {
    label: "Serviços em andamento",
    value: "5",
    icon: Clock3,
    color: "bg-amber-500/10 text-amber-300",
  },
  {
    label: "Faturamento do mês",
    value: "R$ 24.850",
    icon: CircleDollarSign,
    color: "bg-emerald-500/10 text-emerald-300",
  },
  {
    label: "Clientes ativos",
    value: "126",
    icon: Users,
    color: "bg-rose-500/10 text-rose-300",
  },
];

const appointments = [
  {
    time: "09:00",
    service: "Lavagem técnica",
    vehicle: "Honda Civic",
    customer: "Carlos Andrade",
    status: "Confirmado",
  },
  {
    time: "11:30",
    service: "Polimento comercial",
    vehicle: "Toyota Corolla",
    customer: "Mariana Souza",
    status: "Aguardando",
  },
  {
    time: "14:00",
    service: "Higienização interna",
    vehicle: "Jeep Compass",
    customer: "Rafael Martins",
    status: "Confirmado",
  },
];
export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      <p className="mt-2 text-slate-400">
        Visão geral da operação da estética automotiva.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {indicators.map((indicator) => {
          const Icon = indicator.icon;
          return (
            <div
              key={indicator.label}
              className="rounded-lg border border-white/10 bg-white/5 p-5"
            >
              <div
                className={`mb-4 flex size-10 items-center justify-center rounded-lg ${indicator.color}`}
              >
                <Icon className="size-5" />
              </div>
              <p className="text-sm text-slate-400">{indicator.label}</p>
              <strong className="mt-2 block text-3xl text-white">
                {indicator.value}
              </strong>
            </div>
          );
        })}
      </div>

      <section className="mt-8">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Próximos agendamentos
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Serviços programados para hoje
          </p>
        </div>

        <div className="mt-4 divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10 bg-white/5">
          {appointments.map((appointment) => (
            <div
              key={`${appointment.time}-${appointment.customer}`}
              className="grid grid-cols-[64px_1fr] items-center gap-4 px-5 py-4 sm:grid-cols-[64px_1fr_auto]"
            >
              <time className="font-semibold text-sky-300">
                {appointment.time}
              </time>

              <div>
                <p className="font-medium text-white">{appointment.service}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {appointment.vehicle} — {appointment.customer}
                </p>
              </div>
              <span
                className={`col-start-2 w-fit rounded-full px-2.5 py-1 text-xs font-medium sm:col-start-auto ${
                  appointment.status === "Confirmado"
                    ? "bg-emerald-500/10 text-emerald-300"
                    : "bg-amber-500/10 text-amber-300"
                }`}
              >
                {appointment.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
