import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const register = async () => {
    try {
      const res = await axios.post("http://localhost:6000/user/register", {
        email,
        password,
        firstName,
        lastName,
        confirmPassword,
        age,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center p-10 max-w-[1176px] mx-auto">
      <h1 className="font-bold text-xl">Register page</h1>
      <form className="space-y-2 mt-7" onSubmit={(e) => e.preventDefault()}>
        <div className="space-x-2">
          <label>first Name</label>
          <input
            placeholder="email..."
            className="border-black border rounded-lg p-2"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <div className="space-x-2">
          <label>last Name</label>
          <input
            placeholder="email..."
            className="border-black border rounded-lg p-2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="space-x-2">
          <label>age</label>
          <input
            placeholder="password..."
            className="border-black border rounded-lg p-2"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="space-x-2">
          <label>email</label>
          <input
            placeholder="email..."
            className="border-black border rounded-lg p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-x-2">
          <label>password</label>
          <input
            placeholder="password..."
            className="border-black border rounded-lg p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="space-x-2">
          <label>Confirme password</label>
          <input
            placeholder="password..."
            className="border-black border rounded-lg p-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          onClick={register}
          className="bg-blue-500 p-2 text-white text-center rounded-md ml-6"
        >
          Register
        </button>
      </form>
    </div>
  );
}
