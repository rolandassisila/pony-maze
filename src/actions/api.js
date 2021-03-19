const URL = "https://ponychallenge.trustpilot.com/pony-challenge/maze";

export async function receiveMazeId(difficulty) {
  const requestParameters = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "maze-width": 15,
      "maze-height": 15,
      "maze-player-name": "Spike",
      difficulty,
    }),
  };

  const response = await fetch(URL, requestParameters);

  if (response.status === 200) {
    const result = await response.json();
    return result;
  } else {
    console.log(response.statusText);
  }
}

export const loadMaze = async (id) => {
  const requestParameters = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(`${URL}/${id}/print`, requestParameters);

  if (response.status === 200) {
    const result = await response.text();
    return result;
  } else {
    console.log(response.statusText);
  }
};

export const setMove = async (val, mazeId) => {
  const requestParameters = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      direction: val,
    }),
  };

  const response = await fetch(`${URL}/${mazeId}`, requestParameters);
  const result = await response.json();
  return result;
};
