export const serviceOrders = [
  {
    number: "OS-001",
    customer: "Carlos Andrade",
    vehicle: "Honda Civic",
    plate: "ABC1D23",
    status: "Em andamento",
    openedAt: "26/06/2026",
    notes: "Cliente solicitou atenção especial às rodas.",
    services: [
      {
        description: "Lavagem técnica completa",
        quantity: 1,
        unitPrice: 180,
      },
    ],
  },
  {
    number: "OS-002",
    customer: "Mariana Souza",
    vehicle: "Toyota Corolla",
    plate: "DEF4G56",
    status: "Aguardando",
    openedAt: "26/06/2026",
    notes: "Aguardando aprovação do orçamento.",
    services: [
      {
        description: "Polimento comercial",
        quantity: 1,
        unitPrice: 450,
      },
    ],
  },
  {
    number: "OS-003",
    customer: "Rafael Martins",
    vehicle: "Jeep Compass",
    plate: "HIJ7K89",
    status: "Concluída",
    openedAt: "25/06/2026",
    notes: "Serviço concluído e veículo entregue.",
    services: [
      {
        description: "Higienização interna",
        quantity: 1,
        unitPrice: 320,
      },
    ],
  },
];

export type ServiceOrder = (typeof serviceOrders)[number];
