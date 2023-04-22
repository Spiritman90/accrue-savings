import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Success = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <section className="success">
      <h2 className="success__heading">Details Verification Success ✅</h2>
      <p className="success__text">
        Congratulations 🎉 ! Your details have been successfully verified.
        <br /> You can now access all the features of our platform with peace of
        mind. <br /> Thank you for choosing us.
      </p>
      <button className="success__btn" onClick={handleClick}>
        Home
      </button>
    </section>
  );
};

export default Success;
