import { Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <Outlet />
      <Button onClick={() => navigate("/despesas")}>Ir para despesas</Button>
      <Button onClick={() => navigate("/contas")}>Ir para contas</Button>
    </>
  );
};

export default MainLayout;
