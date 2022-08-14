import React from 'react';
export default function ListItem({
  todo,
  onEditClick,
  onDeleteClick,
}) {
  return (
    <li key={todo.id} className="waiters-container" id='position' >
      <div className='modal_list-price'> <p className=' waiter_name'>{todo.title}</p>
        <div className='margin'>
          <button className='button_list' onClick={() => onEditClick(todo)}>Edit</button>
          <button className='button_list' onClick={() => onDeleteClick(todo.id)}>Delete</button>
        </div>
      </div>
    </li>
  )
}



