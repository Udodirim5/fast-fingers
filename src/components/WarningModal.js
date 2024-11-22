const WarningModal = ({ onCancelModal }) => {
  const handleConfirmClick = () => {
    onCancelModal();
    window.location.reload();
  };

  return (
    <div class="modal-container">
      <div class="back-card">
        <div class="back-card-inner warning-modal">
          <p>
            <span>Are you sure you want to continue?</span>
          </p>
          <div class="modal-button">
            <button onClick={onCancelModal} class="btn-cancel">
              Cancel
            </button>
            <button onClick={handleConfirmClick} class="btn-confirm">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
