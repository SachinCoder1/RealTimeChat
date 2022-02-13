import React, { useContext, useState } from 'react'
import { AccountContext } from '../../../../context/AccountProvider'

import { MdMessage } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Sidebar from './Sidebar';
import HorizontalSidebar from './HorizontalSidebar';
import ChatProfile from './ChatProfile';





function Profile() {
    const { account, setAccount } = useContext(AccountContext)
    const { openIt, setopenIt } = useContext(AccountContext)
    const [isOpen, setisOpen] = useState(false)
    const [isOpenHorizontal, setisOpenHorizontal] = useState(false)
 

    return (
        <>
            {openIt && <ChatProfile />}
            <div className='px-3 py-2 bg-gray-200 flex items-center justify-between'>
                <img src={account && account.imageUrl} className='w-[40px] rounded-full cursor-pointer' alt="Your image" onClick={() => setisOpen(prev => !prev)} />
                {isOpen && <Sidebar setisOpen={setisOpen} />}
                <div className='flex items-center' onClick={() => setisOpen(false)}>
                    <MdMessage className='text-[30px] text-gray-400 mx-2 cursor-pointer' />
                    <BsThreeDotsVertical onClick={() => setisOpenHorizontal(prev => !prev)} className='text-[30px] text-gray-400 mx-2 cursor-pointer' />
                    {isOpenHorizontal && <HorizontalSidebar setisOpenHorizontal={setisOpenHorizontal} />}
                </div>
            </div>
        </>
    )
}

export default Profile
