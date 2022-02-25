import { useState } from "react";

const TextEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
    investmentDecision: "Buy",
  });

  const changeHandling = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandling = () => {
    console.log(state);
    alert("Submit success!");
  };
  return (
    <div className="TextEditor">
      <h2>덕구의 투자결정</h2>

      <div>
        <select
          name="investmentDecision"
          value={state.investmentDecision}
          onChange={changeHandling}
        >
          <option value={"buy"}>BUY</option>
          <option value={"sell"}>SELL</option>
          <option value={"hold"}>HOLD</option>
        </select>
      </div>

      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={changeHandling}
        />
      </div>

      <div>
        <button onClick={submitHandling}> 저장하기 </button>
      </div>
    </div>
  );
};

export default TextEditor;
