import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'

const CheckAuth = ({isAuthencated, user, children}) => {

    const location = useLocation()
  
    if (!isAuthencated && !(location.pathname.includes('/seller'))) {
        return <Navigate to='/'/>
    }
    if (isAuthencated && (location.pathname.includes('/'))) {
        return <Navigate to='/seller'/>
    }
    return <>{children}</>
}

export default CheckAuth