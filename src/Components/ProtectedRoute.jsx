import { Navigate } from "react-router-dom";
import { auth } from "../auth";

function ProtectedRoute({ children }) {

  if (!auth.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;