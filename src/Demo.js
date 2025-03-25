import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

// Create a custom theme with a tertiary color
const theme = createTheme({
  palette: {
    primary: {
      main: "#DC5F00", // Example tertiary color, adjust as needed
      contrastText: "#000",
    },
    secondary: {
      main: "#000", // Example tertiary color, adjust as needed
      contrastText: "#000",
    },
    tertiary: {
      main: "#EEEEEE", // Example tertiary color, adjust as needed
      contrastText: "#000",
    },
  },
});

export default function BasicButtonGroup() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="outlined" color="secondary" sx={{ marginRight: 3 }}>
        {" "}
        Log In / Register
      </Button>
      <ButtonGroup
        variant="contained"
        color="tertiary"
        aria-label="Basic button group"
      >
        <Button>Features</Button>
        <Divider variant="vertical" color="#DC5F00" width="4" />
        <Button>Benefits</Button>
        <Divider variant="vertical" color="#DC5F00" width="4" />
        <Button>Contact Us</Button>
        <Divider variant="vertical" color="#DC5F00" width="4" />
        <Button endIcon={<KeyboardArrowDownIcon />}>English</Button>
      </ButtonGroup>
    </ThemeProvider>
  );
}
