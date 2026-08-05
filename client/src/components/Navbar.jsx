import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">

      <Link
        to="/"
        className="text-3xl font-bold text-blue-500"
      >
        AI Resume Analyzer
      </Link>

      <div className="flex gap-4">

        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg"
        >
          Register
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
