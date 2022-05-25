import "./App.css";
import React from "react";
import { ThemeContext } from "./components/ThemeContext";
import ExReducer from "./components/ExReducer";
import HookComp from "./components/HookComp";
import MemoHook from "./components/MemoHook";
import ReducerComp from "./components/ReducerComp";
import ReducerComp2 from "./components/ReducerComp2";

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value="light">
        <ContextHook />
      </ThemeContext.Provider>

      <MemoHook />
      <HookComp />
      <ReducerComp />
      <ReducerComp2 />
      <ExReducer />
    </div>
  );
}

function ContextHook() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 현재 선택된 테마 값을 읽기 위해 contextType을 지정합니다.
  // React는 가장 가까이 있는 테마 Provider를 찾아 그 값을 사용할 것입니다.
  // 이 예시에서 현재 선택된 테마는 dark입니다.
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}

const Button = (props) => {
  return <h1>{props.theme}</h1>;
};

export default App;
