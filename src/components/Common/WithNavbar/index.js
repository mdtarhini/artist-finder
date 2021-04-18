import Navbar from "./Navbar";
const WithNavbar = ({ children }) => {
  return (
    <div className="max-w-screen min-h-screen overflow-y-auto overflow-x-hidden bg-gray-900 text-white">
      <header className="z-20 fixed top-0 left-0 w-full h-16 bg-gray-900 shadow-lg">
        <Navbar />
      </header>

      <main className=" mt-16 md:ml-60 lg:ml-80 bg-gray-900 flex justify-center p-4 md:p-10 2xl:px-40">
        {children}
      </main>
    </div>
  );
};
export default WithNavbar;
