import React from 'react';
import Axios from 'axios';
import { TodoList } from './views/TodoList/TodoList';
import styles from './App.css';

Axios.defaults.baseURL = 'http://localhost:4000/api/';

export const App: React.FC = () => {
  return (
    <div className={styles.area}>
      <TodoList />
    </div>
  );
};
// 関数コンポーネント
