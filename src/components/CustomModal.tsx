// src/components/CustomModal.tsx
import { useState, MouseEvent } from 'react';
import { Button, Modal, Fade, Box } from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  height: 'auto',
  maxHeight: '80vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  overflowY: 'auto',
};

interface CustomModalProps {
  children: React.ReactNode;
}

function CustomModal({ children }: CustomModalProps) {
  const [open, setOpen] = useState(false);
  const transitionTime = 600;

  const handleOpen = () => {
    console.log('Opening modal');
    setOpen(true);
  };

  const handleClose = () => {
    console.log('Closing modal');
    setOpen(false);
  };

  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    // Prevent clicks on the modal content from closing
    event.stopPropagation();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen} sx={{ mt: 2 }}>
        {open ? 'Close Modal' : 'Open Modal'}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slotProps={{
          backdrop: {
            onClick: (event: MouseEvent) => {
              console.log('Backdrop clicked');
              handleClose();
            },
          },
        }}
      >
        <Fade in={open} timeout={transitionTime}>
          <Box sx={modalStyle} onClick={handleContentClick}>
            {children}
          </Box>
        </Fade>
      </Modal>
    </>
  );

  /**
   * Alternative animations
   *
   * Fade: Fades the modal content from transparent
   *    to opaque, and vice versa.
   *  <Fade in={open} timeout={transitionTime}>
   *      <Box sx={modalStyle} onClick={handleContentClick}>{children}</Box>
   *  </Fade>
   *
   * Slide: Slides the modal content in/out from
   *    a specified direction (e.g. up, down, left, right)
   *  <Slide direction="up" in={open} timeout={transitionTime}>
   *      <Box sx={modalStyle} onClick={handleContentClick}>{children}</Box>
   *  </Slide>
   *
   * Grow: Scales the modal content from a smaller size
   *    to full size, with a slight fade.
   *  <Grow in={open} timeout={transitionTime}>
   *      <Box sx={modalStyle} onClick={handleContentClick}>{children}</Box>
   *  </Grow>
   *
   * Zoom: Zooms the modal content in/out from a tiny point
   *    to full size, with a fade.
   *  <Zoom in={open} timeout={transitionTime}>
   *      <Box sx={modalStyle} onClick={handleContentClick}>{children}</Box>
   *  </Zoom>
   */
}

export default CustomModal;