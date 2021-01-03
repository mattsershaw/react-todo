import { Fragment, useState } from 'react';
import './TodoList.css';
import TodoItem from '../../components/TodoItem'

const sampleTodoList = [
  {
    id: 0,
    title: 'サンプル0',
    description: 'サンプル0',
  },
  {
    id: 1,
    title: 'サンプル1',
    description: 'サンプル1',
  }
];

const TodoList = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todoList, setTodoList] = useState(sampleTodoList);
    // settodolistでtodolistを更新

  const changedTitle = (e) => {
    setTitle(e.target.value);
  }
  const changedDescription = (e) => {
    setDescription(e.target.value);
  }
  const clickedButton = () => {
    const newId = Math.max(...todoList.map((todo)=>todo.id)) + 1;
    const newTodoList = todoList.slice();
    const newTodo = {
      id: newId,
      title: title,
      description: description,
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    setTitle('');
    setDescription('');
    // alert(`title: ${title}\r\ndescription: ${description}`); // text+description
  }

  return (
    // クラスでまとめるとfragmentは必要なくなる
    <Fragment>
      <div>
        <input className="todo-title-input" type="text" value={title} onChange={changedTitle} />
        <br />
        <textarea className="todo-description-input" value={description} onChange={changedDescription} />
        <br />
      </div>
      <div>
        <button className="todo-add-button" onClick={clickedButton}>Click Me!</button>
      </div>
      {todoList.map((todo) => {
        return <TodoItem todo={todo} key={todo.id}/>;
         
      })}
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

export default TodoList;