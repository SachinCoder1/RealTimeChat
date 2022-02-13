import React, { useContext } from 'react'
import { createConversation } from '../../../../apis/api'
import { AccountContext } from '../../../../context/AccountProvider'
import { UserContext } from '../../../../context/UserProvider'

function PeopleBody({ imageUrl, name, googleId, people }) {
    const { account, setAccount } = useContext(AccountContext)
    const {setPerson} = useContext(UserContext)


    const handleClick = async () => {
        await createConversation({ senderId: account.googleId, recieverId: googleId })
        console.log('You clicked')
        setPerson(people)

    }


    return (
        <div onClick={() => handleClick()} className='flex items-center p-2 cursor-pointer hover:bg-gray-100 mt-1'>
            <img src={imageUrl && imageUrl} className='w-[40px] rounded-full' alt="person img" />
            <div className='text-gray-700 text-[16px] px-2'>
                {name}
            </div>
        </div>
    )
}

export default PeopleBody
