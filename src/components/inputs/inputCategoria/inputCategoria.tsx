import { MenuItem, TextField } from "@mui/material";
import { mockDataCategorias } from "./inputCategoria.static";

const InputCategoria = () => {
  return (
    <TextField
      select
      variant="outlined"
      defaultValue={mockDataCategorias[0].value}
      label="Categoria"
      margin="normal"
      fullWidth
      required
    >
      {mockDataCategorias.map((categoria) => (
        <MenuItem key={categoria.value} value={categoria.value}>
          {categoria.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default InputCategoria;
