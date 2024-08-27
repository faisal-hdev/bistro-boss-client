// import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "./useAxiosOpen";
// import { useEffect, useState } from "react";

const useMenu = () => {
  const AxiosOpen = useAxiosOpen();
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);

  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await AxiosOpen.get("/menu");
      return res.data;
    },
  });

  return [menu, loading, refetch];
};

export default useMenu;
