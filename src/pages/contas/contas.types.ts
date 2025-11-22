export type TBanco =
  | "Nubank"
  | "Banco do Brasil"
  | "Inter"
  | "Itau"
  | "Bradesco"
  | "Santander";


export interface ContasDataItem {
    id: number;
    nomeConta: string;
    tipoConta: 'Poupanca' | 'Corrente';
    banco: TBanco;
    saldo: number;
}