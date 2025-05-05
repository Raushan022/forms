import { useState } from "react";

const ValidateProfile = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setError((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  const validate = () => {
    const newError = {};

    if (!formData.firstName.trim()) {
      newError.firstName = "FirstName is required";
    } else if (
      formData.firstName.length < 2 ||
      formData.firstName.length > 20
    ) {
      newError.firstName = "First name must be 2–20 characters long";
    }

    if (!formData.lastName.trim()) {
      newError.lastName = "lastName is required";
    } else if (formData.lastName.length < 2 || formData.lastName.length > 20) {
      newError.lastName = "Last name must be 2–20 characters long";
    }

    if (!formData.email.trim()) {
      newError.email = "email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newError.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newError.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newError.phone = "Phone must be exactly 10 digits";
    }

    if (!formData.password.trim()) {
      newError.password = "Password must be filled";
    } else if (formData.password.length < 6 || !/\d/.test(formData.password)) {
      newError.password =
        "Password must be at least 6 characters and include a number";
    }

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validate();

    if (Object.keys(validationError).length > 0) {
      setError(validationError);
      return;
    }

    console.log("email: ", formData.firstName);
    console.log("lastName: ", formData.lastName);
    console.log("email: ", formData.email);
    console.log("phone: ", formData.phone);
    console.log("password: ", formData.password);

    setFormData(initialFormData);
    setError({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-4 border border-white m-4 rounded-lg"
    >
      <h2 className="text-2xl font-bold m-4">My Profile</h2>

      <label className="block ">
        FirstName:
        <input
          type="text"
          className="border w-full px-2 mt-1"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      {error.firstName && (
        <p className="text-red-500 text-sm">{error.firstName}</p>
      )}

      <label className="block mt-2">
        LastName:
        <input
          type="text"
          className="border w-full px-2 mt-1"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      {error.lastName && (
        <p className="text-red-500 text-sm">{error.lastName}</p>
      )}

      <label className="block mt-2">
        Email:
        <input
          type="email"
          className="border w-full px-2 mt-1"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      {error.email && <p className="text-red-500 text-sm">{error.email}</p>}

      <label className="block mt-2">
        Phone:
        <input
          type="number"
          className="border w-full px-2 mt-1"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      {error.phone && <p className="text-red-500 text-sm">{error.phone}</p>}

      <label className="block mt-2">
        Password:
        <input
          type="text"
          className="border w-full px-2 mt-1"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      {error.password && (
        <p className="text-red-500 text-sm">{error.password}</p>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Login
      </button>
    </form>
  );
};

export default ValidateProfile;
