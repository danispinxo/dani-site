import React, { useState } from 'react'
import '../pages/styles.scss'
import ModalUnstyled from '@mui/material/Modal'

export default function Modal (props) {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="submit-modal">
      <ModalUnstyled
        open={open}
        onClose={handleClose}
      >
        <div className="submit-modal-box">
          <p className="submit-modal-title">Form Submitted Successfully!</p>
          <p className="submit-modal-subtitle">Thank you for reaching out.</p>
          <p className="submit-modal-content">
            I will get back to you as soon as I can. You can expect a response from me within 24 - 48 hours.
          </p>
          <p className='submit-modal-content'>* Be sure to check your spam folder for a response.
          </p>
          <div className="btn-holder">
            <button className="close-btn" onClick={handleClose}>Thanks!</button>
          </div>
        </div>
      </ModalUnstyled>
    </div>
  )
}
