import { format } from "date-fns";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col py-4">
      <a
        onClick={() => {
          window.location.href = "../";
        }}
        className="cursor-pointer"
      >
        <img src={logo} alt="The Dragon News" />
      </a>
      <p className="text-base text-accent mt-4">
        Journalism Without Fear or Favour
      </p>
      <p className="text-base font-semibold text-accent mt-1">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
