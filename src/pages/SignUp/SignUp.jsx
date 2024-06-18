// import React from 'react';
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro boss | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-full md:w-2/4">
            <h1 className="text-5xl font-bold">Sign Up Now</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Link to="/">
              <button className="btn btn-secondary">Go Home</button>
            </Link>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                <div>
                  {errors.name && (
                    <span className="text-red-500 text-[14px]">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                <div>
                  {errors.email && (
                    <span className="text-red-500 text-[14px]">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 14,
                    //   pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                  })}
                />
                <div>
                  {errors.password?.type === "required" && (
                    <span className="text-red-500 text-[14px]">
                      Password is Required
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-500 text-[14px]">
                      Password must be 6 Characters
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-500 text-[14px]">
                      Password must be less then 14 Characters
                    </span>
                  )}
                  {/* {errors.pattern?.type === "maxLength" && (
                  <span className="text-red-500 text-[14px]">
                    Password must one uppercase
                  </span>
                )} */}
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
              <p className="text-center font-medium">
                Already registered?
                <small className="ml-1.5">
                  <Link to="/login">Go to log in</Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
