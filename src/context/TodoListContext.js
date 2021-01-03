import { createContext, useState } from 'react'

// const MyContext = React.createContext(defaultValue);

export const TodoListContext = createContext({});

const sampleTodoList = [
    {
      id: 0,
      title: 'サンプル0',
      description: 'サンプル0',
    },
    {
      id: 1,
      title: 'サンプル1',
      description: 'サンプル1',
    }
  ];

export const TodoListProvider = ( {children} ) => {
    const [todoList, setTodoList] = useState(sampleTodoList);
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
}