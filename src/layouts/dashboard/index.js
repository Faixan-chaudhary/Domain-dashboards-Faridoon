import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Box } from "@mui/material";
function Dashboard() {
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
    <Box>Testing here</Box>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
