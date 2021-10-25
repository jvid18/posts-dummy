import React from 'react'
import PostComments from '../PostComments/PostComments'
import Modal from '../ui/Modal/Modal'

const ModalPost = ({ match }) => {
  const { id } = match.params

  return (
    <Modal title="Comments">
      <PostComments postId={id} />
    </Modal>
  )
}

export default ModalPost
