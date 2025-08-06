import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Use this if you're using React Router

const WorkerDashboardSidebar = () => {
  return (
    <div className="w-64 bg-black bg-opacity-70 text-white p-5 space-y-6 h-full">
      <h2 className="text-2xl font-bold text-gold-400">Hotel Worker</h2>
      <nav className="flex flex-col gap-4 text-lg">
        <Link to="/dashboard" className="hover:text-gold-300">Dashboard</Link>
        <Link to="/workspace" className="hover:text-gold-300">Workspace</Link>
        <Link to="/reports" className="hover:text-gold-300">Reports</Link>
        <Link to="/account" className="hover:text-gold-300">Account</Link>
        <button className="mt-auto text-red-400 hover:text-red-200 flex items-center gap-2">
          <FaSignOutAlt /> Logout
        </button>
      </nav>
    </div>
  );
};

export default WorkerDashboardSidebar;