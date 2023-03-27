import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { addUser } from "../Redux/apis/apis";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [submitData, setSubmitData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("sub", submitData);

    const data = {
      ...submitData,
      fullName: submitData?.name,
    };

    const res = await addUser(data);

    if (res.data) {
      navigate("/users");
    }
  };

  return (
    <div>
      {" "}
      <Box
        component="form"
        sx={{
          marginTop: "30px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        noValidate
        autoComplete="off"
      >
        <Box>
          <TextField
            sx={{ mr: 5 }}
            id="outlined-basic"
            label="Id"
            type="number"
            variant="outlined"
            onChange={(event) => {
              setSubmitData({ ...submitData, id: event.target.value });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(event) => {
              setSubmitData({ ...submitData, name: event.target.value });
            }}
          />
        </Box>
        <Box>
          <TextField
            sx={{ mr: 5 }}
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
            onChange={(event) => {
              setSubmitData({ ...submitData, email: event.target.value });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            type="number"
            onChange={(event) => {
              setSubmitData({ ...submitData, phoneNumber: event.target.value });
            }}
          />
        </Box>
        <Button type="submit" onClick={handleSubmit} variant="contained">
          submit
        </Button>
      </Box>
    </div>
  );
};

export default AddUser;
