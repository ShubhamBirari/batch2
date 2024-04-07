import "./App.css";
import Button from "./components/Button";

function App() {
  const colors = ["red", "green", "blue", "yellow", "lightblue", "orange"];

  const obj = [
    { color: "red", height: 100, width: 200 },
    { color: "green", height: 300, width: 300 },
    { color: "blue", height: 200, width: 200 },
    { color: "orange", height: 500, width: 222 },
    { color: "lightblue", height: 300, width: 233 },
  ];

  const displayButton = (item) => <Button {...item} />;

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {obj.map((item) => (
          <Button {...item} key={item.color} />
        ))}
      </div>
    </>
  );
}

export default App;
