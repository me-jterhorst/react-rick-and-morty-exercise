import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Characters from "./components/Characters";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Home /> */}
        <Characters />
      </main>
    </div>
  );
}

export default App;
