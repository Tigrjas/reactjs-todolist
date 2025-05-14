import React from 'react'

export default function TodoHeader() {
    const today = new Date().toLocaleDateString();

    return (
        <div className="todo-header">
            <h1>My Todo List</h1>
            <h1>{today}</h1>
        </div>
    )
}
