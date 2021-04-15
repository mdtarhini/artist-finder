import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
const Layout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <div className="max-w-screen min-h-screen overflow-y-auto overflow-x-hidden bg-gray-900 text-white">
      <header className="z-10 fixed top-0 left-0 w-full h-16 bg-gray-700 shadow-md">
        <Navbar toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
      </header>

      <aside
        className={`z-10 fixed top-16 left-0 h-full pb-16 md:w-60 lg:w-80 bg-gray-900 md:border-r-2  border-gray-800 
        ${sidebarVisible ? "w-full" : "hidden md:block"}`}
      >
        <Sidebar />
      </aside>
      <main className=" mt-16 md:ml-60 lg:ml-80 bg-gray-900 flex justify-center p-4 md:p-10">
        {children}
      </main>
    </div>
  );
};
export default Layout;
