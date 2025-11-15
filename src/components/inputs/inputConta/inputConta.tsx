import { MenuItem, TextField } from "@mui/material";
import { mockDataContas } from "./inputConta.static";

const InputConta = () => {
  return (
    <TextField
      select
      variant="outlined"
      defaultValue={mockDataContas[0].value}
      label="Conta"
      margin="normal"
      required
      fullWidth
    >
      {mockDataContas.map((conta) => (
        <MenuItem key={conta.value} value={conta.value}>
          {conta.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default InputConta;
