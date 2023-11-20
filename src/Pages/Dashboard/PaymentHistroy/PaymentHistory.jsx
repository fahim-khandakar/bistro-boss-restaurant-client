import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-2xl">Total Payments: {payments.length}</h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Price</th>
            <th>Transaction Id</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>{parseFloat(item.price.toFixed(2))}</td>
              <td>{item.transactionId}</td>
              <td>{item.status}</td>
              <th>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-ghost btn-lg text-red-600"
                >
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
