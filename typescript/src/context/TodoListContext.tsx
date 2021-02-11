import React, { createContext, useState } from 'react';
import { Todo } from 'src/model/Todo';

type TodoListContextProps = {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoListContext = createContext<TodoListContextProps>({
  todoList: [],
  setTodoList: () => {
    return console.warn('no function'); //console.logのwarnバージョン
  },
});

export const TodoListProvider: React.FC = ({ children }) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  return (
    <TodoListContext.Provider
      value={{
        todoList,
        setTodoList,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
