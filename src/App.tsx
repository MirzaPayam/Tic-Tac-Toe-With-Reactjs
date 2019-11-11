import React, { useState } from "react";
import "./app.css";
import PlayerPanel from "./components/playerpanel";
import GameBoard from "./components/gameBoard";

const n: number = 3;

const initialState = {
  squares: Array<string>(n * n).fill(""),
  xIsNext: true
};

const App: React.FC = () => {
  const [state, setState] = useState(initialState);

  const winner = calculateWinner(state.squares);

  console.log("state", state);
  console.log(winner);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (!winner) {
    status = "Current player: " + (state.xIsNext ? "O" : "X");
  }
  const element = (
    <div className="main">
      <div className="leftpanel">
        <PlayerPanel />
        {status}
      </div>
      <div className="mainpanel">
        <GameBoard
          squares={state.squares}
          clickHandle={(i: number) => {
            if (calculateWinner(state.squares) || state.squares[i]) {
              return;
            }

            const ustate = {
              squares: state.squares,
              xIsNext: !state.xIsNext
            };
            ustate.squares[i] = ustate.xIsNext ? "X" : "O";
            choose(state.squares);
            let c: number = isGood(ustate.squares);
            if (ustate.squares[c] !== "") c = isGood(ustate.squares);
            ustate.xIsNext = !ustate.xIsNext;
            ustate.squares[c] = "X";
            setState(ustate);
          }}
          n={n}
        />
      </div>
      <div className="rightpanel">
        <PlayerPanel />
        <button
          onClick={() => {
            setState(initialState);
            window.location.reload();
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
  return element;
};

export default App;

const calculateWinner = (squares: string[]): string | null => {
  // should change
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const choose = (squares: string[]): number => {
  let temp: string[] = squares.map(x => x);
  let indexs: number[];
  // temp
  return 0;
};

const isGood = (squares: string[]): number => {
  let vals = Array<number>(n * n).fill(0);

  let temp: string[] = squares.map(x => x);
  let next: number = -1;

  temp.map((e, i) => {
    if (e === "") {
      temp[i] = "X";

      console.log("temp : ", temp);

      // console.log("index : ", i, e);
      let winner = calculateWinner(temp);
      // console.log(winner);
      winner === "X" ? (vals[i] -= 3) : (vals[i] += 0);
      console.log("vals : ", vals);
      temp[i] = squares[i];
    }
  });
  temp.map((e, i) => {
    if (e === "") {
      temp[i] = "O";

      console.log("temp : ", temp);

      // console.log("index : ", i, e);
      let winner = calculateWinner(temp);
      // console.log(winner);
      winner === "O" ? (vals[i] += 2) : (vals[i] += 0);
      console.log("vals : ", vals);
      temp[i] = squares[i];
    }
  });

  temp = squares.map(x => x);

  vals.map((e, i) => {
    if (e !== 0) next = i;
  });

  let indexs: number[] = [];
  console.log("you should choose : ", next);

  // indexs.push(0, 2, 6, 8, 0, 2, 6, 8, 0, 2, 6, 8);

  console.log("normal indexes : ", indexs);

  if (indexs.includes(0)) indexs.push(0, 0, 0, 0);
  if (indexs.includes(2)) indexs.push(2, 2, 2, 2);
  if (indexs.includes(6)) indexs.push(6, 6, 6, 6);
  if (indexs.includes(8)) indexs.push(8, 8, 8, 8);
  if (next === -1) {
    squares.map((e, i) => {
      if (e === "") indexs.push(i);
    });
    return squares[4] === "" ? (next = 4) : (next = indexs[rand(indexs)]);
    // let n :number = ;
  } else return next;
};
const rand = (arr: number[]): number => {
  // let weight = arr.map(e => e === 1 || e === 3 || e === 5 || e === 7);
  // weight.map(e=>e===)
  let c = Math.floor(Math.random() * arr.length);
  // if (c === 1 || c === 3 || c === 5 || c === 7)
  //   c = Math.floor(Math.random() * arr.length);
  return c;
};
// [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z"
// ]
