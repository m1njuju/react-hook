import "./App.css";
import ExReducer from "./components/ExReducer";
import HookComp from "./components/HookComp";
import MemoHook from "./components/MemoHook";
import ReducerComp from "./components/ReducerComp";
import ReducerComp2 from "./components/ReducerComp2";

function App() {
  return (
    <div className="App">
      <MemoHook />
      <HookComp />
      <ReducerComp />
      <ReducerComp2 />
      <ExReducer />
    </div>
  );
}

export default App;
