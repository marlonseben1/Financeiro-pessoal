import { Button } from "@mui/material";
import { colorPalette } from "../../../theme/colorPalette";
import type { BotaoCadastroProps } from "./botaoCadastro.types";

export const BotaoCadastro = ({ tipo, onClick }: BotaoCadastroProps) => {
  return (
    <Button
      sx={{
        backgroundColor: colorPalette.purple[100],
        color: colorPalette.neutral[0],
        fontSize: "16px",
        fontWeight: "bold",
      }}
      onClick={onClick}
    >
      {tipo === "conta" ? "Nova conta" : "Nova categoria"}
    </Button>
  );
};
