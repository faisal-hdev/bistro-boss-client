// import React from "react";
import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-mu-three.vercel.app",
});

const useAxiosOpen = () => {
  return axiosPublic;
};

export default useAxiosOpen;
