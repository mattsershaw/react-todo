import { Fragment, useState } from 'react';
import './App.css';

const App = () => {

  const [text, setText] = useState('');

  const changedText = (e) => {
    setText(e.target.value);
  }
  const clickedButton = () => {
    alert(text);
  }

  return (
    <Fragment>
      <h1>Hello React!</h1>
      <input type="text" value={text} onChange={changedText} />
      <br />
      <button onClick={clickedButton}>Click Me!</button>
    </Fragment>
  );
} // import Reactのところを{ Fragment }にしてちまちま必要なところだけを引っ張ってくる

// function App() {
//   return (
//     <div>
//       <h1>Hello React!</h1> {/* 要素が2つ以上だとエラー / divで囲むことが多い */}
//       <input type="text" />
//       <button>Click Me!</button>
//     </div>
//   );
// }

export default App;
