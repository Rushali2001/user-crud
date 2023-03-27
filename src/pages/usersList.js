import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../Redux/slice/userslice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteUser } from "../Redux/apis/apis";

const UsersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersData = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(usersActions.usersList());
  }, []);

  const handleAdd = () => {
    navigate("/adduser");
  };

  const handleEdit = (data) => {
    navigate(`/edit/${data.id}`);
  };

  const handleDelete = async (data) => {
    console.log(data);

    const res = await deleteUser(data.id);

    if (res.data) {
      dispatch(usersActions.usersList());
    } else {
      alert("something went wrong");
    }
  };

  return (
    <>
      <Box marginTop={5} sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleAdd} variant="contained">
          Add
        </Button>
      </Box>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <Box sx={{ width: "80%" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usersData?.list?.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.fullName}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell sx={{ cursor: "pointer" }}>
                      <Box onClick={() => handleEdit(row)}>
                        <EditIcon />
                      </Box>
                      <Box onClick={() => handleDelete(row)}>
                        <DeleteIcon />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </>
  );
};

export default UsersList;
