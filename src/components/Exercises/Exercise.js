import React from "react";

const Exercise = (props) => {
  const { _id, picture, name, time } = props.exercise;
  return (
    <div className="col">
      <div className="card">
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{time} minutes</p>
          <button className="btn btn-primary"></button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
