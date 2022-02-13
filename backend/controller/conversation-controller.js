import Conversation from "../model/ConversationSchema.js";

export const newConversation = async (req, res) => {
    let senderId = req.body.senderId
    let recieverId = req.body.recieverId

    try {
        const exist = await Conversation.findOne({ members: { $all: [recieverId, senderId] } })
        if (exist) {
            res.status(200).json('conversation already created')
            console.log('conversation already created')
            return;
        }
        const conversation = new Conversation({
            members: [senderId, recieverId]
        })
        await conversation.save()
        res.status(200).json('conversation created successfully')

    } catch (error) {
        res.status(500).json('problem in new conversation')
    }
}

// get conversation

export const getConversation = async (request, response) => {
    try {
        const conversation = await Conversation.findOne({ members: { $all: [request.body.sender, request.body.reciever] } });
        response.status(200).json(conversation);
    } catch (error) {
        response.status(500).json(error);
    }

}