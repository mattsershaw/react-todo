import { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios';
import './TodoEdit.css'
import { TodoListContext } from '../../context/TodoListContext'
import { useHistory, useParams } from 'react-router-dom'

const TodoEdit = () => { // 更新画面のこと
  const id = parseInt(useParams().id); // 文字列になる
  const {todoList, setTodoList} = useContext(TodoListContext);
  // let todo = todoList.filter((todo) => todo.id === id)[0];
  const emptyTodo = {
    id: id,
    title: '',
    description: '',
  };
  const [todo, setTodo] = useState(emptyTodo);

  useEffect(() => {
    const getTodo = async () => { // 更新関連のメソッド
      const response = await axios.get(`todos/${id}`);
      setTodo(response.data);
    };
    getTodo();
  }, [id, setTodo]);

  // if(todo == null) { // 上の処理を作ったことでnullになることはあり得ない?
  //   todo= {
  //     id: id,
  //     title: '',
  //     description: '',
  //   }
  // } // データを初期化

  // const [title, setTitle] = useState(todo.title);
  // const [description, setDescription] = useState(todo.description);

  const history = useHistory();

  const changedTitle = (e) => {
    const newTodo = Object.assign({}, todo); // immutable関連
    newTodo.title = e.target.value;
    setTodo(newTodo);
    // setTitle(e.target.value);
  }
  const changedDescription = (e) => {
    const newTodo = Object.assign({}, todo); // immutable関連
    newTodo.description = e.target.value;
    setTodo(newTodo);
    // setDescription(e.target.value);
  }

const clickedSave = async () => {
    // 更新処理
    const newTodoList = todoList.slice();
    newTodoList.forEach((newTodo) => {
        if(todo.id === id) {
            newTodo.title = todo.title; // 左辺のTodo.titleをnewTodo.titleに変更した
            newTodo.description = todo.description;
        }
    });

    const newTodo = newTodoList.find((todo) => todo.id === id);

    await axios.put('todos', newTodo);
    setTodoList(newTodoList);
    history.push('/'); // URL関連
}
const clickedDelete = async () => {
    const newTodoList = todoList.slice().filter((todo) => todo.id !== id);

    await axios.delete(`todos/${id}`); // 文字列の中に変数を埋め込む時

    setTodoList(newTodoList)
    history.push('/');
}

  return (
    <Fragment>
      <h1>TodoEdit {id}</h1>
      <input className="todo-title-input" type="text" value={todo.title} onChange={changedTitle} />
        <br />
      <textarea className="todo-description-input" value={todo.description} onChange={changedDescription} />
        <br />
      <button onClick={clickedSave}>save</button>
      <button onClick={clickedDelete}>delete</button>
    </Fragment>
    
    );
}

export default TodoEdit;