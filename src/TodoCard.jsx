import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, handleEditTodo, index } = props

    return (
    <li className='todoItem'>
        {children}
        <div className="actionsContainer">
            <button onClick={() => {handleEditTodo(index)}}>
                <i className="fa-solid fa-pen-nib"></i>
            </button>
            <button onClick={() => {handleDeleteTodo(index)}}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>

        
    </li>
    )
}
