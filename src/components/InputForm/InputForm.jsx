import "./inputForm.style.css";
// import * as React from "react";
import React, { useState } from "react";
import Button from "@mui/material/Button";
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

const defaultFormData = {
  name: "",
  address: "",
  date: "",
  signatureRequired: false,
  phoneNumber: "",
};

export default function InputForm() {
  const [deliveryData, setDeliveryData] = useState(defaultFormData);

  const onChangeHandler = (e) => {
    setDeliveryData({ ...deliveryData, [e.target.name]: e.target.value });
  };

  const onCheckedHandler = (e) => {
    setDeliveryData({
      ...deliveryData,
      signatureRequired: e.target.checked,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
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

          <Typography component="h1" variant="h4">
            Delivery Form
          </Typography>
          <Box
            component="form"
            onSubmit={onSubmitHandler}
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
              variant="standard"
              autoComplete="name"
              autoFocus
              onChange={onChangeHandler}
              value={deliveryData.name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="address"
              label="Address"
              type="address"
              id="address"
              variant="standard"
              autoComplete="address"
              onChange={onChangeHandler}
              value={deliveryData.address}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="date"
                sx={{ mt: 2 }}
                value={deliveryData.date}
                slotProps={{ textField: { variant: "standard" } }}
              />
            </LocalizationProvider>
            <br></br>
            <FormControlLabel
              sx={{ mt: 2 }}
              control={
                <Checkbox
                  value="remember"
                  color="success"
                  onClick={onCheckedHandler}
                />
              }
              label="Signature"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phoneNumber"
              label="Phone Number"
              type="number"
              id="number"
              variant="standard"
              autoComplete="phone-number"
              onChange={onChangeHandler}
              value={deliveryData.phoneNumber}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
