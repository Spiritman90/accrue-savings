import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NonAuthRoutes, AuthRoutes } from "./urls";
import LoginPage from "./pages/Login";
import React from "react";
import VerifyEmail from "./pages/Verifymail";
import EmailSuccess from "./pages/emailSuccess";
import UserInfo from "./pages/user";
import Homepage from "./pages/home";
import Navbar from "./components/navbar";
import SignUp from "./pages/signup";

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
          <Route path={NonAuthRoutes.emailSuccess} element={<EmailSuccess />} />
          <Route path={AuthRoutes.userInfo} element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
