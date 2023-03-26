import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App mt-12">
      <h1 className="text-center text-2xl font-bold mb-4">AI Universe Hub</h1>
      <Button>Sort By Date</Button>
      <Card />
    </div>
  );
}

export default App;
