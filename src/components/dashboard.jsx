import { useState } from "react";
import edituser from "./edituser";
import { Link } from "react-router-dom";

function Dashboard() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="flex flex-col bg-[#0f0c29] w-64 h-screen">
      <div className="p-4 text-white hover:bg-[#252849]">Usuarios</div>

      <div className="p-4 text-white hover:bg-[#252849] cursor-pointer">
        <a href="/users">Modificar usuarios</a>
      </div>
    </div>
  );
}

export default Dashboard;
