import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { editUser, viewUser } from "../Redux/apis/apis";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [submitData, setSubmitData] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    (async () => {
      if (params.id) {
        const res = await viewUser(params.id);

        if (res.data) {
          setSubmitData({
            name: res.data.fullName,
            ...res.data,
          });
        }
      }
    })();
  }, [params.id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      ...submitData,
      fullName: submitData?.name,
    };

    const res = await editUser(data.id, data);

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
            value={submitData?.id || ""}
            onChange={(event) => {
              setSubmitData({ ...submitData, id: event.target.value });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={submitData?.name || ""}
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
            value={submitData?.email || ""}
            onChange={(event) => {
              setSubmitData({ ...submitData, email: event.target.value });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            type="number"
            value={submitData?.phoneNumber || ""}
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

export default EditUser;
