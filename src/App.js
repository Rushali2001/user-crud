import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersList from "./pages/usersList";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<UsersList />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
