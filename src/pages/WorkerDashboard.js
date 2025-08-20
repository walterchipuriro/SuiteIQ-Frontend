// import WorkerSidebar from "../components/WorkerSidebar";
// import WorkerTopbar from "../components/WorkerTopbar";
// import WorkerWelcome from "../components/WorkerWelcome";
// import "./WorkerDashboard.css";

// export default function WorkerDashboard() {
//   return (
//     <div className="workerDashboard-container text-white h-screen flex flex-col">
//       {/* Topbar at the top */}
//       <WorkerTopbar />

//       {/* Below the topbar: sidebar + main content */}
//       <div className="flex flex-1">
//         <WorkerSidebar />

//         <main className="flex-1 overflow-auto p-4">
//           <WorkerWelcome />
//         </main>
//       </div>
//     </div>
//   );
// }







import bgImage from "../assets/images/reg.jpeg";
import "./WorkerDashboard.css";

export default function WorkerDashboard() {
  return (
    <div
      className="workerDashboard-container text-white h-screen flex flex-col"
      style={{ "--bg-image": `url(${bgImage})` }}
    >
      {/* background only */}
    </div>
  );
}

