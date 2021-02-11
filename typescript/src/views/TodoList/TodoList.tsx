import React from 'react';
import { Todo } from '../../model/Todo';
import { TodoItem } from '../../components/TodoItem';
import styles from './TodoList.css';

const todos: Todo[] = [
  {
    id: 0,
    title: 'Title1aaaaaa',
    description: 'Description1',
  },
  {
    id: 1,
    title: 'Title2vvv',
    description: 'Description2',
  },
  {
    id: 2,
    title: 'Title3',
    description: 'Description3',
  },
];

export const TodoList: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <input className={styles.todoTitleInput} />
        <textarea className={styles.todoDescriptionInput} />
      </div>
      <div>
        <button className={styles.todoAddButton}>Click Me!!!</button>
      </div>

      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
        // todoを引数としてTodo[]を回す
      })}
    </React.Fragment>
  ); // <React.Fragment>の代わりに<>でもいける
};
