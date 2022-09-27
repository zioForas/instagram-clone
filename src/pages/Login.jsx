import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import LOGIN from "../graphql/LOGIN";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [login] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {data} = await login();
      localStorage.setItem("token", data.login);
      navigate("/");
    } catch (error) {
      setError('it seems that your email/password is incorrect, please double check and try again');
    }
  };

  return (
    <div
      className="h-screen bg-gray-50 flex flex-col justify-center items-center" /*wrapper */
    >
      <div className="flex">
        <div className="pr-10 hidden md:block">
          <img src="/images/iphone-instagram.png" alt="iphone" width="300" />
        </div>
        <div>
          <div className="bg-white border border-gray-300 w-80 pt-10 pb-60 flex items-center flex-col mb-3 relative">
            <img
              src="/images/pistachogram.PNG"
              alt="logo instagram"
              width="200"
            />
            <form
              onSubmit={handleSubmit}
              className="mt-8 w-64 flex flex-col"
            >
              <input
                className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 p-2 focus:outline-none focus:border-gray-400 active:outline-none"
                type="text"
                value={email}
                placeholder="Phone number, username or email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="text-xs w-full mb-2 rounded border bg-gray-100
                       border-gray-300 p-2 focus:outline-none focus:border-gray-400
                        active:outline-none"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">
                Log In
              </button>
            </form>

      {/* mensaje de error si esta mal el usuario o la contra */}
           {error && (
           <div className="text-sm text-center text-red-500 absolute bottom-20 px-8">
                {error}
            </div>
            )}


          </div>
          <div className="bg-white border border-gray-300 text-center w-80 py-4">
            <span className="text-sm">Don't Have an account?</span>
            <a
              href=""
              className="text-blue-500 text-sm font-semibold ml-1 cursor pointer"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
