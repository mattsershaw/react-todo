import React from 'react';
import Axios from 'axios';
import { TodoEdit } from 'src/views/TodoEdit/TodoEdit';
import { TodoList } from './views/TodoList/TodoList';
import { TodoListProvider } from 'src/context/TodoListContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.css';

Axios.defaults.baseURL = 'http://localhost:4000/api/';

export const App: React.FC = () => {
  return (
    <div className={styles.area}>
      <TodoListProvider>
        <Router>
          <Route exact path="/" component={TodoList} />
          <Route path="/edit/:id" component={TodoEdit} />
        </Router>
        {/* <TodoEdit />
        <TodoList /> */}
      </TodoListProvider>
    </div>
  );
};
// 関数コンポーネント
