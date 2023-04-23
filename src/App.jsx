import Matrix from "./components/Matrix";

function App() {
  const randomSeed = Math.floor(Math.random() * 1000000);

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Matrix seed={randomSeed} />
    </div>
  );
}

export default App;
