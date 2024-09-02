import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  //   const { user } = UseAuth();
  //   const axiosSecure = useAxiosSecure();

  //   const { data: payments = [] } = useQuery({
  //     queryKey: ["payments", user.email],
  //     queryFn: async () => {
  //       const res = await axiosSecure.get(`/payments/${user.email}`);
  //       return res.data;
  //     },
  //   });

  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl">Total Payments {payments.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>EMAIL</th>
              <th>PRICE</th>
              <th>TRANSACTION ID</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, idx) => (
              <tr key={payment._id}>
                <th>{idx + 1}</th>
                <td>{payment.email}</td>
                <td>$ {payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
