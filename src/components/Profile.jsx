import React, { useState } from "react";

const Profile = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("firstName: ", formData.firstName);
    console.log("lastName: ", formData.lastName);

    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Profile Form</h2>

      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="border w-full px-2 py-1 mt-1"
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="border w-full px-2 py-1 mt-1"
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border w-full px-2 py-1 mt-1"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 my-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Profile;
