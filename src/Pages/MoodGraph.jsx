import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MoodGraph = ({ moodData }) => {
  // Convert mood data to numeric values for the graph
  const moodMapping = {
    'Happy😊': 4,
    'Neutral😐': 3,
    'Sad😢': 2,
    'Anxious😟': 1,
  };

  const data = moodData.map((entry) => ({
    date: entry.date,
    moodValue: moodMapping[entry.mood],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, 5]} ticks={[1, 2, 3, 4]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="moodValue" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MoodGraph;
