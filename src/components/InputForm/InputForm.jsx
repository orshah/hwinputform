import "./inputForm.style.css";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const theme = createTheme();

export default function InputForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LocalShippingOutlinedIcon fontSize="large" />

          <Typography component="h1" variant="h5">
            Delivery Form
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Address"
              label="Address"
              type="address"
              id="address"
              autoComplete="address"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker sx={{ mt: 2 }} />
            </LocalizationProvider>
            <br></br>
            <FormControlLabel
              sx={{ mt: 2 }}
              control={<Checkbox value="remember" color="success" />}
              label="Signature"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Phone"
              label="Phone Number"
              type="number"
              id="number"
              autoComplete="phone-number"
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
