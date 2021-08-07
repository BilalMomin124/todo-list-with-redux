export const Todo = "TODO";
export const deleteTodo = "DELETE_TODO";
export const editTodo = "EDIT_TODO"

export const AddTodo = (todo) => (
    {
        type: Todo,
        payload: todo
    }
)

export const DeleteTodo = (todo) => (
    console.log("delete", todo),
    {
        type: deleteTodo,
        payload: todo
    }
)

export const EditTodo = (todo) => (
    console.log("edit", todo),
    {
        type: editTodo,
        payload: todo
    }
)