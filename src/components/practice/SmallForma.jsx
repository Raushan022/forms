import React, { useState } from "react";

const SmallForma = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [country, setCountry] = useState("");

  const handleHobbiesCheckbox = (e) => {
    console.log(e);
    const { value, checked } = e.target;

    setHobbies((prev) =>
      checked ? [...prev, value] : prev.filter((hobby) => hobby !== value)
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Name", name);
    console.log("gender", gender);
    console.log("hobbies", hobbies);
    console.log("country", country);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="max-w-sm mx-auto p-4 border border-white m-4 rounded-lg"
    >
      <label className="block">
        Name:
        <input
          type="text"
          className="border w-full px-2 mt-1"
          name="firstName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <div className="flex items-center gap-2 mt-2">
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
      </div>

      <label className="block mt-2">
        Hobbies:
        <input
          type="checkbox"
          value="Reading"
          onChange={handleHobbiesCheckbox}
        />
        Reading
        <input
          type="checkbox"
          value="Gaming"
          onChange={handleHobbiesCheckbox}
        />
        Gaming
        <input
          type="checkbox"
          value="Cooking"
          onChange={handleHobbiesCheckbox}
        />
        Cooking
      </label>

      <label className="block mt-2">
        Country:
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
        </select>
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default SmallForma;
