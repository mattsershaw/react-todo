import { Fragment,　useEffect, useState, useContext } from 'react';
import './TodoList.css';
import axios from 'axios';
import { TodoListContext } from "../../context/TodoListContext"
import TodoItem from '../../components/TodoItem'
import { useHistory } from 'react-router-dom'


const TodoList = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {todoList, setTodoList} = useContext(TodoListContext);
    // settodolistでtodolistを更新
  const history = useHistory();

  useEffect(() => {
    const getTodoList = async () => {
      const response = await axios.get('todos'); // URLのこと
      setTodoList(response.data);
      // axios.get('https://api-creator.tk/react-lesson/todos');
      // .then((response) =>{
      //   console.log(response.data);
      //   setTodoList(response.data);
      // }); この4行の処理を2行でかける
    };
    getTodoList();
  }, [setTodoList]);



  const changedTitle = (e) => {
    setTitle(e.target.value);
  }
  const changedDescription = (e) => {
    setDescription(e.target.value);
  }
  const clickedButton = async () => {
    let newId = 0;
    if (todoList.length > 0) {
      newId = Math.max(...todoList.map((todo)=>todo.id)) + 1;

    }
    const newTodoList = todoList.slice();
    const newTodo = {
      id: newId,
      title: title,
      description: description,
    };

    await axios.post('todos', newTodo); // URLのこと

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
        return <TodoItem todo={todo} key={todo.id} onClick={() => history.push(`/edit/${todo.id}`)}/>;         
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