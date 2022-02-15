import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Account from "./Pages/Account";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};
export default MainRouter;
