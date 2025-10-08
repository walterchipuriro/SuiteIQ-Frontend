import WorkerSidebar from "../components/WorkerSidebar";
import WorkerTopbar from "../components/WorkerTopbar";
import WorkerWelcome from "../components/WorkerWelcome";
import "./WorkerDashboard.css";

export default function WorkerDashboard() {
  return (
    <div className="workerDashboard-container text-white">
      <div className="flex h-screen">
        <WorkerSidebar />
        <WorkerTopbar />


        <div className="flex-1 flex items-center justify-center">
          {/* Main content here */}
          <div className="flex-1">
            <WorkerWelcome />
          </div>
        </div>
      </div>
    </div>
  );
}
