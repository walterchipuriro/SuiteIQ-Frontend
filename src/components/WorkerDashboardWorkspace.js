const workspaces = [
  { name: "Reception", icon: "💼" },
  { name: "Security", icon: "🛡️" },
  { name: "Housekeeping", icon: "🧹" },
  { name: "Administration", icon: "📋" },
];

const WorkerDashboardWorkspace = () => {
  return (
    <div className="flex-1 p-8 grid grid-cols-2 gap-6 bg-black bg-opacity-40 text-white">
      {workspaces.map((workspace) => (
        <div
          key={workspace.name}
          className="bg-black bg-opacity-60 p-6 rounded-2xl shadow-lg text-center hover:bg-opacity-80 cursor-pointer transition"
        >
          <div className="text-4xl mb-2">{workspace.icon}</div>
          <div className="text-xl font-semibold text-gold-300">{workspace.name}</div>
        </div>
      ))}
    </div>
  );
};

export default WorkerDashboardWorkspace;
