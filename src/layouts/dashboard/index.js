import { MarginTwoTone } from "@mui/icons-material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Table";
import StatusDashboard from "./components/cards";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
<StatusDashboard />
      <DataTable />
    </DashboardLayout>
  );
}

export default Dashboard;
