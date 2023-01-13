import React, { useEffect, useState } from "react";
import Exercise from "./Exercise";

const Exercises = ({ handleExerciseTime }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("exercise.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  return (
    <div className="my-3">
      <h3 className="my-4">🏅Talent Club</h3>
      <h2 className="my-4">Select Today's exercise</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* all exercises  */}
        {exercises?.map((exercise) => (
          <Exercise
            key={exercise._id}
            exercise={exercise}
            handleExerciseTime={handleExerciseTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Exercises;
