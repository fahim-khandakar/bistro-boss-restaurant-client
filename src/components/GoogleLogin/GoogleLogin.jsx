import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import userAxiosPublic from "../../Hooks/userAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const axiosPublic = userAxiosPublic();
  const navigate = useNavigate();

  const handleLoginWithGoogle = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        name: result.user.displayName,
        email: result.user.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div className="mt-5">
      <div className="divider"></div>
      <button onClick={handleLoginWithGoogle} className="btn btn-warning">
        <FaGoogle></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default GoogleLogin;
