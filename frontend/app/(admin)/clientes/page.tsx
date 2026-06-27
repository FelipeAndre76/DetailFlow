"use client";

import { Search, UserPlus, X } from "lucide-react";
import { useState } from "react";

import { clients } from "@/lib/clients";

export default function ClientsPage() {
  const [query, setQuery] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [clientList, setClientList] = useState(clients);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredClients = clientList.filter((client) =>
    [client.name, client.phone, client.email].some((value) =>
      value.toLowerCase().includes(normalizedQuery),
    ),
  );

  function handleCreateClient(formData: FormData) {
    const name = String(formData.get("name"));
    const phone = String(formData.get("phone"));
    const email = String(formData.get("email"));

    setClientList((current) => [
      ...current,
      {
        id: `CLI-${String(current.length + 1).padStart(3, "0")}`,
        name,
        phone,
        email,
        vehicles: 0,
      },
    ]);

    setIsFormOpen(false);
  }

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Clientes</h1>
          <p className="mt-2 text-slate-400">
            Consulte clientes e seus veículos cadastrados.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsFormOpen((current) => !current)}
          className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-400"
        >
          {isFormOpen ? (
            <X className="size-4" />
          ) : (
            <UserPlus className="size-4" />
          )}
          {isFormOpen ? "Fechar" : "Novo cliente"}
        </button>
      </div>

      {isFormOpen && (
        <form
          action={handleCreateClient}
          className="mt-6 rounded-lg border border-white/10 bg-white/5 p-5"
        >
          <h2 className="text-lg font-semibold text-white">Cadastrar cliente</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <label className="grid gap-2 text-sm text-slate-300">
              Nome
              <input
                name="name"
                required
                className="h-10 rounded-lg border border-white/10 bg-slate-950 px-3 text-white outline-none focus:border-sky-500/50"
              />
            </label>

            <label className="grid gap-2 text-sm text-slate-300">
              Telefone
              <input
                name="phone"
                type="tel"
                required
                placeholder="(11) 99999-9999"
                className="h-10 rounded-lg border border-white/10 bg-slate-950 px-3 text-white outline-none placeholder:text-slate-600 focus:border-sky-500/50"
              />
            </label>

            <label className="grid gap-2 text-sm text-slate-300">
              E-mail
              <input
                name="email"
                type="email"
                required
                className="h-10 rounded-lg border border-white/10 bg-slate-950 px-3 text-white outline-none focus:border-sky-500/50"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-400"
          >
            Salvar cliente
          </button>
        </form>
      )}

      <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-5">
        <p className="text-sm text-slate-400">Clientes cadastrados</p>
        <strong className="mt-2 block text-3xl text-white">
          {clientList.length}
        </strong>
      </div>

      <div className="relative mt-6 max-w-md">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />

        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar por nome, telefone ou e-mail"
          className="h-11 w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-500/50"
        />
      </div>

      <div className="mt-6 overflow-x-auto rounded-lg border border-white/10">
        <table className="min-w-full text-left">
          <thead className="bg-white/5 text-xs uppercase text-slate-400">
            <tr>
              <th className="px-5 py-4 font-medium">Cliente</th>
              <th className="px-5 py-4 font-medium">Contato</th>
              <th className="px-5 py-4 text-center font-medium">Veículos</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/10">
            {filteredClients.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-5 py-12 text-center">
                  <p className="font-medium text-white">
                    Nenhum cliente encontrado
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Tente buscar usando outro nome, telefone ou e-mail.
                  </p>
                </td>
              </tr>
            ) : (
              filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-white/5">
                  <td className="px-5 py-4">
                    <p className="font-medium text-white">{client.name}</p>
                    <p className="mt-1 text-sm text-slate-500">{client.id}</p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-slate-300">{client.phone}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      {client.email}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-center">
                    <span className="inline-flex min-w-8 items-center justify-center rounded-full bg-sky-500/10 px-2.5 py-1 text-sm font-semibold text-sky-300">
                      {client.vehicles}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
