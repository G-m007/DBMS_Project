import React from 'react';
import './Home.css'; // Add necessary CSS for styling

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Welcome to the Job Portal</h1>
      <div className="boxes-container">
        <div className="box candidate-box">
          <h2>Apply for Jobs</h2>
          <p>Find the best jobs and apply as a candidate</p>
          <a href="/candidate-login" className="box-button">Candidate Login</a>
        </div>
        <div className="box recruiter-box">
          <h2>Post a Job</h2>
          <p>Are you a recruiter? Post job listings now</p>
          <a href="/recruiter-login" className="box-button">Recruiter Login</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
