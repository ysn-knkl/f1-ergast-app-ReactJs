import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ChampionsList from "./components/Champion/ChampionsList";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <ChampionsList />
      </Container>
    </div>
  );
}

export default App;
