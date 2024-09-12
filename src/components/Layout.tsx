import { Outlet, useNavigate } from "react-router-dom";

import Topbar from "./Topbar";

// Check that we have an auth token and gotme.staff is true
const navigate = useNavigate();

function Layout() {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
}

export default Layout;
