import { Modal } from "@mui/material";
import React, { useState } from "react";
import ModalContent from "../../modalContent/ModalContent";

const AppModal = ({ children, id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div onClick={handleOpen}>{children}</div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <ModalContent id={id} />
      </Modal>
    </div>
  );
};

export default AppModal;
