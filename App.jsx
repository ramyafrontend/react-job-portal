import { useState } from "react";
import jobs from "./data";
import JobCard from "./JobCard";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div>
      <nav className="navbar">
        <h1>Job Portal</h1>
      </nav>

      <section className="hero">
        <h2>Find Your Dream Job</h2>
        <p>Total Jobs Available:{filteredJobs.length}</p>

        <input
          type="text"
          placeholder="Search by Role"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="text"
          placeholder="Filter by Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </section>

      <div className="job-container">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <footer>
        <p>© 2026 Job Portal</p>
      </footer>
    </div>
  );
}

export default App;