import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Partner from '../component/Partner';

const SignUp = () => {
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      age: document.getElementById("age").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    try {
      console.log(formData);
      let res = await axios.post(
        "http://localhost:7000/api/auth/signup",
        formData
      );
      console.log(res.data);
      if (res.data.status === "success") {
        navigate("/login");
      } else {
        setErrors(res.data.detail);
      }
    } catch (err) {
      console.log(err);
      setErrors("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center p-8">
        <div className="flex flex-col w-1/4 justify-between gap-y-4">
          <h1 className="text-xl font-bold">SignUp and start learning</h1>
          {errors && <div className="text-red-500">{errors}</div>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="first name"
              className="p-5 bg-white text-black border border-[#4a154b] focus:outline-none"
            />
<input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="last name"
              className="p-5 bg-white text-black border border-[#4a154b] focus:outline-none"
            />
              <input
                type="number"
                id="age"
                name="age"
                placeholder="age"
                className="p-5 bg-white text-black border border-[#4a154b] focus:outline-none"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="p-5 bg-white text-black border border-[#4a154b] focus:outline-none"
                />
             <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="phone number"
              className="p-5 bg-white text-black border border-[#4a154b] focus:outline-none"
            />
            
              <input
                type="text"
                id="username"
                name="username"
                placeholder="user name"
                className="p-5 bg-white text-black border border-[#4a154b] focus:outline-none"
              />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="p-5 bg-white border border-[#4a154b] focus:outline-none"
            />
            <input
              type="submit"
              value="Sign Up"
              className="bg-[#4a154b] text-white font-bold text-lg hover:bg-[#4a153b] p-5 mt-8"
            />
          </form>
          <hr />
          <div className="flex justify-center items-center gap-x-5">
            Already have an account?
            <a href="/login" className="text-blue-500 font-bold underline">log in</a>
          </div>
        </div>
      </div>
      <Partner />
    </>
  );
};

export default SignUp;
