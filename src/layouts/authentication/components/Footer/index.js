


import PropTypes from "prop-types";


import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";


import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";


import typography from "assets/theme/base/typography";

function Footer({ light }) {
  const { size } = typography;

  return (
    <MDBox position="absolute" width="100%" bottom={0} py={4}>
      <Container>
        <MDBox
          width="100%"
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          px={1.5}
        >
       
          
        </MDBox>
      </Container>
    </MDBox>
  );
}


Footer.defaultProps = {
  light: false,
};


Footer.propTypes = {
  light: PropTypes.bool,
};

export default Footer;
