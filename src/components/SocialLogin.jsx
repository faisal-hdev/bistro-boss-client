// import React from "react";
import { FaGoogle } from "react-icons/fa";
import UseAuth from "../hooks/UseAuth";
import useAxiosOpen from "../hooks/useAxiosOpen";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = UseAuth();
  const axiosPublic = useAxiosOpen();
  const navigate = useNavigate();
  //   console.log(googleSignIn);

  const handleGoogleSignIn = () => {
    console.log("hello google");
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result?.user?.email,
          name: result?.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn">
        {/* Google */}
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
