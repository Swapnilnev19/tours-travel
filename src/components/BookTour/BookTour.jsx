import React, {useState} from 'react'
import '../../assets/css/style.scss'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function BookTour ({data, open, setOpen}) {
   
    console.log("datalist>>>>", data, open, setOpen)
  return (
    <div>
      <Modal isOpen={open} toggle={() => setOpen(false)}>
  <ModalHeader>
    Modal title
  </ModalHeader>
  <ModalBody>
    Modal body text goes here.
  </ModalBody>
</Modal>
      </div>
  )
}

export default BookTour