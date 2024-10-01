// src/components/CandidateForm.js
import React, { useState } from 'react';

const CandidateForm = () => {
  const [candidateDetails, setCandidateDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
  });

  const handleChange = (e) => {
    setCandidateDetails({ ...candidateDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send candidate details to the backend (API call)
    console.log(candidateDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name</label>
      <input type="text" name="firstName" value={candidateDetails.firstName} onChange={handleChange} required />
      
      <label>Last Name</label>
      <input type="text" name="lastName" value={candidateDetails.lastName} onChange={handleChange} required />
      
      <label>Email</label>
      <input type="email" name="email" value={candidateDetails.email} onChange={handleChange} required />

      <label>Phone</label>
      <input type="text" name="phone" value={candidateDetails.phone} onChange={handleChange} required />
      
      <label>Experience (Years)</label>
      <input type="number" name="experience" value={candidateDetails.experience} onChange={handleChange} required />

      <label>Skills (Comma separated)</label>
      <input type="text" name="skills" value={candidateDetails.skills} onChange={handleChange} required />

      <button type="submit">Submit Candidate</button>
    </form>
  );
};

export default CandidateForm;
