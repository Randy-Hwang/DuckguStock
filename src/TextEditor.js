import { useState } from "react";

const TextEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const changeHandling = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      //   emotion의 값을 변경하게 될 경우, e.target.name은 emotion이 될거고, e.target.value는 변경한 값이 될 것이다.
    });
  };

  const submitHandling = () => {
    console.log(state);
    alert("Submit success!");
  };
  return (
    <div className="TextEditor">
      <h2>오늘의 일기</h2>

      <div>
        <input name="author" value={state.author} onChange={changeHandling} />
      </div>

      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={changeHandling}
        />
      </div>

      <div>
        <select name="emotion" value={state.emotion} onChange={changeHandling}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>

      <div>
        <button onClick={submitHandling}> Submit my Diary </button>
      </div>
    </div>
  );
};

export default TextEditor;
