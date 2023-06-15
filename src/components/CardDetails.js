import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const [robot, setRobot] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(robotData => setRobot(robotData));
    }, [id]);

  if (!robot) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  );
}

export default CardDetails;