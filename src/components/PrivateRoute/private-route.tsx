import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode; 
}

function PrivateRoute({ children } : PrivateRouteProps) {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default PrivateRoute;
