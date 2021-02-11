import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Todo } from 'src/model/Todo';
import { TodoItem } from 'src/components/TodoItem';
import styles from './TodoList.css'; // src/App.cssも可

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
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodoList = async () => {
      const response = await Axios.get<Todo[]>('todos');
      setTodoList(response.data);
    };
    getTodoList();
  }, [setTodoList]);

  return (
    <React.Fragment>
      <div>
        <input className={styles.todoTitleInput} />
        <textarea className={styles.todoDescriptionInput} />
      </div>
      <div>
        <button className={styles.todoAddButton}>Click Me!!!</button>
      </div>

      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
        // todoを引数としてTodo[]を回す
      })}
    </React.Fragment>
  ); // <React.Fragment>の代わりに<>でもいける
};
