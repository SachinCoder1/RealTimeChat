import { createContext, useState, useEffect, useRef } from 'react'
import { io } from 'socket.io-client';





export const AccountContext = createContext(null)
const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState()
    const [openIt, setopenIt] = useState(false)
    const [input, setinput] = useState("")
    const [activeUsers, setActiveUsers] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);




    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://https://chatsocket6.herokuapp.com');
    }, [])


    return (
        <AccountContext.Provider value={{
            account, setAccount,
            openIt, setopenIt,
            input, setinput,
            socket,
            activeUsers, setActiveUsers,
            newMessageFlag, setNewMessageFlag
        }}

        >
            {children}
        </AccountContext.Provider>
    )
}


export default AccountProvider