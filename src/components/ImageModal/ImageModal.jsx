import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, picture }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
    >
      <div>
        <img
          src={picture ? picture.modalPict : {}}
          alt={picture ? picture.altDescr : {}}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
