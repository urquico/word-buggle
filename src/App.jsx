import { useEffect, useState } from "react";

import Matrix from "./components/Matrix";
import { Modal, Button, Group, Tooltip, ActionIcon, Text, Center } from "@mantine/core";
import { IconBook } from "@tabler/icons-react";

import Takoyaki from "./components/Takoyaki";
import Letter from "./components/Letter";

function App() {
  const [start, setStart] = useState(false);
  const [openSelectDifficulty, setOpenSelectDifficulty] = useState(false);
  const [openDict, setOpenDict] = useState(false);

  const [isTakoyakiPlaying, setIsTakoyakiPlaying] = useState(false);

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
        <Matrix difficulty={4} openDict={openDict} setOpenDict={setOpenDict} />
      </Modal>
      <Modal
        style={{ marginLeft: "-1rem" }}
        transitionProps={{ transition: "slide-up", duration: 200 }}
        opened={openSelectDifficulty}
        onClose={() => setOpenSelectDifficulty(false)}
        centered
      >
        Select Difficulty
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
            Select Difficulty
          </Button>
          <Button color="green" size="xl" style={{ margin: "auto", color: "white", fontSize: "2rem", background: "#E66B18", border: "5px solid #CE5809" }} fullWidth>
            Help
          </Button>
        </Group>
      </div>
    </div>
  );
}

export default App;
