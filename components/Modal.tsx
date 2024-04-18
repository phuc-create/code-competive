import React from 'react'

type ModalProps = {
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return <div>{children}</div>
}
export default Modal
