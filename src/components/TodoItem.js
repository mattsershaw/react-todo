import React from 'react'
import './TodoItem.css'

const TodoItem = (props) => {
    return (
        <div className="todo-item" onClick={props.onClick}>
            <div className="todo-item-title">{props.todo.title}</div>
            <div className="todo-item-description">{props.todo.description}</div>
        </div>
    )
}

export default TodoItem

// 6行目のkey={props.todo.id}がonClickの前にあったがこれはなくても良い

// const obj = {
//     name: "masa",
//     hobby: "music",
//     birthDay: "1993/08/28"
// }

// const {name, hobby} = obj;

// props = {
//     todo: "",
//     onClick: "",
// }

// const TodoItem = ({todo, onClick}) => {