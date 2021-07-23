import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Characters from "./components/Characters";
import SingleCharacter from "./components/SingleCharacter.js";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Home /> */}
        {/* <Characters /> */}
        <SingleCharacter />
      </main>
    </div>
  );
}

export default App;
