import React, { useState, useEffect } from 'react';
import MoodSelector from './MoodSelection';
import MoodGraph from './MoodGraph';

const MoodTracker = () => {
  const [moodData, setMoodData] = useState([]);

  const handleMoodSelect = (mood) => {
    const date = new Date().toLocaleDateString();
    
    setMoodData((prevData) => {
      // Check if there's already an entry for today's date
      const existingEntryIndex = prevData.findIndex(entry => entry.date === date);
      
      if (existingEntryIndex !== -1) {
        // Update the existing entry with the new mood
        const updatedData = [...prevData];
        updatedData[existingEntryIndex].mood = mood;
        return updatedData;
      } else {
        // Add a new entry for today
        return [...prevData, { mood, date }];
      }
    });
  };
  

  return (
    <div>
      <MoodSelector onMoodSelect={handleMoodSelect} />
      <MoodGraph moodData={moodData} />
    </div>
  );
};

export default MoodTracker;
