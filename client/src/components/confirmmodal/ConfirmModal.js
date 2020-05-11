import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import PropTypes from 'prop-types';

import './styles.scss';

function ConfirmModal(props) {
  const {
    show,
    toggler,
    handleConfirm,
    confirmMessage,
    type,
    headerLabel
  } = props;

  const getConfirmButtonClass = () => {
    switch (type) {
      case 'danger': return 'cg-btn-danger';
      default: return '';
    }
  };

  const onConfirmClick = () => {
    handleConfirm();
    toggler();
  };

  return (
    <div>
      <Modal isOpen={show}>
        <ModalHeader toggle={toggler}>
          {headerLabel}
        </ModalHeader>
        <ModalBody id="confirm-modal-body">
          {confirmMessage}
        </ModalBody>
        <ModalFooter>
          <div id="confirm-modal-footer-div">
            <button
              id="confirm-modal-close-button"
              type="button"
              className="btn btn-secondary"
              onClick={toggler}>
              Cancel
            </button>
            <button
              className={getConfirmButtonClass()}
              type="button"
              onClick={onConfirmClick}
            >
              Confirm
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

ConfirmModal.propTypes = {
  show: PropTypes.bool.isRequired,
  toggler: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  confirmMessage: PropTypes.string.isRequired,
  type: PropTypes.string,
  headerLabel: PropTypes.string.isRequired
};

ConfirmModal.defaultProps = {
  type: 'danger'
};

export default ConfirmModal;
