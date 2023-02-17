import { useState } from "react";
import axios from "axios";
import "./ForgotPasswordScreen.css";
import { toast } from "react-toastify";


const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  // const URL = "http://localhost:4000"
  const URL = "http://localhost:8000"
  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `${URL}/api/v1/forgotpassword`,
        { email },
        config
      );
        // console.log(data)
      // setSuccess(data.data);
      toast.success("Email sent", {
        toastId: "success1",
        autoClose: 4000,
      });
      setEmail("")
    } catch (error) {
      // setError(error.response.data.error);
      setEmail("");
      toast.error("Email not found in our records", {
        toastId: "error",
        autoClose: 4000,
      });
    }
  };

  return (
    <div className="forgotpassword-screen">
      <form
        onSubmit={forgotPasswordHandler}
        className="forgotpassword-screen__form"
      >
        <h3 className="forgotpassword-screen__title">Forgot Password</h3>
        {/* {error && <span className="error-message">{error}</span>} */}
        {/* {success && <span className="success-message">{success}</span>} */}
        <div className="form-group">
          <p className="forgotpassword-screen__subtext">
            Please enter the email address you register your account with. We
            will send you reset password confirmation to this email
          </p>
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
        <button type="submit" className="btn btn-primary" >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordScreen;