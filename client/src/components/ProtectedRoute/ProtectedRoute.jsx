import React from 'react';
import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({
  user_name,
  AuthUserAction
}) => {

  useEffect(() => {
    AuthUserAction();
  }, [AuthUserAction]);

  return user_name ? <Outlet /> : <Navigate to='/' replace />;
};

export default ProtectedRoute;