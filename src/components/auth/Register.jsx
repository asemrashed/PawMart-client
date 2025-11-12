import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import OutlineActionBtn from "../buttons/OutlineSubmitBtn";
import guest from "../../assets/user.png"
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
  const { setLoading, userSignUp, userSignInWithGoogle, updateUserInfo } =
    use(AuthContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [ registerInProgress, setRegisterInProgress] = useState(false)
  const [ gLoading, setGLoading] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();
  const secureAxios = useAxiosSecure();
  const axios = useAxios();

  const handleSignUp = e => {
    setRegisterInProgress(true)
    e.preventDefault();
    const name = e.target.name.value;
    const imgUrl = e.target.imgUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    const passValidation = /^(?=.*[a-z])(?=.*[A-Z])(?!.*(.)\1).{6,}$/;
    if (password && !passValidation.test(password)) {
      setError(
        "Password must be at least 6 characters long, contain at least one uppercase letter & one lowercase letter."
      );
      setSuccess(false);
      setRegisterInProgress(false)
      return;
    }

    userSignUp({ email, password })
      .then(result => {
        console.log(result.user);
        const newUser = result.user;
        newUser.displayName = name;
        newUser.photoURL = imgUrl || guest
        const userInfo ={
            photoURL : imgUrl || guest,
            displayName : name
        }
        updateUserInfo({userInfo})
        .then(res =>{
            console.log('profile info updated', res)
        })
        .catch(err =>{
            console.log(err)
            setError(err.message)
        })

        secureAxios.post('/users', newUser)
        .then(res =>{
            console.log(res.data)
            setSuccess(true);
            setError(null);
            navigate("/");
            setRegisterInProgress(false)
        })
      })
      .catch(err => {
        console.log(err);
        setError(err.message);
        setLoading(false);
        setRegisterInProgress(false)
      });
  };

  const handleGoogleSignIn = e => {
    setGLoading(true)
    e.preventDefault();
    userSignInWithGoogle()
      .then(result => {
        const newUser = result.user;
        axios.post(`/users`, newUser)
        .then(res => {
          console.log("after saving the user", res.data);
          setError(null);
          setSuccess(true);
          navigate(location?.state || "/");
          setGLoading(false)
        });
      })
      .catch(err => {
        console.log(err);
        setError(err.message);
        setLoading(false);
        setGLoading(false)
      });
  };

  const togglePassVisibility = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="min-h-screen flex items-center">
      <div className="card w-full bg-base-100 max-w-sm mx-auto shrink-0 shadow-md shadow-primary">
        {success && (
          <h5 className="text-green-700! bg-green-300 text-center py-2">
            Signup successfull
          </h5>
        )}
        {error && (
          <h5 className="text-red-800! bg-red-400 text-center py-2">{error}</h5>
        )}
        <h2 className="text-primary font-semibold text-xl md:text-2xl pt-5 text-center">
          Register your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleSignUp} className="fieldset">
            <label className="label font-semibold text-primary">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Salah Uddin"
              required
            />
            <label className="label font-semibold text-primary">
              Imgae Url
            </label>
            <input
              name="imgUrl"
              type="text"
              className="input"
              placeholder="Imgae Url"
            //   required
            />
            <label className="label font-semibold text-primary">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label font-semibold text-primary">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <div
                onClick={togglePassVisibility}
                className="absolute right-5 top-1 cursor-pointer p-2 z-1"
              >
                {showPass ? <RiEyeFill /> : <RiEyeCloseFill />}
              </div>
            </div>
            <div>
              <p className="link link- text-gray-400">Forgot password?</p>
            </div>
            <OutlineActionBtn 
                value={registerInProgress? <span className="loading loading-spinner loading-xl"></span>: 'Register'}
            />
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-primary/70 hover:bg-blue-500 hover:text-white hover:border-0"
          >
            {gLoading
                ? <span className="loading loading-spinner loading-xl"></span>
                : <><FaGoogle/> Sign in with Google</>
            }
          </button>
          <p className="text-center text-gray-500">
            Already have an account..!{" "}
            <Link to={"/login"} className="text-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
