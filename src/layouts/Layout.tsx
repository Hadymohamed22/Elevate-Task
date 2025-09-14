import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="layout flex flex-col gap-6 py-4 container mx-auto px-5 md:px-0 lg:px-5">
      <nav className="text-white py-4 px-6 bg-white/50 backdrop-blur-lg rounded-xl flex flex-col md:flex-row items-center">
        <Link to="/">
          <h2 className="h2-styles duration-300 hover:text-gray-100 hover:scale-105">
            Elevate
          </h2>
        </Link>
        <h1 className="flex-grow text-center h1-styles">
          Frontend Advanced Bootcamp Task
        </h1>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
