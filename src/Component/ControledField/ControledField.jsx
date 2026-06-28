import React, { useState } from "react";

const ControledField = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (password.length < 6) {
      setError("Please enter 6 digit code");
    } else {
      setError("");
    }
  };
  const HandlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleEmailOnchange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          defaultValue={name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleEmailOnchange}
          defaultValue={email}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={HandlePasswordOnChange}
          defaultValue={password}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ControledField;
