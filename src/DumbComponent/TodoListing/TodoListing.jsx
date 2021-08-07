import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import "./TodoListing.css"
import { connect } from "react-redux";
import { DeleteTodo, EditTodo } from '../../redux/action';
const TodoListing = (props) => {
    console.log("todoArray", props)
    const todoList = props.todoArray
    useEffect(() => {
        props.EditTodo("")
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-2">
                    <div className="card todo_listing_card">
                        <div className="card-body">
                            <div className="row todo_listing_row todo_listing_heading_row">
                                <div className="col-md-3 text-center todolist_heading">Sr. No.</div>
                                <div className="col-md-6 text-center  todolist_heading">Todo Names</div>
                                <div className="col-md-3 text-center  todolist_heading">Action</div>
                            </div>
                            {todoList && todoList.map((value, index) => {
                                return (
                                    <div className="row todo_listing_row" key={value}>
                                        <div className="col-md-3 text-center">{index + 1}</div>
                                        <div className="col-md-6 text-center">{value}</div>
                                        <div className="col-md-3 text-center">
                                            <Button variant="danger" className="me-2" onClick={() => {
                                                const filterArray = todoList.filter((filteredValue, filteredIndex) => {
                                                    return filteredIndex !== index
                                                })
                                                console.log(filterArray)
                                                props.DeleteTodo(filterArray)
                                            }}>Delete</Button>
                                            <Button variant="secondary" onClick={() => {
                                                props.EditTodo(value)
                                            }}>Edit</Button>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        todoArray: state.todoArray
    }
}
const mapDispatchToProps = dispatch => ({
    DeleteTodo: (todo) => {
        dispatch(DeleteTodo(todo))
    },
    EditTodo: (todo) => {
        dispatch(EditTodo(todo))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoListing)
