import { use, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import { AuthContext } from "../providers/Contexts";

const Login = () => {
  const { login, auth } = use(AuthContext);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const emailRef = useRef();

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email).then(() =>
      toast.success("A password reset email is sent.")
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("You have logged in successfully.");
      })
      .catch(() => {
        toast.error("Your credentials are incorrect.");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("You have logged in successfully.");
      })
      .catch(() => {
        toast.error("Your credentials are incorrect.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0">
        <form onSubmit={handleLogin} className="card-body px-7 py-6">
          <h2 className="text-primary font-semibold text-2xl text-center">
            Login To Your Account
          </h2>
          <hr className="text-base-200" />
          <fieldset className="fieldset">
            <label className="label text-primary font-semibold text-base">
              Email
            </label>
            <input
              ref={emailRef}
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
            <div>
              <a
                onClick={handleForgetPassword}
                className="link link-hover font-medium text-sm text-primary"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="btn btn-neutral mt-2 bg-primary text-white text-base"
            >
              Login
            </button>
            <h2 className="font-semibold text-lg text-primary text-center">
              or
            </h2>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn bg-white w-full text-primary border-[#e5e5e5] py-5"
            >
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login With Google
            </button>
            <div className="font-medium text-sm text-primary text-center">
              Don't have an account?&nbsp;
              <Link
                to="/auth/register"
                className="link link-hover text-secondary"
              >
                Register
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

export default Login;
