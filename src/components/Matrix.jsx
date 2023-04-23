/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useLayoutEffect } from "react";
import { Button, SimpleGrid, Text, Table, Center } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import seedrandom from "seedrandom";

import axios from "axios";

import Letter from "./Letter";

function Matrix({ seed }) {
  const [isGuessing, setIsGuessing] = useState(false);
  const [guess, setGuess] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [matrix, setMatrix] = useState([[]]);
  const [selectedMatrix, setSelectedMatrix] = useState([[]]);
  const [score, setScore] = useState(0);
  const [prevRow, setPrevRow] = useState(null);
  const [prevCol, setPrevCol] = useState(null);

  const { width } = useViewportSize();
  const isMobile = width <= 800;

  // Generate the matrix on mount and whenever the seed changes
  useLayoutEffect(() => {
    generateMatrix(seed);
    generateFalseMatrix(false);
  }, [seed]);

  // Generate a 4x4 matrix of random letters using the given seed
  const generateMatrix = (seed) => {
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

  const startGuessing = (letter, i, j) => {
    console.log(isAdjacent(prevRow, prevCol, i, j));
    let isValid = false;
    if (prevRow === null || isAdjacent(prevRow, prevCol, i, j)) {
      // first letter selected
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

  const stopGuessing = () => {
    // setIsGuessing(false);
  };

  const removeRepeatingLetters = (word) => {
    return word
      .split("")
      .filter((letter, index, array) => array.indexOf(letter) === index)
      .join("");
  };

  const generatePoint = (word) => {
    if (word.length === 1) return 0;
    else if (word.length === 2) return 1;
    else if (word.length === 3 || word.length === 4) return 2;
    else if (word.length === 5) return 3;
    else if (word.length === 6) return 4;
    else if (word.length > 6) return 5;
  };

  const submitWord = () => {
    setIsGuessing(false);
    // const processedWord = removeRepeatingLetters(guess.join(""));
    const processedWord = guess.join("");
    let totalPoints = score;

    const isWordGuessed = !guesses.some((e) => e.word === processedWord);
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
              definition: result.data[0].meanings[0].definitions[0].definition,
              point: point,
            },
          ]);

          setScore(totalPoints + point);
        })
        .catch((error) => {
          console.log("walang ganon idol");
          setGuesses((current) => [
            ...current,
            {
              word: processedWord,
              definition: "not a word",
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

  const clickedButton = (i, j) => {
    const newGrid = [...selectedMatrix];
    newGrid[i][j] = true;
    setSelectedMatrix(newGrid);
  };

  const rows = guesses.map((word) => {
    return (
      <tr key={word.word}>
        <td>{word.word}</td>
        <td>{word.definition}</td>
        <td>{word.point}</td>
      </tr>
    );
  });

  const isAdjacent = (prevRow, prevCol, newRow, newCol) => {
    const rowDiff = Math.abs(prevRow - newRow);
    const colDiff = Math.abs(prevCol - newCol);
    return rowDiff <= 1 && colDiff <= 1 && !(rowDiff === 0 && colDiff === 0);
  };

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
                    stopGuessing={stopGuessing}
                    isClicked={selectedMatrix[i][j]}
                    letter={letter}
                  />
                );
              })}
            </SimpleGrid>
          ))}
          <Button color="pink" disabled={!isGuessing} onClick={submitWord}>
            Submit Word
          </Button>
        </SimpleGrid>
      </div>
      <SimpleGrid
        style={{
          marginLeft: "5rem",
          marginRight: "5rem",
          margin: "auto",
          marginTop: "-7rem",
        }}
      >
        <Center>
          <Table highlightOnHover>
            <thead>
              <tr>
                <th>Word</th>
                <th>Definition</th>
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
