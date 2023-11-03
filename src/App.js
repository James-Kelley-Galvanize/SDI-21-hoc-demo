import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import { AppContext } from "./HOC/context-HOC";

function App() {
  let { myState, setMyState } = useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();
    let inputVal = document.querySelector("input").value;
    setMyState(inputVal);
  }

  return (
    <div className="App">
      <header className="App-header">
        {myState}
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button type="submit">SUBMIT</button>
        </form>
      </header>
    </div>
  );
}

export default App;
