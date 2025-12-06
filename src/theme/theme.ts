import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: "#784BFF",
            color: "#FFFFFF",
            height: "3rem",
            transition: "background-color 0.3s ease",
            ":hover": {
              backgroundColor: "#5e34d1",}

          },
        },
        {
          props: { variant: "secondary" },
          style: {
            backgroundColor: "#adadadff",
            color: "#FFFFFF",
            height: "3rem",
            transition: "background-color 0.3s ease",
            ":hover": {
              backgroundColor: "#8c8c8cff", }
          },
        },
      ],
    },
  },
  palette: {
    primary: { main: "#784BFF" },
  },
});
