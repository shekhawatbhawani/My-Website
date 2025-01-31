import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";

const Sign = () => {
  return (
    <section className="h-screen bg-gray-700">
      <div className="container my-10 px-6 py-1 mx-auto">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 bg-white rounded-3xl   md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
            <form>
              <div className="relative mb-6">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="block text-sm font-medium text-white my-2"
                >
                  Email address
                </label>
                <input
                  type="text"
                  className="w-full text-white px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  id="exampleFormControlInput3"
                  placeholder="Email address"
                />
              </div>

              <div className="relative mb-6">
                <label
                  htmlFor="exampleFormControlInput33"
                  className="block text-sm font-medium text-white my-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="w-full text-white px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  id="exampleFormControlInput33"
                  placeholder="Password"
                />
              </div>

              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="exampleCheck3"
                    defaultChecked
                    className="mr-2"
                  />
                  <label htmlFor="exampleCheck3" className="text-sm text-white">
                    Remember me
                  </label>
                </div>

                <a href="#!" className="text-blue-400 text-sm">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign in
              </button>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold text-white">OR</p>
              </div>

              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-blue-600 px-7 py-2 text-center text-sm font-medium uppercase text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <span className="me-2">
                  <AiOutlineGoogle />
                </span>
                Continue with Google
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sign;
