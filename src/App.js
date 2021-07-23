import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Characters from "./components/Characters";
import SingleCharacter from "./components/SingleCharacter.js";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/characters/singleCharacter:id">
            <SingleCharacter />
          </Route>

          <Route path="/characters">
            <Characters />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
