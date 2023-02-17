import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = (props) => {
    const { Component } = props
    const navigate = useNavigate()

    useEffect(() => {
        let login = localStorage.getItem("authToken")
        if(!login){
            navigate("/login")
        }
    }, [navigate])
  return (
    <>
        <Component />
    </>
  )
}

// import { Outlet, Navigate } from 'react-router-dom'

// const ProtectedRoutes = () => {

//     const isloggedIn = () => {
//       let authToken = localStorage.getItem("authToken")
//     }
//     let authToken = localStorage.getItem("authToken")
//     // let auth = {'token':false}
//     return(
//       authToken ? <Outlet/> : <Navigate to="/login"/>
//     )
// }

// export default PrivateRoutes

export default ProtectedRoutes