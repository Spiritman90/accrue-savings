import React from "react";
import "./style.scss";
import { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserInfo from "../user";
// import EmailSuccess from "../emailSuccess";

const VerifyEmail = () => {
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user && user.emailVerified) {
      setIsEmailVerified(true);
    }
  }, []);

  const sendVerificationEmail = () => {
    const user = auth.currentUser;
    sendEmailVerification(user)
      .then(() => {
        toast.info("Verification email sent, please check your email");
      })
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="verify">
      {isEmailVerified ? (
        // <p>Congratulations 🎉 ! Your email has been verified successfully.</p>
        <UserInfo />
      ) : (
        <>
          <p className="verify__welcome">
            Welcome to Accrue. To finish setting up your account, we need to
            make sure this email address is yours. <br />
            Please click on the button below to verify your email address
          </p>
          <button onClick={sendVerificationEmail} className="verify__btn">
            Send verification email
          </button>
        </>
      )}
    </section>
  );
};

export default VerifyEmail;
