import React from 'react'
import { AiOutlineLink } from 'react-icons/ai';
import { BsEmojiSunglasses } from 'react-icons/bs';
import { IoIosSend } from 'react-icons/io';



function Input({text, settext, sendText, handleClick}) {
    return (
        <div className='bg-gray-200 flex items-center'>
            <div className='text-[25px] flex items-center text-gray-600 gap-2 pl-3'>
                <BsEmojiSunglasses className='cursor-pointer' />
                <AiOutlineLink className='cursor-pointer' />
            </div>
            <div>
                <input value={text} onChange={(e)=> settext(e.target.value)} onKeyPress={(e)=> sendText(e)} placeholder='Enter message...' type="text" name="message" id="message" className='outline-none px-3 py-3 bg-transparent text-gray-700 flex-grow w-[50vw]' />
            </div>
            <div className='text-[25px] flex items-center text-gray-600 gap-2 pl-3'>
                <IoIosSend className='cursor-pointer' onClick={()=> handleClick()}/>
            </div>
        </div>
    )
}

export default Input
