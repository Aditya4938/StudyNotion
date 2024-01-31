import React, { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import login from "../assets/login.png";
import frame from "../assets/frame.png";
import google from "../assets/google.svg";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  function showHandler(){
    setShowPassword(!showPassword)
  }
  return (
    <div className="flex justify-between w-[70%] m-auto mt-8">
      <div className="text-start">
        <p className="text-[30px] font-bold mb-3">Welcome Back</p>
        <p className="text-[#afb2bf] text-2xl">
          Build skills for today, tomorrow, and beyond.
        </p>
        <p className="text-[#47a5c5] text-xl mb-4">
          Education to future-proof your career.
        </p>
        <div>
          <div>
            <div className="">
              <label htmlFor="email" className="inline">
                Email Address
              </label>
              <FaStarOfLife className="text-[6px] inline text-[#B13952] mb-4 ml-1 " />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              required
              className="bg-[#161D29] w-full rounded-lg p-2"
            />
          </div>
          <div className="mt-4">
            <div>
              <label htmlFor="password">Password</label>
              <FaStarOfLife className="text-[6px] inline text-[#B13952] mb-4 ml-1 " />
            </div>
            {
              showPassword?(
                <div className="bg-[#161D29] relative rounded-lg flex justify-between items-center">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    className="bg-[#161D29] w-full rounded-lg p-2 "
                  />
                  <AiOutlineEye
                    className="inline text-2xl absolute right-2 hover:cursor-pointer"
                    onClick={showHandler}
                  />
                </div>
              ):(
                <div className="bg-[#161D29] relative rounded-lg flex justify-between items-center">
                  <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    className="bg-[#161D29] w-full rounded-lg p-2 "
                  />
                  <AiOutlineEyeInvisible
                    className="inline text-2xl absolute right-2 hover:cursor-pointer"
                    onClick={showHandler}
                  />
                </div>
              )
            }
            <div className="text-end text-[#47a5c5]">Forgot Password</div>
          </div>
        </div>
        <button className="w-[100%] bg-[#ffd60a] p-2 rounded-lg mt-4">
          Sign In
        </button>
        <div className="flex items-center justify-center mt-4 opacity-25">
          <div className="h-[1px] border-solid border-[1px] border-white w-[48%]"></div>
          <div>OR</div>
          <div className="h-[1px] border-solid border-[1px] border-white w-[48%]"></div>
        </div>
        <div>
          <button className="w-[100%] text-[#afb2bf] border-[1px] border-[#161D29] p-2 rounded-lg mt-4 flex justify-center">
            <img src={google} alt="" className="h-6 mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
      <div className="relative">
        <img src={login} alt="" className="w-[450px] " />
        <img src={frame} alt="" className="absolute top-3 z-[-10] left-3" />
      </div>
    </div>
  );
};

export default Login;
