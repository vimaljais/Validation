import React from "react";
import Alert from "@mui/material/Alert";

const Toast = ({ type, value }) => {
  console.log(type, value);
  return <Alert severity={type}>{value}</Alert>;
};

export default Toast;
