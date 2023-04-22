import "./style.scss";
import Logo from "../../assets/svgs/Logo";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../userContext";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../config/firebase";

const Navbar = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  console.log(user);

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("You have successfully logged out of your account");
    } catch (error) {
      toast.error(error.message);
    }
    navigate("/");
  };

  return (
    <section className="navbar">
      <div className="navbar__logo-box">
        <Link to="/" className="navbar__logo-box">
          <Logo className="logo" />
          <h2 className="login__heading">Accrue</h2>
        </Link>
      </div>
      <div className="navbar__buttons">
        {!user && (
          <>
            <button
              className="navbar__login"
              onClick={() => navigate("/login")}
            >
              LOGIN
            </button>
            <button
              className="navbar__signup"
              onClick={() => navigate("/sign-up")}
            >
              SIGN UP
            </button>
          </>
        )}

        {user && (
          <div className="logout-wrapper">
            <p className="user-email">Hello, {user.email}</p>
            <button className="navbar__logout" onClick={logout}>
              LOGOUT
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
