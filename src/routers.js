import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./urls";
import LoginPage from "./pages/Login";
import React from "react";
import VerifyEmail from "./pages/Verifymail";
import UserInfo from "./pages/user";
import Homepage from "./pages/home";
import Navbar from "./components/navbar";
import SignUp from "./pages/signup";
import Success from "./pages/emailSuccess";

function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={NonAuthRoutes.homePage} element={<Homepage />} />
          <Route path={NonAuthRoutes.loginPage} element={<LoginPage />} />
          <Route path={NonAuthRoutes.signUpPage} element={<SignUp />} />
          <Route path={NonAuthRoutes.verifyEmail} element={<VerifyEmail />} />
          <Route path={NonAuthRoutes.success} element={<Success />} />
          <Route path={AuthRoutes.userInfo} element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
