import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {
  FaBook,
  FaBoxOpen,
  FaDollarSign,
  FaPeopleArrows,
  FaProductHunt,
  FaUser,
  FaUserCircle,
  FaUsers,
} from "react-icons/fa";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome {user.displayName ? user.displayName : "Back"}</span>
      </h2>
      <div className="stats shadow w-full">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-3xl"></FaDollarSign>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">
            ${parseFloat(stats.revenue.toFixed(2))}
          </div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className="text-3xl"></FaBook>
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.menuItems}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBoxOpen className="text-3xl"></FaBoxOpen>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
