import React, { useContext } from 'react'
import { AccountContext } from '../../../../context/AccountProvider'

function MessageBody({message}) {
    const {account} = useContext(AccountContext)
    // to make parts account.googleId === message.sender ? right : left
    const toDate = (date)=>{
        return date < 10 ? '0'+ date: date
    }
    return (
        <div className='mb-2'>
            <div className={`${account.googleId === message.sender ? "ml-auto" : 'mr-auto'} px-3 rounded mr-[30px] flex justify-between w-fit max-w-[35%] ${account.googleId === message.sender? 'bg-[#dcf8c6]': 'bg-[#fff]'} text-[15px]`}>
                <p className=''>{message.text}</p>
                <span className='px-3 text-gray-500 text-[12px]'>{toDate(new Date(message.createdAt).getHours())}:{toDate(new Date(message.createdAt).getMinutes())}</span>
            </div>
        </div>
    )
}

export default MessageBody
