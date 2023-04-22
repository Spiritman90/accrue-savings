import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import { useEffect } from "react";
import { auth } from "../../config/firebase";
import { applyActionCode } from "firebase/auth";

const EmailSuccess = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const oobCode = searchParams.get("oobCode");
  console.log(oobCode);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await applyActionCode(auth, oobCode);
        console.log("Email verification successful");
      } catch (error) {
        console.error("Email verification error:", error);
      }
    };
    verifyEmail();
  }, [oobCode]);

  const handleClick = () => {
    navigate("/user-info");
  };

  return (
    <section className="success">
      <h2 className="success__heading">Email Verification Success ✅</h2>
      <p className="success__text">
        Congratulations 🎉 ! Your email has been verified successfully.
        <br /> You can now sign in with your account
      </p>
      <button className="success__btn" onClick={handleClick}>
        Login
      </button>
    </section>
  );
};

export default EmailSuccess;
