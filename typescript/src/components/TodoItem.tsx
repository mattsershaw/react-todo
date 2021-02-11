import React from 'react';
import styles from './TodoItem.css';
import { Todo } from '../model/Todo';

type Props = {
  todo: Todo;
  onClick?: () => void; // 戻り値なし
};
// ?は何も定義されてない型も受け取れるようになる
// 下のtodoの引数を指定
// ジェネリックの中身をreact.fc搭載

export const TodoItem: React.FC<Props> = ({ todo, onClick }) => {
  return (
    <div className={styles.todoItem} onClick={onClick}>
      <div className={styles.todoItemTitle}>{todo.title}</div>
      <div className={styles.todoItemDescription}>{todo.description}</div>
    </div>
  );
};
