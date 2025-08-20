import { FaTachometerAlt, FaDoorOpen, FaUser } from "react-icons/fa";

export default function WorkerSidebar() {
  return (
    <div className="h-screen w-64 bg-black/60 backdrop-blur-md text-gold-100 flex flex-col p-6 font-serif shadow-lg">
      <h1 className="text-xl font-bold mb-10 tracking-widest text-[#d4af37]">
        DASHBOARD
      </h1>

      <nav className="flex flex-col gap-6">
        <a
          href="#"
          className="flex items-center gap-3 text-[#f5f5dc] hover:text-[#d4af37] transition-colors duration-300"
        >
          <FaTachometerAlt size={20} />
          <span className="text-lg">Dashboard</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 text-[#f5f5dc] hover:text-[#d4af37] transition-colors duration-300"
        >
          <FaDoorOpen size={20} />
          <span className="text-lg">Workspace</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 text-[#f5f5dc] hover:text-[#d4af37] transition-colors duration-300"
        >
          <FaUser size={20} />
          <span className="text-lg">Account</span>
        </a>
      </nav>
    </div>
  );
}