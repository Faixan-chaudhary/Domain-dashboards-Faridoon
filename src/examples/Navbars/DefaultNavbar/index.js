

import { useState, useEffect } from "react";


import { Link } from "react-router-dom";


import PropTypes from "prop-types";


import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";


import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";


import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";


import breakpoints from "assets/theme/base/breakpoints";


import { useMaterialUIController } from "context";

function DefaultNavbar({ transparent, light, action }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    
    window.addEventListener("resize", displayMobileNavbar);

    
    displayMobileNavbar();

    
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <Container>
     
      {mobileView && <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} />}
    </Container>
  );
}


DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};


DefaultNavbar.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;
