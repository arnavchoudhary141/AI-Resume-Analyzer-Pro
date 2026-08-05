import { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [resume, setResume] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadResume = async () => {
    if (!resume) {
      alert("Select a resume first");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8000/api/resume/upload",
        formData
      );

      const result = JSON.parse(response.data.analysis);

      setAnalysis(result);

    } catch (err) {
      console.log(err);

      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-12">

      <h1 className="text-6xl font-bold mb-12">
        AI Resume Analyzer
      </h1>

      <div className="bg-slate-900 rounded-2xl p-8 max-w-xl">

        <h2 className="text-3xl font-bold mb-6">
          Upload Resume
        </h2>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setResume(e.target.files[0])}
        />

        {resume && (
          <p className="mt-4 text-green-400">
            {resume.name}
          </p>
        )}

        <button
          onClick={uploadResume}
          disabled={loading}
          className="mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

      </div>

      {analysis && (
        <div className="mt-12">

          <div className="bg-slate-900 p-8 rounded-2xl mb-8">

            <h2 className="text-3xl font-bold">
              ATS Score
            </h2>

            <p className="text-6xl text-green-400 mt-4">
              {analysis.atsScore}/100
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-900 p-6 rounded-xl">

              <h2 className="text-2xl font-bold text-green-400 mb-4">
                Strengths
              </h2>

              <ul>
                {analysis.strengths.map((item, index) => (
                  <li key={index}>✅ {item}</li>
                ))}
              </ul>

            </div>

            <div className="bg-slate-900 p-6 rounded-xl">

              <h2 className="text-2xl font-bold text-red-400 mb-4">
                Weaknesses
              </h2>

              <ul>
                {analysis.weaknesses.map((item, index) => (
                  <li key={index}>❌ {item}</li>
                ))}
              </ul>

            </div>

            <div className="bg-slate-900 p-6 rounded-xl">

              <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                Suggestions
              </h2>

              <ul>
                {analysis.suggestions.map((item, index) => (
                  <li key={index}>💡 {item}</li>
                ))}
              </ul>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Dashboard;