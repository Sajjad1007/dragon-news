import { use } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/Contexts";
import userIcon from "../assets/user.png";

const Navbar = () => {
  const { user, logout } = use(AuthContext);

  const handleLogout = () => {
    logout().then(() => toast.success("You have logged out successfully."));
  };

  return (
    <div className="py-4 flex flex-col gap-4 sm:flex-row justify-between items-center">
      <div className="text-accent text-center">{user && user.email}</div>
      <div className="flex gap-2 items-center">
        <img src={userIcon} alt="User" />
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-primary px-10 text-base-100 rounded-none text-base"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-primary px-11 text-base-100 rounded-none text-base"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
