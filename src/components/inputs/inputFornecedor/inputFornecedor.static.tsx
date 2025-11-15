interface iMockDataFornecedor {
  id: number;
  nome: string;
  empresa: boolean;
  cpf: string | null;
  cnpj: string | null;
}

export const mockDataFornecedor: iMockDataFornecedor[] = [
  {
    id: 1,
    nome: "Joaquim da Silva",
    empresa: false,
    cpf: "094.654.000-45",
    cnpj: null,
  },
  {
    id: 2,
    nome: "Maria Josefina",
    empresa: false,
    cpf: "457.328.323.11",
    cnpj: null,
  },
  {
    id: 3,
    nome: "Padaria do Joaquim",
    empresa: true,
    cpf: null,
    cnpj: "05.196.321/0001-27",
  },
  {
    id: 1,
    nome: "Metasa",
    empresa: true,
    cpf: null,
    cnpj: "74.887.208/0001-00",
  },
];
