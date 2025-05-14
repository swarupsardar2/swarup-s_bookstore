import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import AddAdmin from "./components/AddAdmin";
import AddBooks from "./components/AddBooks";
import Logout from "./components/logout";
import { useState } from "react";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";
import DeleteStudent from "./components/DeleteStudent";
import EditStudent from "./components/EditStudent";
import BorrowBook from "./components/BorrowBook";
function App() {
  const [role,setRole]=useState('')
  return (
    <BrowserRouter>
      <Navbar role={role}/>
      <Routes>
        <Route path="/" element={<Home setRole={setRole}/>}></Route>
        <Route path="/books" element={<Books role={role}/>}></Route>
        <Route path="/login" element={<Login setRoleVar={setRole}/>}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addstudent" element={<AddStudent />}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/book/:id" element={<EditBook/>}></Route>
        <Route path="/student/:id" element={<EditStudent/>}></Route>
        <Route path="/addadmin" element={<AddAdmin />}></Route>
        <Route path="/delete/:id" element={<DeleteBook/>}></Route>
        <Route path="/delete/:id" element={<DeleteStudent/>}></Route>
       <Route path="/addbook" element={<AddBooks setRole={setRole}/>}></Route>
       <Route path="/borrowbook" element={<BorrowBook />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
