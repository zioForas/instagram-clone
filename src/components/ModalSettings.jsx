import React from 'react'
import Modal from './Modal'

// menu de opciones


function ModalSettings(props) {
  return (
    <Modal {...props} size="xs">
        <ul className='w-full text-sm'>
            <li>
                <a  className='border-b text-center py-3 block'>
                    Change Password
                </a>
            </li>
            <li>
                <a  className='border-b text-center py-3 block'>
                    NameTag
                </a>
            </li>
            <li>
                <a  className='border-b text-center py-3 block'>
                    Apps and Websites
                </a>
            </li>
            <li>
                <a  className='border-b text-center py-3 block'>
                    Notifications
                </a>
            </li>
            <li>
                <a  className='border-b text-center py-3 block'>
                    Edit Profile
                </a>
            </li>
            <li>
                <a  className='border-b text-center py-3 block'>
                    Report a problem
                </a>
            </li>
            <li>
                <a  className='border-b text-center py-3 block'>
                    Log out
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

export default ModalSettings