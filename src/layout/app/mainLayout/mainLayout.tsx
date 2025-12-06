import { Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <Outlet />
      <Button onClick={() => navigate("/despesas")} variant="outlined" sx={{ mt: 2 }}>
        Ir para despesas
      </Button>
      <Button onClick={() => navigate("/contas")} variant="outlined" sx={{ mt: 2, ml: 2 }}>
        Ir para contas
      </Button>
      <Button onClick={() => navigate("/categorias")} variant="outlined" sx={{ mt: 2, ml: 2 }}>
        Ir para categorias
      </Button>
    </>
  );
};

export default MainLayout;
