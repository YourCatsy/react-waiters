import React from 'react';

export default function AddTodoOption({
  todo,
  onDeleteClick
}) {

  return (
    <li key={todo.id} data-n={todo.text[1]} className='total_price_li' >
      <div className='modal_list-price'>
      <p className='margin waiter_name'>{todo.text[0]}</p>
      <p className='margin waiter_name'> {todo.text[1]}</p>
      </div>
      <button className='button_list-margin button_list' onClick={() => onDeleteClick(todo.id)}>Delete</button>
    </li>
  );
}