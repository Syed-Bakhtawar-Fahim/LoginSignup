import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate  } from 'react-router-dom'
import { toast } from 'react-toastify'
import "./RegisterScreen.css"


const RegisterScreen = ({ history }) => {
  let navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  // const URL = "https://login-signup-bk.herokuapp.com"
  const URL = "http://localhost:8000"

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      // history.push("/");
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const registerHandler = async (e) => {
    e.preventDefault()

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("")
      setConfirmPassword("")
      setTimeout(() => {
        setError("")
      }, 5000);
      return setError("Password donot match")
    }

    try {
      const { data } = await axios.post(
        `${URL}/api/v1/register`,
        {
          name,
          email,
          password,
          confirmPassword
        },  config )

      localStorage.getItem("authToken", data.token)
      navigate("/login");
      // history.push("/")
      toast.success(`Welcome ${name}. Please login to continue`, {
        toastId: "success",
        autoClose: 4000,
      });

    }
    catch (error) {
      // setError(error.response.data.error)
      // setError("Please try again or password should atleast of 6 character")
      toast.error("Please try again or password should atleast of 6 character", {
        toastId: "error",
        autoClose: 4000,
      });
      // setTimeout(() => {
      //   setError("")
      // }, 5000);
    }
  }


  return (
    <>
      <div className="register-screen">
        <form onSubmit={registerHandler} className="register-screen__form">
          <h3 className="register-screen__title">Register</h3>
          {error && <span className="error-message">{error}</span>}
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              required
              id="name"
              placeholder="Enter username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              required
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <input
              type="password"
              required
              id="confirmpassword"
              autoComplete="true"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>

          <span className="register-screen__subtext">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </>
  )
}

export default RegisterScreen