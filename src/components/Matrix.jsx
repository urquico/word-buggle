import React, { useState, useLayoutEffect } from "react";
import { Button, SimpleGrid, Text, Table, Center } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import seedrandom from "seedrandom";

import axios from "axios";

import Letter from "./Letter";

function Matrix() {
  const initialTime = 180; // initial time
  const randomSeed = Math.floor(Math.random() * 1000000); // generation of RNG
  const [seed, setSeed] = useState(randomSeed); // state for generating a seed
  const [isGuessing, setIsGuessing] = useState(false); // checks if the user is currently guessing or not --> used in Submit Word Button
  const [guess, setGuess] = useState([]); // current guess from the player --> array of characters
  const [guesses, setGuesses] = useState([]); // list of guesses in JSON format
  const [matrix, setMatrix] = useState([[]]); // random letters array
  const [selectedMatrix, setSelectedMatrix] = useState([[]]); // array for button states
  const [score, setScore] = useState(0); // score board
  const [prevRow, setPrevRow] = useState(null); // set to null for first guess
  const [prevCol, setPrevCol] = useState(null); // set to null for first guess
  const [seconds, setSeconds] = useState(initialTime); // timer state
  const [isGameStarted, setIsGameStarted] = useState(false); // check if the player has started the game in order to start the timer
  const [isFirstGame, setIsFirstGame] = useState(true); // checks if the user plays the game for the first time to avoid reloading of seed

  const { width } = useViewportSize(); // for responsive UI
  const isMobile = width <= 800; // viewport

  useLayoutEffect(() => {
    // Generate the matrix on mount and whenever the seed changes
    generateMatrix(seed);
    generateFalseMatrix(false);
  }, [seed]);

  useLayoutEffect(() => {
    // timer
    let interval = null;
    if (isGameStarted && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      setIsGameStarted(false);
    }
    return () => clearInterval(interval);
  }, [isGameStarted, seconds]);

  const generateMatrix = (seed) => {
    //? This function initializes the game board with a 2D array of random letters.
    const rng = seedrandom(seed);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const newMatrix = [];
    for (let i = 0; i < 4; i++) {
      const row = [];
      for (let j = 0; j < 4; j++) {
        const letter = letters.charAt(Math.floor(rng() * letters.length));
        row.push(letter);
      }
      newMatrix.push(row);
    }

    setMatrix(newMatrix);
    generateFalseMatrix();
  };

  const generateFalseMatrix = (val) => {
    //? This function generates a 2D array of boolean values with all elements set to false.
    //? This will be used to keep track of which letters have been selected by the player.
    const selected = [];
    for (let i = 0; i < 4; i++) {
      const selectedRow = [];
      for (let j = 0; j < 4; j++) {
        selectedRow.push(val);
      }
      selected.push(selectedRow);
    }

    setSelectedMatrix(selected);
  };

  const startTimer = () => {
    //? This function sets a timer for the game and initialize states into default values
    setIsGameStarted(true);
    setSeconds(initialTime);
    setGuesses([]);
    setPrevRow(null);
    setPrevCol(null);
    setScore(0);
    if (!isFirstGame) {
      setSeed(Math.floor(Math.random() * 1000000));
    }
    setIsFirstGame(false);
  };

  const startGuessing = (letter, i, j) => {
    //? This function is called when a letter is clicked. It updates the selectedMatrix
    //? array to reflect the selected letter.
    console.log(isAdjacent(prevRow, prevCol, i, j));
    let isValid = false;
    if (prevRow === null || isAdjacent(prevRow, prevCol, i, j)) {
      //* first selected letter or adjacent buttons

      isValid = true;
      setPrevRow(i);
      setPrevCol(j);
    }

    if (isValid) {
      setIsGuessing(true);
      clickedButton(i, j);
      setGuess((current) => [...current, letter]);
    }
  };

  const clickedButton = (i, j) => {
    //? This function is called when the player clicks a button. It checks which button was clicked
    const newGrid = [...selectedMatrix];
    newGrid[i][j] = true;
    setSelectedMatrix(newGrid);
  };

  const isAdjacent = (prevRow, prevCol, newRow, newCol) => {
    //? This function checks if a letter is adjacent to the previous selected letter.
    //? This is used to ensure that the player is selecting adjacent letters to form a word.
    const rowDiff = Math.abs(prevRow - newRow);
    const colDiff = Math.abs(prevCol - newCol);
    return rowDiff <= 1 && colDiff <= 1 && !(rowDiff === 0 && colDiff === 0);
  };

  const generatePoint = (word) => {
    //? This function calculates the point value of the selected word.
    if (word.length === 1) return 0;
    else if (word.length === 2) return 1;
    else if (word.length === 3 || word.length === 4) return 2;
    else if (word.length === 5) return 3;
    else if (word.length === 6) return 4;
    else if (word.length > 6) return 5;
  };

  const submitWord = () => {
    //?  This function is called when the player submits a word. It checks if the word is valid,
    //?  calculates the point value, and updates the score.
    setIsGuessing(false);
    const processedWord = guess.join("");
    let totalPoints = score;

    const isWordGuessed = !guesses?.some((e) => e.word === processedWord);
    if (isWordGuessed) {
      const point = generatePoint(processedWord);
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${processedWord}`)
        .then((result) => {
          console.log("galing idol");
          console.log(result);
          setGuesses((current) => [
            ...current,
            {
              word: processedWord,
              // definition: result.data[0].meanings[0].definitions[0].definition,
              remarks: "a word",
              point: point,
            },
          ]);

          setScore(totalPoints + point);
        })
        .catch(() => {
          console.log("walang ganon idol");
          setGuesses((current) => [
            ...current,
            {
              word: processedWord,
              remarks: "not a word",
              point: 0,
            },
          ]);
        });
    }
    setGuess([]);
    setPrevRow(null);
    setPrevCol(null);
    generateFalseMatrix(false);
  };

  const rows = guesses?.map((word, index) => {
    return (
      <tr key={word.word}>
        <td>{index}</td>
        <td>{word?.word}</td>
        <td>{word?.remarks}</td>
        <td>{word?.point}</td>
      </tr>
    );
  });

  return (
    <SimpleGrid
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
      cols={1}
    >
      <div style={{ width: isMobile ? "100vw" : "50vw", margin: "auto" }}>
        <SimpleGrid>
          <Text style={{ fontSize: "2rem" }} fw={"bolder"} ta="center">
            {seconds}
          </Text>
          <Text style={{ fontSize: "2rem" }} fw={"bolder"} ta="center">
            {score}
          </Text>
          {matrix.map((row, i) => (
            <SimpleGrid key={i} cols="4">
              {row.map((letter, j) => {
                const color = selectedMatrix[i][j] ? "green" : "blue";
                return (
                  <Letter
                    color={color}
                    i={i}
                    j={j}
                    startGuessing={startGuessing}
                    isClicked={selectedMatrix[i][j]}
                    letter={letter}
                    isGameStarted={isGameStarted}
                    key={`${i}-${j}`}
                  />
                );
              })}
            </SimpleGrid>
          ))}
          <Button color="pink" disabled={!isGuessing} onClick={submitWord}>
            Submit Word
          </Button>
          <Button color="green" disabled={isGameStarted} onClick={startTimer}>
            Start Game
          </Button>
        </SimpleGrid>
      </div>
      <SimpleGrid
        style={{
          marginLeft: "5rem",
          marginRight: "5rem",
          margin: "auto",
        }}
      >
        <Center>
          <Table highlightOnHover>
            <thead>
              <tr>
                <th>#</th>
                <th>Word</th>
                <th>Remarks</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Center>
      </SimpleGrid>
    </SimpleGrid>
  );
}

export default Matrix;
