"use client";

import { useState } from "react";

export default function DemoPage() {
  const [alias, setAlias] = useState("");
  const [field, setField] = useState("Astrophysics");
  const [prestige, setPrestige] = useState("Top 100");
  const [department, setDepartment] = useState("Physics");
  const [subtopic, setSubtopic] = useState("Stellar Astrophysics");
  const [workType, setWorkType] = useState("Observational");

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          alias,
          field,
          prestige,
          department,
          subtopic,
          workType,
        }),
      });

      const data = await res.json();
      setResponse(data.recommendation || "No response received.");
    } catch (err) {
      console.error(err);
      setResponse("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 bg-white text-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Demo: Grad School Fit Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <input
          type="text"
          placeholder="Alias (e.g., Batman)"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          className="border p-2 w-full"
        />

        <select
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="border p-2 w-full"
        >
          <option>Astrophysics</option>
          <option>AI/ML</option>
          <option>Biophysics</option>
        </select>

        <select
          value={prestige}
          onChange={(e) => setPrestige(e.target.value)}
          className="border p-2 w-full"
        >
          <option>Top 100</option>
          <option>100-250</option>
          <option>250-500</option>
          <option>500-1000</option>
          <option>Rest</option>
        </select>

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border p-2 w-full"
        >
          <option>Physics</option>
          <option>Astronomy</option>
          <option>Engineering</option>
        </select>

        <input
          type="text"
          placeholder="Subtopic (e.g., Exoplanets)"
          value={subtopic}
          onChange={(e) => setSubtopic(e.target.value)}
          className="border p-2 w-full"
        />

        <select
          value={workType}
          onChange={(e) => setWorkType(e.target.value)}
          className="border p-2 w-full"
        >
          <option>Theoretical</option>
          <option>Experimental</option>
          <option>Computational</option>
          <option>Observational</option>
        </select>

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      {/* Show loading or result */}
      {loading && (
        <p className="mt-4 text-blue-600">Generating recommendation...</p>
      )}
      {response && (
        <div className="mt-4 p-4 border rounded bg-gray-100 text-gray-800">
          <h3 className="font-semibold mb-2">Recommendation:</h3>
          <p>{response}</p>
        </div>
      )}
    </main>
  );
}

