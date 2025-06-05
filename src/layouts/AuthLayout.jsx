import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
