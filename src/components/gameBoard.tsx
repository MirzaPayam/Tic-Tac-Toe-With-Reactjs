import React from "react";
import "./gameboard.css";

interface PropsInterface {
  squares: string[];
  clickHandle(i: number): void;
  n: number;
}

const GameBoard: React.FC<PropsInterface> = ({ squares, clickHandle, n }) => {
  const element = (
    <div className="board">
      {squares.map((e, index) => (
        <button
          className={"btn"}
          key={index}
          onClick={() => clickHandle(index)}
        >
          {e}
        </button>
      ))}
    </div>
  );

  return element;
};

export default GameBoard;
