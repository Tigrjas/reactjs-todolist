import React, { useState } from 'react'

export default function TodoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue} = props

    
    return (
    <header>
        <input placeholder='Enter todo...' value={todoValue} 
        onKeyDown={(e) => {
            if (e.key == "Enter") {
                setTodoValue(e.target.value)
                handleAddTodos(todoValue)
                setTodoValue('')
            }    
        }} 
        onChange={(e) => {
            setTodoValue(e.target.value)
        }}/>

        <button onClick={() => {
            handleAddTodos(todoValue)
            setTodoValue('')
        }}>Add</button>
    </header>
    )
}
