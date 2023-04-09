import React, { useEffect } from "react";
const StateBar = ({ title, color, id, progress }) => {
  useEffect(() => {
    document.getElementById(id).style.width = `${progress}%`;
    console.log(progress);
  }, [progress]);
  return (
    <div className="stateBar">
      <div className="stateBar_title">{title}</div>
      <div className="stateBar_background">
        <div className={`stateBar_background_body ${color}`} id={id}></div>
      </div>
    </div>
  );
};

export default StateBar;
