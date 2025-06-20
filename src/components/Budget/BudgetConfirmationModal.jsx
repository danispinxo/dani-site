import { useState } from "react";
import { Modal, Box, Button } from "@mui/material";

// Custom Confirmation Modal Component
const ConfirmationModal = ({
  open,
  onClose,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxWidth: "90vw",
    bgcolor: "background.paper",
    border: "2px solid #008080",
    borderRadius: "1rem",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={() => onClose(false)}
      aria-labelledby="confirmation-modal"
    >
      <Box sx={modalStyle}>
        <h2
          style={{ color: "#008080", marginBottom: "1rem", fontSize: "1.5rem" }}
        >
          {title}
        </h2>
        <p
          style={{ color: "#4a4a4a", marginBottom: "2rem", lineHeight: "1.5" }}
        >
          {message}
        </p>

        <div
          style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}
        >
          <Button
            variant="outlined"
            onClick={() => onClose(false)}
            sx={{
              color: "#4a4a4a",
              borderColor: "#e5e5e5",
              "&:hover": { borderColor: "#008080", backgroundColor: "#f9f9f9" },
            }}
          >
            {cancelText}
          </Button>

          <Button
            variant="contained"
            onClick={() => onClose(true)}
            sx={{
              backgroundColor: "#dc2626",
              "&:hover": { backgroundColor: "#b91c1c" },
            }}
          >
            {confirmText}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

// Custom hook for confirmation dialogs
const useConfirmation = () => {
  const [confirmationState, setConfirmationState] = useState({
    open: false,
    title: "",
    message: "",
    confirmText: "Confirm",
    cancelText: "Cancel",
    resolver: null,
  });

  const showConfirmation = (
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel"
  ) => {
    return new Promise((resolve) => {
      setConfirmationState({
        open: true,
        title,
        message,
        confirmText,
        cancelText,
        resolver: resolve,
      });
    });
  };

  const handleClose = (result) => {
    if (confirmationState.resolver) {
      confirmationState.resolver(result);
    }
    setConfirmationState((prev) => ({ ...prev, open: false, resolver: null }));
  };

  const ConfirmationDialog = () => (
    <ConfirmationModal
      open={confirmationState.open}
      onClose={handleClose}
      title={confirmationState.title}
      message={confirmationState.message}
      confirmText={confirmationState.confirmText}
      cancelText={confirmationState.cancelText}
    />
  );

  return { showConfirmation, ConfirmationDialog };
};

export { useConfirmation, ConfirmationModal };
