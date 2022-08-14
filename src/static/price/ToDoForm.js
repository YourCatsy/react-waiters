import React from 'react';
import { DataMenu } from '../menu/dataMenu';
export default function ToDoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange
}) {

  const handleChange = event => {
    console.log(event.target.value);
  }

  return (
    <div>
      <label htmlFor="todo">Create total price: </label>
      <input name="todo"
        autoComplete="off"
        className='modal_input-field input_field'
        type="text"
        id="input_third"
        list='fruit-select'
        value={todo}
        onChange={onAddInputChange}
        placeholder="find Meal" />
      <datalist onChange={handleChange} name="fruits" id="fruit-select" className='modal-position'>
        {DataMenu.map(option => (
          <option className='optionMeal' key={option.id} value={[option.title, option.price]}>
            {option.title}
          </option>
        ))}
      </datalist>
      <button className='button_list' onClick={onAddFormSubmit}>Add</button>
    </div>
  );
}


