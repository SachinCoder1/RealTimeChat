import React, { useContext } from 'react'
import { UserContext } from '../../../../context/UserProvider'


import { MdMessage } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { AccountContext } from '../../../../context/AccountProvider';

function Header() {
    const { person, setPerson } = useContext(UserContext)
    const { activeUsers } = useContext(AccountContext);


    return (
        <div className='bg-gray-200 flex justify-between items-center px-5 py-2'>
            <div className='flex items-center'>
                <div>
                    <img src={person.imageUrl && person.imageUrl} alt="image" className='w-[40px] object-cover rounded-full' />
                </div>
                <div>
                    <p className='font-bold text-[17px] text-gray-900 px-3'>{person.name}</p>
                    <p className='text-gray-400 text-[13px] px-3'>

                        {activeUsers?.find(user => user.userId === person.googleId) ? 'Online' : 'Offline'}

                    </p>
                </div>
            </div>
            <div className='flex flex-row-reverse'>
                <MdMessage className='cursor-pointer text-gray-600 text-[20px] mx-5' /> <BiSearch className='cursor-pointer text-gray-600 text-[20px]' />
            </div>
        </div>
    )
}

export default Header
