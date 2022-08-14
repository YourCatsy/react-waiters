import React, { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import AddTodoOption from "./ToDolist";

export default function SelectOptions({ ListFromModal }) {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddInputChange(e) {
    setTodo(e.target.value);
  }

  function handleAddFormSubmit(e) {
    e.preventDefault();

    let comma = ',';
    splitString(todo, comma)
    function splitString(stringToSplit, separator) {
      let arrayOfStrings = stringToSplit.split(separator);
      if (todo !== "") {
        setTodos([
          ...todos,
          {
            id: new Date(),
            text: arrayOfStrings
          }
        ]);

      }
      setTodo([]);
      console.log(arrayOfStrings);
    }
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function price() {
    var output = document.getElementById("total-price_button"),
      lies = document.querySelectorAll(".total_price_li");

    output.value = Array.prototype.reduce.call(
      lies, function (p, t) {
        return p + (+t.dataset.n);
      }, 0
    );
  }
  return (
    <div className="App">
      <form onSubmit={ListFromModal}>
        <ToDoForm
          todo={todo}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
        <ul className='todo_list' id='total_price_ul'>
          {todos.map((todo) => (
            <AddTodoOption
              todo={todo}
              onDeleteClick={handleDeleteClick}
            />
          ))}
        </ul>
        <div className="total-price">
          <p className="total-price_click-text">(Click on the button to see the price) </p>
          <output onClick={price} id="total-price_button"> Total price </output>
        </div>
      </form>
    </div>
  );
}