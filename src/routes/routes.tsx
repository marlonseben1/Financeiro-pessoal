import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/app/mainLayout/mainLayout";
import Categorias from "../pages/categorias/categorias.tsx";
import Contas from "../pages/contas/contas";
import { Despesas } from "../pages/despesas/despesas.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "contas", element: <Contas /> },
      { path: "despesas", element: <Despesas /> },
      { path: "categorias", element: <Categorias /> },
    ],
  },
]);
