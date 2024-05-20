import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:7000/user/login", {
        email,
        password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Login page</h1>
      <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
        <div className="space-x-2">
          <label>email</label>
          <input
            placeholder="email..."
            className="border border-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-x-2">
          <label>password</label>
          <input
            placeholder="password..."
            className="border border-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={login}
          className="bg-blue-400 hover:bg-blue-300 px-2 py-1 rounded-xl"
        >
          Login
        </button>
      </form>
    </div>
  );
}
