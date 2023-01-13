import React, { useState } from "react";
import ActivityTrack from "../ActivityTrack/ActivityTrack";
import Exercises from "../Exercises/Exercises";

const Home = () => {
  const [exerciseTime, setExerciseTime] = useState(0);
  const handleExerciseTime = (addedExerciseTime) => {
    const newExerciseTime = exerciseTime + addedExerciseTime;
    setExerciseTime(newExerciseTime);
  };
  return (
    <div className="d-flex flex-sm-column">
      <div className="container text-center">
        {/* exercises show  */}
        <div className="row d-flex flex-column flex-md-row ">
          <div className="col-8">
            <Exercises handleExerciseTime={handleExerciseTime} />
          </div>
          {/* activity tracking  */}
          <div className="col-4">
            <ActivityTrack exerciseTime={exerciseTime} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
