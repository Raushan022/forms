import { useState } from "react";

const PracLoginForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userName: ", userName);
    console.log("email: ", email);
    console.log("password: ", password);

    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
        <h2 className="font-bold text-2xl mb-4">Sign Up</h2>

        <label className="block mb-2">
          Username:
          <input
            type="text"
            className="border w-full px-2 py-1 mt-1"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            className="border w-full px-2 py-1 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            className="border w-full px-2 py-1 mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" className="border rounded px-4 py-2 bg-blue-500">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default PracLoginForm;
