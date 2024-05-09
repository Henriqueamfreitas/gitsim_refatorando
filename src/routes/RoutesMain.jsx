import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage"
import { HomePage } from "../pages/HomePage";
import { useState } from "react";

export const RoutesMain = () => {
   const [user, setUser] = useState(null)
    return (
       <Routes>
          <Route path="/" element={<LoginPage user={user} setUser={setUser} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage user={user} setUser={setUser} />} />
       </Routes>
    );
 };