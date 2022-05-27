import React, {useState} from 'react';
import TodoItem from "../TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [newTodo, setNewTodo] = useState('')

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos))
  // }, [todos])



  const handelChange = (e) => {
    setNewTodo(e.target.value)
  }

  const handleDone = (e, index) => {
    console.log(e.target.checked, index)
    const updatedArray = todos.map((item, idx) => (index === idx) ? {...item, isDone: e.target.checked} : item)
    localStorage.setItem('todos', JSON.stringify(updatedArray))
    setTodos(updatedArray)
  }


  const addNewItem = () => {

    newTodo.trim() === ''
      ? alert('fill')
      : setTodos([...todos, {title: newTodo, isDone: false}])
    const todosWithNew = [...todos, {title: newTodo, isDone: false}]
    localStorage.setItem('todos', JSON.stringify(todosWithNew))
    setNewTodo('')
  }


  const deleteItem = (i) => {
    const filterList = todos.filter((item, idx) => idx !== i)
    localStorage.setItem('todos', JSON.stringify(filterList))
    setTodos((filterList))
  }


  const keyPress = (e) => {
    if (e.key === 'Enter') {
      return addNewItem()
    }
  }


  return (
    <div className="container">
      <div className="col-6md">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{todos.length} TodoList</h2>
          <span>Item: {todos.length}</span>
        </div>
        <input type="text"
               className="form-control"
               onChange={handelChange}
               value={newTodo}
               onKeyPress={keyPress}/>
        <button className="btn btn-success w-100 mt-3"
                onClick={addNewItem}
                disabled={newTodo.trim().length === 0}>
          Add new item
        </button>
        <ul className="list-group mt-5  ">
          {
            todos.map((item, idx) => (
              <TodoItem key={idx} item={item} index={idx} deleteItem={deleteItem} handleDone={handleDone}/>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Todo;