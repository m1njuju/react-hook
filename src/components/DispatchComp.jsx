import { useContext, useState } from "react";
import { DispatchContext, StateContext } from "./DispatchContext";

const DispatchComp = () => {
  const context = useContext(DispatchContext);
  const state = useContext(StateContext);

  const [input, setInput] = useState("");

  return (
    <div>
      <h1>{state.id}</h1>
      <button
        onClick={() => {
          context({ type: "id_plus" });
        }}
      >
        값이 1 증가합니다
      </button>
      <br />

      <h1>{state.text}</h1>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          context({ type: "text_change", payload: input });
        }}
      >
        텍스트 변경
      </button>
    </div>
  );
};

export default DispatchComp;
