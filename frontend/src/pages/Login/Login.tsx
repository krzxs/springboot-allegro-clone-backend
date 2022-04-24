import React from "react";
import { useState } from "react";
import cn from "classnames";

function Login() {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <div>
      <div className="w-2/6 py-5 bg-gray-400 flex flex-col items-center ml-auto mr-auto mt-36 rounded-md min-w-fit px-5">
        <h1 className="text-4xl font-semibold font-Inter">
          {login ? "Login" : "Signup"} Form
        </h1>
        <div className="flex rounded-md border-2 mt-6">
          <button
            className={cn("px-14 rounded-md py-2", {
              "bg-red-400": login,
            })}
            onClick={() => setLogin(true)}
          >
            <span className="font-medium">Login</span>
          </button>
          <button
            className={cn("px-14 rounded-md py-2", {
              "bg-red-400": !login,
            })}
            onClick={() => setLogin(false)}
          >
            <span className="font-medium">Signup</span>
          </button>
        </div>
        {login ? (
          <form action="" className="mt-6 w-80 space-y-4">
            <input
              type="text"
              name="login"
              id=""
              placeholder="Username"
              className="w-full h-11 rounded-md border-2 focus:outline-none pl-3"
              required
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              className="w-full h-11 rounded-md shadow-dm border-2 focus:outline-none pl-3"
              required
            />
            <button className="h-11 w-full bg-red-400 rounded-md">
              <span className="font-medium text-lg">Login</span>
            </button>
            <p className="font-medium">
              Not a member?{" "}
              <a
                className="text-purple-900"
                href="#"
                onClick={() => setLogin((prev) => !prev)}
              >
                Signup now
              </a>
            </p>
          </form>
        ) : (
          <form action="" className="mt-6 w-80 space-y-4">
            <input
              type="text"
              name="Username"
              id=""
              placeholder="Username"
              className="w-full h-11 rounded-md border-2 focus:outline-none pl-3"
              required
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email Address"
              className="w-full h-11 rounded-md border-2 focus:outline-none pl-3"
              required
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              className="w-full h-11 rounded-md shadow-dm border-2 focus:outline-none pl-3"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              id=""
              placeholder="Confirm Password"
              className="w-full h-11 rounded-md shadow-dm border-2 focus:outline-none pl-3"
              required
            />
            <button className="h-11 w-full bg-red-400 rounded-md">
              <span className="font-medium text-lg">Signup</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
