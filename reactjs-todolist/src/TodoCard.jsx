import React from 'react'

export default function TodoCard(props) {
    const todo = props.todo

    return (
    <li className='todoItem'>
        <p>{todo}</p>
        <div className="actionsContainer">
            <i className="fa-solid fa-pen-nib"></i>
            <i className="fa-solid fa-trash"></i>
        </div>

        
    </li>
    )
}
