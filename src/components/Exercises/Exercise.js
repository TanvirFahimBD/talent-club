import React from "react";

const Exercise = (props) => {
  // single exercise
  const { picture, name, time } = props.exercise;
  return (
    <div className="col">
      <div className="card">
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Time required: {time} minutes</p>
          <button
            className="btn btn-primary"
            onClick={() => props.handleExerciseTime(time)}
          >
            Add to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
