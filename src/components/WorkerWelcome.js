export default function WorkerWelcome() {
  return (
    <div className="p-6 space-y-6 max-w-6xl w-full mx-auto">
      <h1 className="text-3xl font-serif">Welcome</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-black bg-opacity-40 rounded-lg p-4 text-center">
          <p className="text-3xl font-bold">10</p>
          <p className="text-sm">Active Workers</p>
        </div>
        <div className="bg-black bg-opacity-40 rounded-lg p-4 text-center">
          <p className="text-3xl font-bold">5</p>
          <p className="text-sm">Reports Generated</p>
        </div>
        <div className="bg-black bg-opacity-40 rounded-lg p-4 text-center">
          <p className="text-3xl font-bold">2</p>
          <p className="text-sm">System Alerts</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-black bg-opacity-40 rounded-lg p-4">
          <h2 className="text-xl mb-4 font-serif">Workspace</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-black bg-opacity-60 rounded-lg p-4">Reception</button>
            <button className="bg-black bg-opacity-60 rounded-lg p-4">Security</button>
            <button className="bg-black bg-opacity-60 rounded-lg p-4">Housekeeping</button>
            <button className="bg-black bg-opacity-60 rounded-lg p-4">Administration</button>
          </div>
        </div>
        <div className="bg-black bg-opacity-40 rounded-lg p-4">
          <h2 className="text-xl mb-4 font-serif">Calendar</h2>
          <div className="h-40 bg-black bg-opacity-20 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
