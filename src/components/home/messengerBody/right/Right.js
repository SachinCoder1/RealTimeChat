import React, { useContext, useEffect, useState } from 'react'
import { getConversation } from '../../../../apis/api'
import { UserContext } from '../../../../context/UserProvider'
import { AccountContext } from '../../../../context/AccountProvider'
import Header from './Header'
import MessageBody from './Messages'
import FirstApperance from './FirstApperance'

function Right() {
    const { person } = useContext(UserContext)
    const { account } = useContext(AccountContext)
    const [conversation, setconversation] = useState({})
    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ sender: account.googleId, reciever: person.googleId })
            setconversation(data)
            // console.log(data)
        }
        getConversationDetails()

    }, [person.googleId])
    return (
        <div>
            {
          Object.keys(person).length ? <> <Header /> <MessageBody conversation={conversation}/> </>: <FirstApperance /> }  
          
        </div>
    )
}

export default Right
