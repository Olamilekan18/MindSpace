import React, { useState } from 'react';

const MoodSelector = ({ onMoodSelect }) => {
  const moods = ['Happy', 'Sad', 'Neutral', 'Anxious'];

  return (
    <div>
      <h2>Select Your Mood</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {moods.map((mood) => (
          <div
            key={mood}
            onClick={() => onMoodSelect(mood)}
            style={{
              padding: '20px',
              border: '1px solid black',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {mood}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
