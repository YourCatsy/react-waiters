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
          autoComplete="off"
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
        autoComplete="off"
        className="input_field"
        onKeyUp={find}
        type="text"
        id="input"
        placeholder="find waiter"
      />
    </>
  );
}
