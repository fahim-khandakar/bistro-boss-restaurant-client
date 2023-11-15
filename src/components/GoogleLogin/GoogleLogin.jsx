import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleLoginWithGoogle = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div className="mt-5">
      <div className="divider"></div>
      <button onClick={handleLoginWithGoogle} className="btn">
        <FaGoogle></FaGoogle>
        Button
      </button>
    </div>
  );
};

export default GoogleLogin;
