import conversation from "../model/converstaion.js";
import Message from "../model/message.js"


export const newMessage = async (request, response) => {
    try {
        //save message
        const newMessage = new Message(request.body);
        await newMessage.save()

        //updatinng last message of particular conversation
        await conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text })

        return response.status(200).json('Message has been sent successfully')
    } catch (error) {
        return response.status(500).json(error.message)
    }
}

export const getMessage = async (request, response) => {
    try {
        //get message
        console.log('logging params of url...', request.params);
        const message = await Message.find({ conversationId: request.params.id })
        console.log(message);
        return response.status(200).json(message)
    } catch (error) {
        console.log(error.message);
        return response.status(500).json(error.message)
    }

}