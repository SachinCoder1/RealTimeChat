import React, { useContext } from 'react'
import { AccountContext } from '../../../../context/AccountProvider'
import { BiArrowBack } from 'react-icons/bi';



function ChatProfile() {
    const { account, setAccount } = useContext(AccountContext)
    const {openIt, setopenIt} = useContext(AccountContext)

    return (
        <div className='h-full w-[30%] bg-gray-200 absolute'>
            <div className='bg-[#2de9d0] px-5 h-14 flex items-center'>
              <span onClick={()=> setopenIt(false)} className='cursor-pointer flex items-center'><BiArrowBack className='text-white font-bold text-[20px] cursor-pointer' /> <span className='text-white mx-3 font-bold cursor-pointer'>Profile</span></span>  
            </div>
            <img src={account.imageUrl && account.imageUrl} className='w-[120px] rounded-full place-items-center mx-auto mt-[40px] cursor-pointer' alt="Your image" />
            <div className='bg-white mt-8 px-4 py-2'>
                <h5 className='text-green-700 font-bold text-[17px]'>Your name</h5>
                <p className='text-[20px] text-gray-500'>{account.name}</p>
            </div>
            <p className=' px-2 py-1 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, molestiae.</p>
            <div className='bg-white mt-4 px-4 py-2'>
                <h5 className='text-green-700 font-bold text-[17px]'>Your name</h5>
                <p className='text-[20px] text-gray-500'>Your name</p>
            </div>
        </div>
    )
}

export default ChatProfile
