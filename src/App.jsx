import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import OrganizationSetup from "./pages/OrganizationSetup";
import Assets from "./pages/Assets";
import AllocationTransfer from "./pages/AllocationTransfer";
import ResourceBooking from "./pages/ResourceBooking";
import MaintenanceManagement from "./pages/MaintenanceManagement";
import AssetAudit from "./pages/AssetAudit";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/organization"
          element={<OrganizationSetup />}
        />

        <Route path="/assets" element={<Assets />} />

        <Route path="/allocation" element={<AllocationTransfer />} />
        <Route path="/resource" element={<ResourceBooking />} />
        <Route path="/maintenance" element={<MaintenanceManagement />} />
        <Route path="/audit" element={<AssetAudit />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;