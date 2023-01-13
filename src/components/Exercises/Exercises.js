import React, { useEffect, useState } from "react";
import Exercise from "./Exercise";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("exercise.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  console.log("exercises", exercises);

  return (
    <div className="my-3">
      <h3>🏅Talent Club</h3>
      <h2>Select Today's exercise</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {exercises?.map((exercise) => (
          <Exercise key={exercise._id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default Exercises;
