import Dashboard from "layouts/dashboard";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";

import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "SSL Certificate",
    key: "SSL certificate",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/ssl-certificate",
    component: <Dashboard />,
  },

  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Domains",
    key: "domains",
    icon: <Icon fontSize="small">domains</Icon>,
    route: "/domains",
    component: <Dashboard />,
  },

  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  }

];

export default routes;
