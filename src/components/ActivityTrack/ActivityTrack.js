import React from "react";

const ActivityTrack = () => {
  return (
    <div className="my-5">
      {/* exercise track  */}
      {/* profile info */}
      <div className="d-flex">
        <div className="mx-4">
          <img
            style={{ borderRadius: "50%" }}
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            width={70}
            height={70}
          />
        </div>
        <div>
          <p>Tom Andrew</p>
          <p>🚩London, UK</p>
        </div>
      </div>
      {/* fitness info  */}
      <div className="d-flex  border rounded m-2 p-2">
        <div className="mx-3">
          <p>63Kg</p>
          <p>Weight</p>
        </div>
        <div className="mx-3">
          <p>5.3Kg</p>
          <p>Height</p>
        </div>
        <div className="mx-3">
          <p>32years</p>
          <p>Age</p>
        </div>
      </div>
      <h4>Add a break</h4>
      {/* break list  */}
      <div className="d-flex border rounded m-2 p-2">
        <p className="mx-2">10s</p>
        <p className="mx-2">20s</p>
        <p className="mx-2">30s</p>
        <p className="mx-2">40s</p>
        <p className="mx-2">50s</p>
      </div>
      <h4>Exercise details</h4>
      <div className="d-flex  border rounded m-2 p-2">
        <span className="me-5">Exercise time</span> <span>30 minutes</span>
      </div>
      <div className="d-flex  border rounded m-2 p-2">
        <span className="me-5">Break time</span> <span>30 seconds</span>
      </div>
      <div>
        <button className="btn btn-primary">Activity Completed</button>
      </div>
    </div>
  );
};

export default ActivityTrack;
