import React from 'react';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faTrash} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({item, index, deleteItem, handleDone}) => {

  const clazz = item.isDone ? 'text-decoration-line-through' : 'ms-2'

  return (
    <li  className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input type="checkbox" className="form-check-input " id="exampleCheckId1"  onChange={(e) => handleDone(e,index)} checked = {item.isDone}/>
    <span className={clazz}>{item.title}</span>
      </div>
      <button className="btn btn-danger delete-btn" onClick={() => deleteItem(index)}>
        Delete
      </button>

    </li>

  );
};
export default TodoItem;
