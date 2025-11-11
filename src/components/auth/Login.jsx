import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import OutlineAuctionBtn from "../buttons/OutlineActionBtn";

const Login = () => {
  const { userSignInWithGoogle, setLoading, userSignIn} = use(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false)
  const [loginInProgress, setLoginInProgress] = useState(false)
  const [ gLoading, setGLoading] = useState(false)
  const secureAxios = useAxiosSecure()

  const handleSignIn=(e)=>{
    setLoginInProgress(true)
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    userSignIn({email, password})
    .then(result => {
        console.log(result.user)
        setSuccess(true)
        navigate( location?.state || '/')
        setLoginInProgress(false)
    })
    .catch(err =>{
        console.log(err)
        setError(err.message)
        setLoading(false)
        setLoginInProgress(false)
    })
  }

  const handleGoogleSignIn = (e)=>{
    setGLoading(true)
    e.preventDefault();
    userSignInWithGoogle()
    .then(result=>{
        // console.log(result.user)
        const newUser = result.user 
        const {displayName, email, photoURL} = newUser
        secureAxios.post('/users',{displayName, email, photoURL})
        .then(res => {
        //   console.log('after saving the user', res.data)
        })
        setError(false)
        setSuccess(true)
        navigate( location?.state || '/')
        setGLoading(false)
    })
    .catch(err => {
        console.log(err)
        setError(err.message)
        setLoading(false)
        setGLoading(false)
    })
  }

  const togglePassVisibility = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="min-h-screen flex items-center">
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-md shadow-primary">
      {success && (
        <h2 className="text-center py-2 font-semibold text-green-600 bg-green-300">
          SuccessFully Logged in
        </h2>
      )}
      {error && (
        <h2 className="text-center font-semibold py-2 text-red-600! bg-red-300">{error}</h2>
      )}
      <h2 className="text-xl md:text-2xl text-primary font-semibold pt-5 text-center">
        Login to your account
      </h2>
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
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
            <p className="link link-hover text-gray-400">Forgot password?</p>
          </div>
          <OutlineAuctionBtn value={loginInProgress? <span className="loading loading-spinner loading-xl"></span>: 'Login'}/>
        </form>
         <button 
            onClick={handleGoogleSignIn} 
            className="btn bg-primary/70 hover:bg-blue-500 hover:text-white hover:border-0"
        >
         {gLoading
              ? <span className="loading loading-spinner loading-xl"></span>
              : <><FaGoogle/> Sign in with Google</>}
         </button>        
        <p className="text-center text-gray-500">
          Not register yet..!{" "}
          <Link to={"/register"} className="text-primary">
            Register
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
