import React from 'react'
import './Modal.scss'

export const Modal = ({ closeModal }) => (
  <>
    <div className='ModalBackdrop' onClick={closeModal} />
    <div className='Modal' onClick={(e) => e.stopPropagation()}>
      this modal uses createPortal api. backdrop click also closes the modal.
      <button className='Button' onClick={closeModal}>cool!</button>
    </div>
  </>
)