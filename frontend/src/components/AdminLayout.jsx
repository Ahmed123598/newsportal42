import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet /> {/* Renders nested routes like Dashboard, News, etc. */}
      </main>
    </div>
  );
};

export default AdminLayout;
