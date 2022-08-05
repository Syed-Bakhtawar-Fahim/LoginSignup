import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'

// Private Route
// import PrivateRoute from './Component/Routing/PrivateRoute';

// Screen
import PrivateScreen from './Component/Screens/PrivateScreen/PrivateScreen';
import LoginScreen from './Component/Screens/LoginScreen/LoginScreen';
import RegisterScreen from './Component/Screens/RegisterScreen/RegisterScreen';
import ResetPasswordScreen from './Component/Screens/ResetPasswordScreen/ResetPasswordScreen';
import ForgotPasswordScreen from './Component/Screens/ForgotPasswordScreen/ForgotPasswordScreen';

function App() {
  return (
    <>
        {/* <PrivateRoute exact path="/" element={<PrivateScreen />} /> */}
      <Routes>
        <Route exact path="/" element= {<PrivateScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/forgotpassword' element={<ForgotPasswordScreen />} />
        <Route path='/resetpassword/:resetToken' element={<ResetPasswordScreen />} />
      </Routes>
    </>
  );
}

export default App;
