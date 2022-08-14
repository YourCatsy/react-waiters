import React from "react";
export default function EditForm({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit
}) {
  return (
    <form onSubmit={onEditFormSubmit}>
      <div >
        <h1 ><span>Edit</span> Waiter</h1>
      </div>
      <div  >
        <label htmlFor="updateTodo">Update Waiter: </label>
        <input
          className='input_field'
          name="updateTodo"
          type="text"
          placeholder="Update todo"
          value={currentTodo.title}
          onChange={onEditInputChange}
        />
        <div className="waiters_button-align">
          <button className='waiters_button-align_buttons' type="submit" onClick={onEditFormSubmit}><p>Update</p></button>
          <button className='waiters_button-align_buttons' onClick={() => setIsEditing(false)}><p>Cancel</p></button>
        </div>
      </div>
    </form>
  );
}
