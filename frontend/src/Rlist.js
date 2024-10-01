// src/components/RecommendationList.js
import React, { useEffect, useState } from 'react';

const RecommendationList = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Fetch recommendations from the backend (API call)
    setRecommendations([
      { id: 1, name: 'John Doe', matchScore: 95 },
      { id: 2, name: 'Jane Smith', matchScore: 90 },
    ]);
  }, []);

  return (
    <div>
      <h2>Recommended Candidates</h2>
      <ul>
        {recommendations.map((rec) => (
          <li key={rec.id}>
            {rec.name} - Match Score: {rec.matchScore}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
