import React from 'react'
import { useAuth } from '../CustemHook/Auth'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRouter() {
  const { contextData } = useAuth()

  // if token is present and login is success -> redirect all component to outlet
  // if login is false and token is not present-> redirect to login path
return (
  <React.Fragment>
    {
      contextData.token ? <Outlet/> : <Navigate to={`/login`}/>
    }
  </React.Fragment>
)
}

export default PrivateRouter