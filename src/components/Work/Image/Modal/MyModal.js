import Modal from 'react-modal'
import './Modal.scss'

const MyModal = ({ openModal, closeModal, src }) => {
  //Modal Styles
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      animation: 'fadeIn 2s ease-in',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      animation: 'fade-in 1s ease',
      padding: '7px',
    },
  }
  const imagePath = require(`../../../../assets/sites/${src}.png`)
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="modal-container">
        <img src={imagePath} alt="" />
      </div>
    </Modal>
  )
}

export default MyModal
