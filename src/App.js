import React, { useState, useEffect } from "react";
import { Header, BodyBlock } from "./layout";
import {
  SelectDifficulty,
  GameResultText,
  Button,
  Indicators,
} from "./components";
import { receiveMazeId, loadMaze, setMove } from "./actions/api";
import { COLORS } from "./styles";
import DIFFICULTYLEVELS from "./constants/DifficultyLevels";

function App() {
  const [difficulty, setDifficulty] = useState(0);
  const [mazeId, setMazeId] = useState(null);
  const [maze, setMaze] = useState(null);
  const [result, setResult] = useState(null);

  const getMazeId = async () => {
    try {
      const result = await receiveMazeId(difficulty);
      setMazeId(result.maze_id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getMaze = async () => {
    try {
      const result = await loadMaze(mazeId);
      setMaze(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMazeId();
  }, []);

  useEffect(() => {
    if (mazeId) getMaze();
  }, [mazeId]);

  useEffect(() => {
    getMazeId();
  }, [difficulty]);

  const makeMove = async (val) => {
    try {
      const result = await setMove(val, mazeId);
      setResult({ result: result.state, message: result["state-result"] });
      getMaze();
    } catch (error) {
      setResult({ result: "error" });
      console.log(error.message);
    }
  };

  return (
    <div>
      <Header title="TRUSTPILOT PONY MAZE"></Header>
      <SelectDifficulty
        difficultyTitle="Difficulty level"
        value={difficulty}
        onChange={(event) => setDifficulty(Number(event.target.value))}
      >
        {DIFFICULTYLEVELS.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </SelectDifficulty>
      <BodyBlock maze={maze} />
      {result?.result === "won" ? (
        <GameResultText
          color={COLORS.GREEN}
          title={"Congratulations you SAVED the PONY!"}
        ></GameResultText>
      ) : null}
      {result?.result === "over" ? (
        <GameResultText
          color={COLORS.RED}
          title={"Sorry the PONNY is DEAD :("}
        ></GameResultText>
      ) : null}
      {result?.result === "won" || result?.result === "over" ? null : (
        <Indicators makeMove={makeMove} />
      )}
      {(result?.result === "won" || result?.result === "over") && (
        <Button
          onPress={() => getMazeId() && setResult(null)}
          title={"Play again"}
        ></Button>
      )}
    </div>
  );
}

export default App;
