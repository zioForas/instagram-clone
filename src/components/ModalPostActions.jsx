import React from 'react'
import Modal from './Modal'

// Funciones de modal


function ModalPostActions(props) {
  return (
    <Modal {...props} size="xs">
        <ul className='w-full text-sm'>
            <li>
                <a href="" className='border-b text-center text-red-600 py-3 block'>
                    Report
                </a>
            </li>
            <li>
                <a href="" className='border-b text-center text-red-600 py-3 block'>
                    Unfollow
                </a>
            </li>
            <li>
                <a href="" className='border-b text-center py-3 block'>
                        Go to Post
                </a>
            </li>
           
            <li>
                <a 
                onClick={() => props.setOpen(false)}
                className='border-b text-center py-3 block cursor-pointer'>
                    Cancel
                </a>
            </li>
        </ul>
    </Modal>
  )
}

export default ModalPostActions