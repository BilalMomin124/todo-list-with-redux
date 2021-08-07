import React from 'react'
import DumbComponents from '../../DumbComponent';

const Todo = () => {
    return (
        <div>
            <DumbComponents.TextBoxWithButton />
            <DumbComponents.TodoListing />
        </div>
    )
}

export default Todo;
