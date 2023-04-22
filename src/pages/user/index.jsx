import "./style.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserInfo = () => {
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nin, setNin] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !birthDate || !address || !phoneNumber || !nin) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      navigate("/success");
      toast.success("Success");
      setFullName("");
      setBirthDate("");
      setAddress("");
      setPhoneNumber("");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <section className="user">
        <p>
          To comply with Know Your Customer (KYC) regulations, we kindly ask you
          to provide us with some personal information. Please fill in the form
          below with accurate details. All information submitted is securely
          stored and will only be used for verification purposes.
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Full name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="dd/mm/yr"
              onChange={(e) => setBirthDate(e.target.value)}
              value={birthDate}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </label>
          <label>
            <input
              type="phone"
              placeholder="Phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="NIN"
              onChange={(e) => setNin(e.target.value)}
              value={nin}
            />
          </label>
          <button className="verify-btn">VERIFY ME</button>
        </form>
      </section>
    </>
  );
};

export default UserInfo;
