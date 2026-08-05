import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

     <Navbar />

      <div className="flex flex-col items-center justify-center mt-32">

        <h2 className="text-6xl font-bold">
          Improve Your Resume
        </h2>

        <p className="mt-6 text-gray-400 text-xl">
          Analyze your resume with AI and increase your ATS score.
        </p>

        <Link
  to="/register"
  className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-xl inline-block"
>
  Get Started
</Link>

      </div>

    </div>
  );
}

export default Home;