import { useEffect, useState } from "react";

import Matrix from "./components/Matrix";
import { Modal, Button, Group, Tooltip, ActionIcon, Text, Center, Select, NumberInput } from "@mantine/core";
import { IconBook } from "@tabler/icons-react";

import Takoyaki from "./components/Takoyaki";
import Letter from "./components/Letter";

function App() {
  const [start, setStart] = useState(false);
  const [openSelectDifficulty, setOpenSelectDifficulty] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const [openDict, setOpenDict] = useState(false);

  const [isTakoyakiPlaying, setIsTakoyakiPlaying] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [time, setTime] = useState(180);
  const [customSeed, setCustomSeed] = useState(undefined);

  const [count, setCount] = useState(true);

  useEffect(() => {
    // Start the interval when the component mounts
    const interval = setInterval(() => {
      // Update the count
      setCount((prevCount) => prevCount + 1);
    }, 500); // Run every 1 second

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ background: `linear-gradient(${"#FEFFCE"}, ${"#ffffff"})` }}>
      <Modal
        style={{ zIndex: "999" }}
        fullScreen
        transitionProps={{ transition: "slide-up", duration: 200 }}
        opened={start}
        onClose={() => setStart(false)}
        title={
          <>
            <Tooltip label="View Guessed Words" position="right">
              <ActionIcon onClick={() => setOpenDict(true)}>
                <IconBook size="1.125rem" />
              </ActionIcon>
            </Tooltip>
          </>
        }
      >
        <Matrix difficulty={difficulty === "easy" ? 6 : difficulty === "normal" ? 5 : 4} openDict={openDict} setOpenDict={setOpenDict} timer={time} customSeed={customSeed} />
      </Modal>
      <Modal
        style={{ marginLeft: "-4rem" }}
        transitionProps={{ transition: "slide-down", duration: 200 }}
        opened={openSelectDifficulty}
        onClose={() => setOpenSelectDifficulty(false)}
        centered
        title={
          <Text fw="bold" fz="xl" style={{ fontFamily: "Cherry Bomb One" }}>
            Customize Difficulty
          </Text>
        }
      >
        <Select
          label="Pick one"
          placeholder="Select Difficulty"
          dropdownPosition="bottom"
          data={[
            { value: "easy", label: "Easy" },
            { value: "normal", label: "Normal" },
            { value: "hard", label: "Hard" },
          ]}
          value={difficulty}
          onChange={setDifficulty}
        />
        <NumberInput defaultValue={time} label="Timer (seconds)" value={time} onChange={setTime} />
        <NumberInput defaultValue={customSeed} label="Enter Seed" value={customSeed} onChange={setCustomSeed} />
        <Button style={{ marginTop: "0.500rem" }} onClick={() => setCustomSeed(0)}>
          Clear Seed
        </Button>
      </Modal>

      <Modal
        style={{ marginLeft: "-4rem" }}
        transitionProps={{ transition: "slide-down", duration: 200 }}
        opened={openHelp}
        onClose={() => setOpenHelp(false)}
        centered
        title={
          <Text fw="bold" fz="xl" style={{ fontFamily: "Cherry Bomb One" }}>
            Welcome to the Boggle Adventure!
          </Text>
        }
      >
        <Text style={{ marginBottom: "1rem", textIndent: "1rem" }} ta="justify">
          Get ready to embark on a word-finding journey like no other. Here's everything you need to know to conquer the Boggle challenge and unleash your inner wordsmith:
        </Text>

        <Text style={{ marginBottom: "1rem" }} fw="bold" fz="xl">
          🌟 The Objective:
        </Text>
        <Text style={{ marginBottom: "1rem", textIndent: "1rem" }} ta="justify">
          Your mission is to explore the grid of magical letters and discover as many words as you can. Connect adjacent letters to form words, but remember, each letter can only
          be used once within a single word!
        </Text>

        <Text style={{ marginBottom: "1rem" }} fw="bold" fz="xl">
          ✨ Difficulty Levels:
        </Text>
        <Text style={{ marginBottom: "1rem" }} ta="justify" fw="bold">
          Choose your path and embrace the challenge:
        </Text>
        <Text style={{ marginBottom: "1rem" }} ta="justify">
          🌈 Easy: Unleash your word wizardry on a 6x6 grid of letter wonders!
        </Text>
        <Text style={{ marginBottom: "1rem" }} ta="justify">
          🌟 Normal: Take on the challenge of a 5x5 grid and let your skills shine!
        </Text>
        <Text style={{ marginBottom: "1rem" }} ta="justify">
          💫 Hard: Test your word-finding prowess on a compact 4x4 grid. Are you up for it?
        </Text>

        <Text style={{ marginBottom: "1rem" }} fw="bold" fz="xl">
          ⏱️ Time-Twisting Power:
        </Text>
        <Text style={{ marginBottom: "1rem", textIndent: "1rem" }} ta="justify">
          Mold the game according to your liking with the Timer Setting! Adjust the time limit to match your play style and challenge level. Will you race against the clock or
          savor each word-finding moment?
        </Text>

        <Text style={{ marginBottom: "1rem" }} fw="bold" fz="xl">
          🔎 The Rules:
        </Text>
        <Text style={{ marginBottom: "1rem" }} ta="justify">
          1️⃣ Connect adjacent letters horizontally, vertically, or diagonally to form words.
        </Text>
        <Text style={{ marginBottom: "1rem" }} ta="justify">
          2️⃣ Words must be at least 3 letters long. The longer the word, the mightier the points!
        </Text>
        <Text style={{ marginBottom: "1rem" }} ta="justify">
          3️⃣ Start your word-building adventure from any letter on the grid.
        </Text>
        <Text style={{ marginBottom: "1rem" }} ta="justify">
          4️⃣ Beware! You can't reuse the same letter within a single word.
        </Text>
        <Text style={{ marginBottom: "1rem" }} ta="justify">
          5️⃣ Your words should follow a sequential order of selected letters.
        </Text>

        <Text style={{ marginBottom: "1rem", textIndent: "1rem" }} ta="justify">
          Now, summon your inner wordsmith, grab your pen or tap those keys, and dive into the magical world of Boggle. Uncover hidden words, challenge your friends, and let your
          imagination soar!
        </Text>

        <Text style={{ marginBottom: "2rem", textIndent: "1rem" }} ta="center" c="dimmed">
          May the words be with you on this exhilarating Boggle Adventure! ✨🔤✨
        </Text>
      </Modal>
      <Takoyaki isTakoyakiPlaying={isTakoyakiPlaying} setIsTakoyakiPlaying={setIsTakoyakiPlaying} />

      {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter, index) => {
        const colors = ["dark", "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"];
        const randomIndex = Math.floor(Math.random() * colors.length);

        const randomTop = Math.floor(Math.random() * window.innerHeight) + "px";
        const randomLeft = Math.floor(Math.random() * window.innerWidth) + "px";
        const randomRotate = Math.floor(Math.random() * 360);

        return (
          <div style={{ position: "absolute", top: randomTop, left: randomLeft, transform: `rotate(${randomRotate}deg)` }} key={index}>
            <Letter color={colors[randomIndex]} letter={letter} isClicked={true} isGameStarted={true} />
          </div>
        );
      })}

      <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", placeContent: "center", flexDirection: "column" }}>
        <Center>
          <Text style={{ fontSize: "4rem", fontFamily: "Cherry Bomb One", color: "black", zIndex: "1" }}>Word Boggle</Text>
        </Center>
        <Group style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
          <Button
            color="green"
            size="xl"
            style={{ margin: "auto", color: "white", fontSize: "2rem", background: "#E66B18", border: "5px solid #CE5809" }}
            onClick={() => setStart(true)}
            fullWidth
          >
            Start Game
          </Button>
          <Button
            color="green"
            size="xl"
            style={{ margin: "auto", color: "white", fontSize: "2rem", background: "#E66B18", border: "5px solid #CE5809" }}
            onClick={() => setOpenSelectDifficulty(true)}
            fullWidth
          >
            Customize Difficulty
          </Button>
          <Button
            color="green"
            size="xl"
            style={{ margin: "auto", color: "white", fontSize: "2rem", background: "#E66B18", border: "5px solid #CE5809" }}
            onClick={() => setOpenHelp(true)}
            fullWidth
          >
            Help
          </Button>
        </Group>
      </div>
    </div>
  );
}

export default App;
