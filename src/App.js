import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import LoginScreen from './Component/Screens/LoginScreen/LoginScreen';
import RegisterScreen from './Component/Screens/RegisterScreen/RegisterScreen';
import ResetPasswordScreen from './Component/Screens/ResetPasswordScreen/ResetPasswordScreen';
import ForgotPasswordScreen from './Component/Screens/ForgotPasswordScreen/ForgotPasswordScreen';
import Hello from './Container/Hello/Hello';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './Component/Routing/protectedRoutes';


function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
      {/* Private Routes */}
      <Route path = "/" element = {<ProtectedRoutes Component = {Hello} />} /> 
        {/* Public Routes */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/forgotpassword' element={<ForgotPasswordScreen />} />
        <Route path='/resetpassword/:resetToken' element={<ResetPasswordScreen />} />
      </Routes>
    </>
  );
}

export default App;
