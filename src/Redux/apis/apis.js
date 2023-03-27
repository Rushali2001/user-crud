import axios from "axios";

const baseUrl = "http://localhost:3030";

export const usersListData = async (data) => {
  const res = await axios.get(`${baseUrl}/users`);
  return res;
};

export const addUser = async (data) => {
  const res = await axios.post(`${baseUrl}/users`, data);
  return res;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`${baseUrl}/users/${id}`);
  return res;
};

export const viewUser = async (id) => {
  const res = await axios.get(`${baseUrl}/users/${id}`);
  return res;
};

export const editUser = async (id, data) => {
  const res = await axios.put(`${baseUrl}/users/${id}`, data);
  return res;
};
