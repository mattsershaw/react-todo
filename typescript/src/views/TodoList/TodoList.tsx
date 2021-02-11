import React, { useEffect, useState, useContext } from 'react';
import Axios, { AxiosResponse } from 'axios';
import { TodoListContext } from 'src/context/TodoListContext';
import { Todo } from 'src/model/Todo';
import { TodoItem } from 'src/components/TodoItem';
import styles from './TodoList.css'; // src/App.cssも可
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const todos: Todo[] = [
//   {
//     id: 0,
//     title: 'Title1aaaaaa',
//     description: 'Description1',
//   },
//   {
//     id: 1,
//     title: 'Title2vvv',
//     description: 'Description2',
//   },
//   {
//     id: 2,
//     title: 'Title3',
//     description: 'Description3',
//   },
// ];

export const TodoList: React.FC = () => {
  // const [todoList, setTodoList] = useState<Todo[]>([]); // どこのコンポーネントからも使えるようにする

  const { todoList, setTodoList } = useContext(TodoListContext); // グローバルステイトで管理

  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState(''); // ユーザー側でデーターを持っている
  const [todo, setTodo] = useState<Todo>({
    //todoをstate化すればいちいちtitleとdesc作らなくていい
    // id: 0, // id項目をなくしたい(post、putの場合など)
    title: '',
    description: '',
  });

  const history = useHistory();

  useEffect(() => {
    // const getTodoList = async () => {
    //   const response = await Axios.get<Todo[]>('todos');
    //   setTodoList(response.data);
    // };
    // getTodoList();
    (async () => {
      const response = await Axios.get<Todo[]>('todos');
      setTodoList(response.data);
    })();
  }, [setTodoList]); // 即時関数の書き方

  const changedTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTodo = Object.assign({}, todo);
    newTodo.title = e.target.value; // titleが上書きされたもの
    setTodo(newTodo);
  };

  const changedDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTodo = Object.assign({}, todo);
    newTodo.description = e.target.value; // descが上書きされたもの
    setTodo(newTodo);
  };

  const addClick = async () => {
    const response = await Axios.post<Todo, AxiosResponse<string>>(
      'todos',
      todo
    );
    const newTodoList = todoList.slice();
    const newTodo = Object.assign({}, todo);
    newTodo.id = parseInt(response.data); // 数字型に変換

    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  return (
    <React.Fragment>
      {/* <div>
        <Link to="/edit/1">Edit</Link>
      </div> */}
      <div>
        <input className={styles.todoTitleInput} onChange={changedTitle} />
        <textarea
          className={styles.todoDescriptionInput}
          onChange={changedDescription}
        />
      </div>
      <div>
        <button className={styles.todoAddButton} onClick={addClick}>
          Click Me!!!
        </button>
      </div>

      {todoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onClick={() => {
              return history.push(`/edit/${todo.id}`);
            }}
          />
        );
        // todoを引数としてTodo[]を回す
      })}
    </React.Fragment>
  ); // <React.Fragment>の代わりに<>でもいける
};
