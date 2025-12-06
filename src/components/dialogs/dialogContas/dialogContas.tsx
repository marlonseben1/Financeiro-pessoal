import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import { IoClose } from "react-icons/io5";
import { colorPalette } from "../../../theme/colorPalette";
import InputBanco from "../../inputs/inputBanco/inputBanco";
import InputNumero from "../../inputs/inputNumeroDocumento/inputNumero";
import InputValor from "../../inputs/inputValor/inputValor";
import type { DialogContasProps } from "./dialogContas.types";

const DialogContas = (props: DialogContasProps) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle>Cadastro de contas</DialogTitle>
      <IconButton
        aria-label="close"
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
        }}
        onClick={props.onClose}
      >
        <IoClose size={"25px"} color={colorPalette.neutral[400]} />
      </IconButton>
      <DialogContent>
        <Box component="form">
          <Grid container spacing={2}>
            <Grid size={7}>
              <InputBanco />
            </Grid>
            <Grid size={5}>
              <InputNumero label="Agência" margin="normal" required fullWidth />
            </Grid>
            <Grid size={7}>
              <InputNumero label="Número da conta" margin="none" required fullWidth />
            </Grid>
            <Grid size={5}>
              <InputValor label="Valor inicial" margin="none" />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} variant="secondary">
          Cancelar
        </Button>
        <Button onClick={props.onClose} variant="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogContas;
