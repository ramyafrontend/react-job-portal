import { useState } from "react";

function JobCard({ job }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="card">
      <h2>{job.title}</h2>
      <h3>{job.company}</h3>
      <p>📍 {job.location}</p>
      <p>{job.description}</p>

      <button
        className="save-btn"
        onClick={() => setSaved(!saved)}
      >
        {saved ? "Saved ❤️" : "Save Job"}
      </button>
    </div>
  );
}

export default JobCard;