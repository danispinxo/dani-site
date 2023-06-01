import React, { useState } from 'react'
import '../pages/styles.scss'
import PropTypes from 'prop-types'
import ModalUnstyled from '@mui/material/Modal'

export default function Modal (props) {
  Modal.propTypes = {
    opened: PropTypes.bool
  }
  
  const [open, setOpen] = useState(props.opened === false)

  const handleClose = () => {
    setOpen(false)
    localStorage.setItem('opened', 1)
  }

  return (
    <div className="covid-modal">
      <ModalUnstyled
        open={open}
        onClose={handleClose}
      >
        <div className="modal-box">
          <p className="covid-modal-title">Covid-19 Response</p>
          <p className="covid-modal-subtitle">Accepting new clients in limited capacity</p>
          <p className="covid-modal-content">
            In response to Covid-19 I have shifted my practice online for the forseeable future.
          </p>
          <p className="covid-modal-content">
            I am currently taking on new clients in a very limited capacity. Please contact me using the form found on the contact page for more information.
          </p>
          <p className="covid-modal-content">
            I am able to meet with you via the following teletherapy options: <br />
            Telephone consultations & sessions<br />
            Video sessions
          </p>
          <div className="btn-holder">
            <button className="close-btn" onClick={handleClose}>Okay</button>
          </div>
        </div>
      </ModalUnstyled>
    </div>
  )
}
