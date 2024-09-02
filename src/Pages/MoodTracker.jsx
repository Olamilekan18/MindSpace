import React, { useState, useEffect } from 'react';
import MoodSelector from './MoodSelection';
import MoodGraph from './MoodGraph';

const MoodTracker = () => {
  const [moodData, setMoodData] = useState([]);

  const handleMoodSelect = (mood) => {
    const newEntry = { mood, date: new Date().toLocaleDateString() };
    setMoodData((prevData) => [...prevData, newEntry]);
  };

  return (
    <div>
      <MoodSelector onMoodSelect={handleMoodSelect} />
      <MoodGraph moodData={moodData} />
    </div>
  );
};

export default MoodTracker;
