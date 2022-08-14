import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import AddTodoForm from './AddTodoForm'
import WaitersApi from "./WaitersApi";
import findWaiter from "./FindWaiter";
import React from "react";
import EditForm from './EditForm'

export default function AppWaiters() {

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    WaitersApi.getList().then((res) => {
      setTodos(res);
    });
  }, []);

  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  function handleAddInputChange(e) {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, title: e.target.value });
    console.log(currentTodo);
  }

  function handleAddFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      const a = {
        id: new Date(),
        title: todo.trim()
      }
      WaitersApi.create(a).then((newTodo) => {
        setTodos([...todos, newTodo]);
      })
    };
    setTodo("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    WaitersApi.delete(id).then(() => {
      const removeItem = todos.filter(todo =>
        todo.id !== id);
      setTodos(removeItem);
    });

  }

  function handleUpdateTodo(id, updatedTodo) {
    WaitersApi.update(id, updatedTodo).then(() => {
      const updatedItem = todos.map(todo =>
        todo.id === id ? updatedTodo : todo);
      setIsEditing(false);
      setTodos(updatedItem);
    });
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  return (
    <div className="waiters-container" >
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
          find={findWaiter}
        />
      )}
      <ul className='todo_list'>
        {todos.map(todo => (
          <ListItem
            todo={todo}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}


