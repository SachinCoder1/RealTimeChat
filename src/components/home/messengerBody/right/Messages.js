import React, { useState, useContext, useEffect, useRef } from 'react'
import Input from './Input'
import { AccountContext } from '../../../../context/AccountProvider'
import { getMessages, newMessage } from '../../../../apis/api'
import MessageBody from './MessageBody'
import { io } from 'socket.io-client';




function Messages({ conversation }) {
    const [messages, setmessages] = useState([])
    const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext)
    const [text, settext] = useState("")
    const [incomingMessage, setIncomingMessage] = useState(null);

    const scrollRef = useRef();

    useEffect(() => {
        
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    }, []);


    console.log(text)

    const handleClick = async () => {
        let message = {
            sender: account.googleId,
            conversationId: conversation._id,
            text: text
        }
        await newMessage(message)
        settext("")
        console.log('you clicked new message')


        socket.current.emit('sendMessage', {
            senderId: account.googleId,
            receiverId,
            text: text
        })

        setNewMessageFlag(prev => !prev);

    }

    const sendText = async (e) => {
        if (!text) return;

        // console.log(e.which)


        if (e.which === 13) {
            let message = {
                sender: account.googleId,
                conversationId: conversation._id,
                text: text
            }
            await newMessage(message)
            settext("")
            console.log('you clicked new message')


            socket.current.emit('sendMessage', {
                senderId: account.googleId,
                receiverId,
                text: text
            })
            setNewMessageFlag(prev => !prev);

        }
    }

    useEffect(() => {
        const getAllMessages = async () => {

            let data = await getMessages(conversation._id)
            setmessages(data)
        }
        getAllMessages()
    }, [conversation?._id, handleClick, newMessageFlag])




    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [messages]);

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.sender) && 
            setmessages((prev) => [...prev, incomingMessage]);
        
    }, [incomingMessage, conversation]);


    const receiverId = conversation?.members?.find(member => member !== account.googleId);

    return (
        <>
            <div id='divScroll' className="bg-back-image-url w-[100%] bg-cover bg-center h-[70vh] py-3 px-1 overflow-y-scroll" ref={scrollRef} >
                {
                    messages.map((message) => {
                        return (
                            <MessageBody message={message} />
                        )
                    })

                }
            </div>
                            {/* <div ref={scrollRef}> */}
                            {/* </div> */}
            <Input handleClick={handleClick} text={text} settext={settext} sendText={sendText} />
        </>
    )
}

export default Messages
