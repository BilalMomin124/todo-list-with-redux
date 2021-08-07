import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from "react-redux";
import { AddTodo } from "../../redux/action"

const TextBoxWithButton = (props) => {

    const [inputValue, setInputValue] = useState("");
    const [itemList, setItemList] = useState([])
    useEffect(() => {
        props.AddTodo(itemList)
        setInputValue(props.todoEditValue)
    }, [itemList, props.todoEditValue])

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-4">
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" placeholder="Enter Todo" value={inputValue} onChange={(e) => {
                            setInputValue(e.target.value)
                        }} />
                    </Form.Group>
                </div>
                <div className="col-md-4">
                    <Button variant="primary" onClick={() => {
                        setItemList((prevValue) => {
                            return [...prevValue, inputValue]
                        })
                        setInputValue("")
                    }}>
                        Add Todo
                    </Button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    todoEditValue: state.todoEditValue,
});
const mapDispatchToProps = dispatch => ({
    AddTodo: (todo) => {
        dispatch(AddTodo(todo))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(TextBoxWithButton)
