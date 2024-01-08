import React from 'react'
import { Navigate, Route } from 'react-router-dom'

const ProtectRoute = ({isAuthenticated,redirectTo,element,...rest}) => {
  return isAuthenticated ? (
   <Route {...rest} element={element}/>
  ) : (
    <Navigate to={redirectTo} replace/>
  ) 
}

export default ProtectRoute