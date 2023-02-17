import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./ResetPasswordScreen.css";

const ResetPasswordScreen = ({ history }) => {
  const params = useParams()
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState("");
  // const URL = "http://localhost:4000"
  const URL = "http://localhost:8000"


  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      toast.error("Password does not match", {
        toastId: "error",
        autoClose: 4000,
      });
    }

    try {
      const { data } = await axios
        .put(
          `${URL}/api/v1/resetpassword/${params.resetToken}`,
          {
            password,
            confirmPassword
          },
          config
        );

      console.log(data);
      // setSuccess(data.data);
      setSuccess(data.data);
      toast.success("Password reset successfully", {
        toastId: "success",
        autoClose: 4000,
      });
      setPassword("")
      setConfirmPassword("")
    }
    catch (error) {
      console.log(error)
      setPassword("")
      setConfirmPassword("")
      toast.error("Something went wrong. Please try again", {
        toastId: "error",
        autoClose: 4000,
      });
    }
  };

  return (
    <div className="resetpassword-screen">
      <form
        onSubmit={resetPasswordHandler}
        className="resetpassword-screen__form"
      >
        <h3 className="resetpassword-screen__title">Forgot Password</h3>
        {/* {error && <span className="error-message">{error} </span>} */}
        {success && (
          <span className="success-message">
            {success} <Link to="/login" className="login_btn">Login</Link>
          </span>
        )}
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter new password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm New Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm new password"
            autoComplete="true"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordScreen;