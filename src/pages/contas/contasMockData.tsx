import type { ContasDataItem } from "./contas.types";

export const ContasMockData: ContasDataItem[] = [
  {
    id: 1,
    nomeConta: "Minha conta principal",
    tipoConta: "Corrente",
    banco: "Banco do Brasil",
    saldo: 250.0,
  },
  {
    id: 2,
    nomeConta: "Conta dois",
    tipoConta: "Poupanca",
    banco: "Nubank",
    saldo: 250.0,
  },
];
