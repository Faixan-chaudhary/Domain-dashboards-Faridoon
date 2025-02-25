import { MarginTwoTone } from "@mui/icons-material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Table";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <DataTable />
    </DashboardLayout>
  );
}

export default Dashboard;
