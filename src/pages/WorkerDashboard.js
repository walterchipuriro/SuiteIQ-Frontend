import WorkerDashboardSidebar from "../components/WorkerDashboardSideBar";
import WorkerDashboardTopbar from "../components/WorkerDashboardTopBar";
import WorkerDashboardWorkspace from "../components/WorkerDashboardWorkspace";

const WorkerDashboard = () => {
  return (
    <div
      className="flex flex-col h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('../assets/images/reg.jpeg')" }}
    >
      <WorkerDashboardTopbar />
      <div className="flex flex-1">
        <WorkerDashboardSidebar />
        <WorkerDashboardWorkspace />//
      </div>
    </div>
    
  );
};

export default WorkerDashboard;
