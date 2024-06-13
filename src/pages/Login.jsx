import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import personone from "../asset/personone.png";

const Login = () => {
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();

    let formData = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

  
    try {
      let res = await axios.post(
        "http://localhost:7000/api/auth/signin",
        formData
      );
      console.log(res.data);
      let data = res.data;
      if (data.user !== undefined) {
        localStorage.setItem("username", data.user.username);
        localStorage.setItem("full_name", data.user.full_name);
        localStorage.setItem("email", data.user.email);

    }
    else{
      navigate("/");
    }
    } catch (err) {
      console.log(err);
      setErrors(err.response.data.detail);
    }
  };

  return (
    <>
      <div className="bg-white h-screen font-family-karla flex flex-col justify-center items-center">
        <div className="bg-[#F5F5F5] w-3/5 flex flex-col h-11/12 p-5 ">
          <p className="text-center text-4xl">Log in to Your Udemy account </p>
          <div className=" flex flex-row justify-around items-center">
            <div className="w-1/3 flex justify-center">
              <div>
                <img src={personone} alt="people" />
              </div>
            </div>

            <div className="w-1/3 flex flex-col">
              <form onSubmit={handleSubmit}
                    method="POST" 
                    className="flex flex-col pt-3 md:pt-8">
                      
                <div className="flex flex-col pt-4">
                  <label className="text-sm m-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="p-2 bg-white border border-[#4a154b] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col pt-4">
                  <label className="text-sm m-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="p-2 bg-white border border-[#4a154b] focus:outline-none"
                  />
                </div>

                <input
                  type="submit"
                  value="Log In"
                  className="bg-[#4a154b] text-white font-bold text-lg hover:bg-[#4a153b] p-2 mt-8"
                />
              </form>
              <div className="flex justify-between  pt-6 pb-8">
                <a>
                  <button className="text-black hover:underline hover:text-blue-500">
                    create account
                  </button>
                </a>
                <a className="text-center text-blue-500 underline">forget password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
