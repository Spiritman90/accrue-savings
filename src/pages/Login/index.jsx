import "./style.scss";
import LoginImage from "../../assets/img/pablo-sign-in 1.jpg";
import ShowPasswordIcon from "../../assets/svgs/ShowPasswordIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { toast } from "react-toastify";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!email || !password) {
  //     toast.error("Please enter email or password");
  //     return;
  //   }
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  //   navigate("/user-info");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter email or password");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (!user.emailVerified) {
        toast.error("Email is not verified");
        await sendEmailVerification(user);
        return;
      }
      navigate("/user-info");
    } catch (error) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        toast.error("Invalid email or password");
        return;
      }
      toast.error(error.message);
    }
  };

  return (
    <section className="login">
      <div className="login__image-wrapper">
        <div className="login__background-photo">
          <img src={LoginImage} alt="login" className="login__photo" />
        </div>
        <div className="login__text-wrapper">
          <div className="login__welcome-box">
            <h2 className="login__welcome">Welcome!</h2>
            <p className="login__details">Enter details to login.</p>
          </div>

          <div className="login__info">
            <form className="login__form" onSubmit={handleSubmit}>
              <label className="login__label">
                <input
                  type="email"
                  placeholder="Email"
                  className="login__input"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </label>
              <label className="login__label">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="login__input"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {password.length > 0 && (
                  <p className="login__warning">
                    Password must be minimum of 6 characters!
                  </p>
                )}
              </label>
              <div className="login__show" onClick={handleShowPassword}>
                <ShowPasswordIcon />
              </div>
              <button type="submit" className="login__button">
                LOG IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
