
// Modal Component
// A generic modal container to be reused across the app (for contact, previews, experiments, etc.)
// TODO: Implement props for isOpen, onClose, and children.

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="ui-modal-overlay">
      <div className="ui-modal-content">
        <button className="ui-modal-close" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;