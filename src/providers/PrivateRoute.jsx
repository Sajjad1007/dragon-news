import { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./Contexts";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const { pathname } = useLocation();

  if (loading) {
    return (
      <div className="grid place-content-center w-full min-h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  } else if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={pathname} to="/auth/login" />;
  }
};

export default PrivateRoute;
