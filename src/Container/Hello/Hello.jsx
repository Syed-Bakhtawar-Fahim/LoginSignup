import React from 'react'
import { useNavigate } from "react-router-dom";

const Hello = () => {
    let navigate = useNavigate();
    const logoutHandler = () => {
    localStorage.removeItem("authToken")
    navigate("/login", { replace: true });
  }
  return (
    <>
      <div style={{ background: "green", color: "white" }}>Hello World</div>
      <button onClick={logoutHandler}>Logout</button>
    </>
  )
}

export default Hello