import React, { useEffect, useState } from "react";
import ActivityTrack from "../ActivityTrack/ActivityTrack";
import Exercises from "../Exercises/Exercises";

const Home = () => {
  const [exerciseTime, setExerciseTime] = useState(0);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-8">
          <Exercises />
        </div>
        <div className="col-4">
          <ActivityTrack />
        </div>
      </div>
    </div>
  );
};

export default Home;
