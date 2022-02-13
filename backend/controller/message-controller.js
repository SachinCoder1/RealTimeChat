import Conversation from "../model/ConversationSchema.js";
import Message from "../model/MessageSchema.js"


export const sendMessage = async (req, res) => {
    try {
        const newMessage = await new Message(req.body)
        newMessage.save()
        await Conversation.findByIdAndUpdate(request.body.conversationId, {  message: request.body.text });

        console.log('message saved successfully')
        res.status(200).json('message saved successfully')

    } catch (error) {
        res.status(500).json(error)
        console.log('you are in catch of message controller')
    }
}


export const getMessage = async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.id })
        res.status(200).json(messages)

    } catch (error) {
        res.status(500).json(error)
        console.log('you are in catch of message controller')
    }
}

