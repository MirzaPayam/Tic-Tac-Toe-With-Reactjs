import React from "react";
import "./playerpanel.css";
//TODO: This Player Panel Should save some info about players

const PlayerPanel: React.FC = () => {
  const element = (
    <div className="panelmain">
      <div className="playerpic">player pic</div>
      <div className="playername">player name</div>
      <div className="playermark">player mark</div>
    </div>
  );
  return element;
};

export default PlayerPanel;
