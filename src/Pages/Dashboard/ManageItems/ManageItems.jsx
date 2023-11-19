import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const { menu, loading, refetch } = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
          });
        }
        // axiosSecure.delete(`/menu/${id}`).then((res) => {
        //   if (res.data.deletedCount > 0) {
        //     Swal.fire({
        //       title: "Deleted!",
        //       text: "Your item has been deleted.",
        //       icon: "success",
        //     });
        //   }
        // });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        subHeading="hurry up"
        heading="Manage All Items"
      ></SectionTitle>
      <div className="overflow-x-auto my-10">
        {loading ? (
          <div className="flex justify-center h-screen items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-ghost btn-lg text-orange-600">
                        <FaEdit></FaEdit>
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDeleteItem(item._id)}
                      className="btn btn-ghost btn-lg text-red-600"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageItems;
