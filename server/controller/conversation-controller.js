import conversation from "../model/converstaion.js";

export const newConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        const exist = await conversation.findOne({ members: { $all: [receiverId, senderId] } })

        if (exist) {
            return response.status(200).json('conversation already exist')
        }

        const newConversation = new conversation({
            members: [senderId, receiverId]
        })

        await newConversation.save();
        return response.status(200).json('converstaion saved')
    } catch (error) {
        return response.status(500).json(error.message)
    }
}

export const getConversation = async (request, response) => {
    try {

        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        const message = await conversation.findOne({ members: { $all: [receiverId, senderId] } })
        console.log("getting get conversation...", message);
        return response.status(200).json(message)
    } catch (error) {
        return response.status(500).json(error.message)

    }
}
