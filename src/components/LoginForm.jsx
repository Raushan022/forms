import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email: ", email);
    console.log("password: ", password);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-4 border border-white m-4 rounded-lg"
    >
      <h2 className="text-2xl font-bold m-4">Login</h2>

      <label className="block mb-2">
        Email:
        <input
          type="email"
          placeholder="Enter email"
          className="border w-full px-2 py-1 mt-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="block mb-4">
        Password:
        <input
          type="password"
          placeholder="Enter password"
          className="border w-full px-2 py-1 mt-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
