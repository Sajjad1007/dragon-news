import { use } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/Contexts";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, setUser, updateUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password).then((res) => {
      const user = res.user;
      updateUser({ displayName: name })
        .then(() => {
          setUser({ ...user, displayName: name });
          toast.success("You have registered successfully.");
        })
        .catch(() => {
          toast.error("Your credentials are incorrect.");
        });
      navigate(`${location.state ? location.state : "/"}`);
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0">
        <form onSubmit={handleRegister} className="card-body px-7 py-6">
          <h2 className="text-primary font-semibold text-2xl text-center">
            Register Your Account
          </h2>
          <hr className="text-base-200" />
          <fieldset className="fieldset">
            <label className="label text-primary font-semibold text-base">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
            />
            <label className="label text-primary font-semibold text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Your Email"
              required
            />
            <label className="label text-primary font-semibold text-base">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Your Password"
              required
            />
            <button
              type="submit"
              className="btn btn-neutral mt-2 bg-primary text-white text-base"
            >
              Register
            </button>
            <div className="font-medium text-sm text-primary text-center">
              Already have an account?&nbsp;
              <Link to="/auth/login" className="link link-hover text-secondary">
                Login
              </Link>
              <br />
              Go&nbsp;
              <Link to="/" className="link link-hover text-secondary">
                Home
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
