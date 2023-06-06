import React, { useState } from 'react';
import './App.css';

const FitnessTracker = () => {
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [distance, setDistance] = useState(0);

  const handleIncrementSteps = () => {
    const newSteps = steps + 1;
    const newCalories = calculateCalories(newSteps);
    const newDistance = calculateDistance(newSteps);
    setSteps(newSteps);
    setCalories(newCalories);
    setDistance(newDistance);
  };

  const calculateCalories = (steps) => {
    // Assuming 1 step burns 0.05 calories
    return Math.fround(steps * 0.05);
  };

  const calculateDistance = (steps) => {
    // Assuming 1 step covers 0.5 meters
    return Math.round(steps * 0.5);
  };

  return (
    <>
    <h1 style={{display:"flex",justifyContent:"center"}}>FITNESS TRACKER</h1>
    <div className="fitness-tracker" style={{backgroundColor:"yellowgreen",display:"flex",justifyContent:"center",flexDirection:"column",margin:"auto",width:"30vw",height:"30vh",border:"1px solid black",marginTop:"10rem"}}>
      
      <div className="stats">
        <div className="stat" >
          <span className="stat-value">{steps}</span>
          <span className="stat-label" >Steps</span>
          <button className="increment-button" onClick={handleIncrementSteps} >
            +
          </button>
        </div>
        <div className="stat">
          <span className="stat-value">{calories}</span>
          <span className="stat-label">Calories</span>
        </div>
        <div className="stat">
          <span className="stat-value">{distance}</span>
          <span className="stat-label">Distance (m)</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default FitnessTracker;
