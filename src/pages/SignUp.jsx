import React from "react";
import Partner from '../component/Partner';


const SignUp = () => {
    return(
        <>
            <div className=" flex flex-col justify-center items-center p-8">
                <div className=" flex flex-col w-1/4 justify-between gap-y-4">

                <h1 className="text-xl font-bold"> SignUp and start learning</h1>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Full Name"
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
                    type="pasword"
                    id="password"
                    name="password"
                    placeholder="password"
                    className="p-5 bg-white border border-[#4a154b] focus:outline-none"
                  />

                <input
                  type="submit"
                  value="Sign Up"
                  className="bg-[#4a154b] text-white font-bold text-lg hover:bg-[#4a153b] p-5 mt-8"
                />
                <hr/>
                <div className="flex justify-center items-center gap-x-5">Already have an account ? <a href="./Login.jsx" className=" text-blue-500 font-bold underline">log in </a></div>
                   </div>
            </div>
          <Partner/>
        </>
    );
};
export default SignUp;
