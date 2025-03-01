import React from "react";
import { Link } from "react-router";

interface SidebarProps {
  isSidebarOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isSidebarOpen, onClose }: SidebarProps) {
  return (
    <aside className={`
      fixed lg:static w-52 bg-gray-800 text-white min-h-screen top-0 left-0
      transition-transform duration-300 ease-in-out
      ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      z-10 overflow-hidden
    `}>
      <nav className="p-4 h-full overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Test PNO</h2>
        <ul>
          <li className="py-2 px-4 hover:bg-gray-700 rounded-md">
            <Link to="/exercise1" className="block w-full text-white" onClick={onClose}>Bài 1</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 rounded-md">
            <Link to="/exercise2" className="block w-full text-white" onClick={onClose}>Bài 2</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
