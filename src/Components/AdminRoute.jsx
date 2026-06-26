import { auth } from "../auth";

function AdminRoute({ children }) {

  if (auth.role !== "Admin") {
    return <h1>Access Denied</h1>;
  }

  return children;
}

export default AdminRoute;