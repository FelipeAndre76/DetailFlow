"use client";
import { addDays, differenceInCalendarDays, format, isSameDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";

const initialAppointments = [
  {
    id: "appointment-1",
    dayOffset: 0,
    time: "09:00",
    service: "Lavagem técnica",
    customer: "Carlos Andrade",
  },
  {
    id: "appointment-2",
    dayOffset: 0,
    time: "11:30",
    service: "Polimento comercial",
    customer: "Mariana Souza",
  },
  {
    id: "appointment-3",
    dayOffset: 1,
    time: "10:00",
    service: "Higienização interna",
    customer: "Rafael Martins",
  },
];
export default function AgendaPage() {
  const [selectedDate, setSelectedDate] = useState(() => new Date());

  const formattedDate = format(selectedDate, "EEEE, dd 'de' MMMM", {
    locale: ptBR,
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [appointments, setAppointments] = useState(initialAppointments);

  const appointmentsForDay = appointments
    .filter((appointment) =>
      isSameDay(addDays(new Date(), appointment.dayOffset), selectedDate),
    )
    .sort((first, second) => first.time.localeCompare(second.time));

  function handleCreateAppointment(formData: FormData) {
    const time = String(formData.get("time"));
    const service = String(formData.get("service"));
    const customer = String(formData.get("customer"));

    setAppointments((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        dayOffset: differenceInCalendarDays(selectedDate, new Date()),
        time,
        service,
        customer,
      },
    ]);

    setIsFormOpen(false);
  }

  function handleDeleteAppointment(id: string) {
    setAppointments((current) =>
      current.filter((appointment) => appointment.id !== id),
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Agenda</h1>
      <p className="mt-2 text-slate-400">
        Organize os agendamentos e acompanhe os serviços do dia.
      </p>
      <button
        type="button"
        onClick={() => setIsFormOpen((current) => !current)}
        className="mt-6 flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-400"
      >
        <Plus className="size-4" />
        Novo agendamento
      </button>

      {isFormOpen && (
        <form
          action={handleCreateAppointment}
          className="mt-4 rounded-lg border border-white/10 bg-white/5 p-5"
        >
          <h2 className="text-lg font-semibold text-white">Novo agendamento</h2>
          <p className="mt-1 text-sm text-slate-400">
            Preencha os dados do serviço.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <label className="grid gap-2 text-sm text-slate-300">
              Horário
              <input
                type="time"
                name="time"
                required
                className="h-10 rounded-lg border border-white/10 bg-slate-950 px-3 text-white"
              />
            </label>

            <label className="grid gap-2 text-sm text-slate-300">
              Serviço
              <input
                type="text"
                name="service"
                required
                placeholder="Ex.: Lavagem técnica"
                className="h-10 rounded-lg border border-white/10 bg-slate-950 px-3 text-white"
              />
            </label>

            <label className="grid gap-2 text-sm text-slate-300">
              Cliente
              <input
                type="text"
                name="customer"
                required
                placeholder="Nome do cliente"
                className="h-10 rounded-lg border border-white/10 bg-slate-950 px-3 text-white"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-400"
          >
            Salvar agendamento
          </button>
        </form>
      )}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setSelectedDate(addDays(selectedDate, -1))}
          aria-label="Dia anterior"
          className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
        >
          <ChevronLeft className="size-5" />
        </button>

        <p className="min-w-60 capitalize text-lg font-semibold text-white">
          {formattedDate}
        </p>

        <button
          type="button"
          onClick={() => setSelectedDate(addDays(selectedDate, 1))}
          aria-label="Próximo dia"
          className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
        >
          <ChevronRight className="size-5" />
        </button>

        <button
          type="button"
          onClick={() => setSelectedDate(new Date())}
          className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
        >
          Hoje
        </button>
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-white">
          {appointmentsForDay.length} agendamentos
        </h2>

        <div className="mt-4 divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10 bg-white/5">
          {appointmentsForDay.length === 0 ? (
            <div className="flex flex-col items-center px-5 py-12 text-center">
              <CalendarDays className="size-8 text-slate-500" />
              <p className="mt-3 font-medium text-white">Nenhum agendamento</p>
              <p className="mt-1 text-sm text-slate-400">
                Não há serviços programados para este dia.
              </p>
            </div>
          ) : (
            appointmentsForDay.map((appointment) => (
              <div
                key={appointment.id}
                className="grid grid-cols-[64px_1fr_auto] items-center gap-4 px-5 py-4"
              >
                <time className="font-semibold text-sky-300">
                  {appointment.time}
                </time>

                <div>
                  <p className="font-medium text-white">
                    {appointment.service}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    {appointment.customer}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleDeleteAppointment(appointment.id)}
                  aria-label={`Excluir agendamento de ${appointment.customer}`}
                  className="flex size-9 items-center justify-center rounded-lg text-slate-400 hover:bg-red-500/10 hover:text-red-300"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
