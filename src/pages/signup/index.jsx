import "./style.scss";
import LoginImage from "../../assets/img/pablo-sign-in 1.jpg";
import ShowPasswordIcon from "../../assets/svgs/ShowPasswordIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter email or password");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      toast.error(error.message);
    }
    navigate("/verify-email");
  };

  return (
    <section className="login">
      <div className="login__image-wrapper">
        <div className="login__background-photo">
          <img src={LoginImage} alt="login" className="login__photo" />
        </div>
        <div className="login__text-wrapper">
          <div className="login__welcome-box">
            <h2 className="login__welcome">Sign Up</h2>
            <p className="login__details">Enter details to sign up.</p>
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
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
