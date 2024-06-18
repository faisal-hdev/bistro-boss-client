// import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-full md:w-2/4">
          <h1 className="text-5xl font-bold">Sign Up Now</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                {...register("password", { required: true })}
              />
              <div>
                {errors.password && (
                  <span className="text-red-500 text-[14px]">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
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
  );
};

export default SignUp;
