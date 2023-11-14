import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const { name, image, price, recipe, _id } = item;

  const handleAddToCart = () => {
    if (user && user?.email) {
      // send cart item to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((result) => {
        if (result.data.insertedId) {
          console.log(result.data);
          Swal.fire({
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 3000,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In!",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl  h-96">
        <figure>
          <img src={image} alt="Shoes" className="w-full h-48 object-cover" />
        </figure>
        <p className="absolute right-0 bg-slate-900 px-4 mr-4 mt-4 text-white rounded-md">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center p-4">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline bg-slate-100 border-orange-500 border-0 border-b-4 my-3"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
