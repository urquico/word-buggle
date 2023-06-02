import Matrix from "./components/Matrix";
import { Modal, Button, Group } from "@mantine/core";
import { useState } from "react";

function App() {
  const [start, setStart] = useState(false);
  const [openSelectDifficulty, setOpenSelectDifficulty] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Group>
        <Button color="orange" style={{ margin: "auto" }} onClick={() => setStart(true)}>
          Start Game
        </Button>
        <Button color="orange" style={{ margin: "auto" }} onClick={() => setOpenSelectDifficulty(true)}>
          Select Difficulty
        </Button>
        <Button color="orange" style={{ margin: "auto" }}>
          Help
        </Button>
      </Group>
      <Modal style={{ marginLeft: "-1rem" }} fullScreen transitionProps={{ transition: "slide-up", duration: 200 }} opened={start} onClose={() => setStart(false)}>
        <Matrix difficulty={4} />
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
    </div>
  );
}

export default App;
