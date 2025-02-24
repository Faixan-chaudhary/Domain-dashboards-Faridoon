

import { useState } from "react";


import { Link } from "react-router-dom";


import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";


import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { ToastContainer } from "react-toastify";


import BasicLayout from "layouts/authentication/components/BasicLayout";


import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { Typography } from "@mui/material";
import { toast } from "react-toastify";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const loginUser = () =>{
    toast.success("Login Successfully!", {
      style: { fontSize: "16px" } 
    });
  }
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "3px" }}>
            <MDTypography display="block" variant="button" color="white" my={1}>
              Welcome Back
            </MDTypography>
            <MDTypography
              sx={{ ml: "2px" }}
              display="block"
              variant="button"
              color="white"
              my={1}
            >
              !
            </MDTypography>
          </Box>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton onClick={()=>{loginUser()}} variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      <ToastContainer />
    </BasicLayout>
  );
}

export default Basic;
