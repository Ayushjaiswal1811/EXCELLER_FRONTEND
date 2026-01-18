import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function RequiredAuth() {
  const isAuth= ()=>{
    return !!localStorage.getItem('user');
  }
  return isAuth() ? <Outlet />:
    <Navigate to={'/Form'} /> 
  
}

export default RequiredAuth
