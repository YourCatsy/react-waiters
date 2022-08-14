import React from "react";
export default function AddTodoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange,
  find
}) {
  return (
    <>
      <form onSubmit={onAddFormSubmit}>

        <input
          id="margin-input"
          className="input_field"
          name="todo"
          type="text"
          placeholder="Add new waiter"
          value={todo}
          onChange={onAddInputChange}
        />

      </form>
      <input
        className="input_field"
        onKeyUp={find}
        type="text"
        id="input"
        placeholder="find waiter"
      />
    </>
  );
}
