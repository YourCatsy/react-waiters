import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SelectOptions from './SelectOptions';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#modal');

export default function AppModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden"
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "unset"

  }

  return (
    <div className='wrapper'>
      <h1> Price form</h1>
      <button className='button_menu' onClick={openModal}><p>Open Modal</p></button>
      <Modal
        shouldCloseOnOverlayClick={false}
        className='modal-position'
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"

      >
        <div className='modal-window'>
          <h1 >Fill the price form</h1>
          <button className='button_list button-close_position' onClick={closeModal}>close</button>
          <form>
            <label>Enter waiter name:</label> <input className='modal_input-field input_field' />
            <label>Enter table name:</label> <input className='modal_input-field input_field' />
            <SelectOptions/>
          </form>
        </div>
      </Modal>
    </div>
  );
}

const props = {};
ReactDOM.render(<AppModal  {...props} />, document.getElementById('modal'))