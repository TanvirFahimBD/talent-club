import React, { useEffect, useState } from "react";
import ActivityTrack from "../ActivityTrack/ActivityTrack";
import Exercises from "../Exercises/Exercises";

const Home = () => {
  const [exerciseTime, setExerciseTime] = useState(0);
  return (
    <div className="container text-center">
      {/* exercises show  */}
      <div className="row">
        <div className="col-8">
          <Exercises />
        </div>
        {/* activity tracking  */}
        <div className="col-4">
          <ActivityTrack />
        </div>
      </div>
    </div>
  );
};

export default Home;
