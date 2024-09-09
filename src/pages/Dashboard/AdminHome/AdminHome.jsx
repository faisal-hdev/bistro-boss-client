import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = UseAuth;
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome Back!</span>
        {user?.displayName ? user?.displayName : "Back"}
      </h2>
      <div className="stats shadow my-5">
        <div className="stat place-items-center">
          <div className="stat-title">Revenue</div>
          <div className="stat-value">$ {stats.revenue}</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">{stats.users}</div>
          {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.menuItems}</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
        <div className="stat place-items-center">
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
