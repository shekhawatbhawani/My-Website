import React, { useState , useEffect } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { useFirebase } from "../Context/Firebase";
import { useNavigate } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const Sign = () => {
  const [email, SetEmail] = useState();
  const [password, setPassword] = useState();
  const firebase = useFirebase();
  const navigate = useNavigate();

  console.log(firebase);


let handelGoogleSignIn = async () =>{
  try {
    await firebase.signInWithGoogle();
    console.log("Google Sign-In Successful");
    navigate("/welcome");
  } catch (error) {
    console.error("Error during Google Sign-In:", error);
  }


}

  let handelSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign up the user using Firebase Authentication
      const userCredential = await firebase.signupUserWithEmailAndPassword(
        email,
        password
      );
      const userId = userCredential.user.uid; // Get the unique user ID


      // Store additional user data in the database
      await firebase.putData("Users/" + userId, { email, password });

      console.log("User signed up and data stored successfully");

      navigate("/welcome");
    } catch (error) {
      console.error("Error during signup or data storage: ", error);
    }
  };


  // age user already log in hai to without singIn 

  let [user , setUser] = useState(null)

  useEffect(()=>{
    const auth = getAuth()
    const stateChange = onAuthStateChanged(auth,(currentUser)=>{
      if (currentUser) {
        setUser(currentUser)
        console.log("User is logged in:", currentUser);
        navigate("/welcome")
      }else {
        setUser(null); // Clear user if not logged in
        console.log("No user is logged in");
        navigate("/")
      }
    })

    return () => stateChange()
  },[navigate])






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
            <form onSubmit={handelSubmit}>
              <div className="relative mb-6">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="block text-sm font-medium text-white my-2"
                >
                  Email address
                </label>
                <input
                  type="text"
                  className="w-full text-white px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="exampleFormControlInput3"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => {
                    SetEmail(e.target.value);
                  }}
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
                  className="w-full text-white px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="exampleFormControlInput33"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
                Sign up
              </button>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold text-white">
                  OR
                </p>
              </div>

              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-blue-600 px-7 py-2 text-center text-sm font-medium uppercase text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
                onClick={handelGoogleSignIn}
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
