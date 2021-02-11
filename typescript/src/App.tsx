import React from 'react';
import { TodoList } from './views/TodoList/TodoList';
import styles from './App.css';

export const App: React.FC = () => {
  return (
    <div className={styles.area}>
      <TodoList />
    </div>
  );
};
// 関数コンポーネント
