import { response } from "express";
import user from "../model/user.js";

export const addUser = async (request, response) => {

    try {
        let exist = await user.findOne({ sub: request.body.sub })

        if (exist) {
            return response.status(200).json({ msg: ' user alredy exist' })
        }

        const newUser = new user(request.body);
        await newUser.save();
        return response.status(200).json(newUser)
    } catch (error) {
        console.log('erroe whild adding new user', error);
        return response.status(500).json(error)
    }
}

export const getUsers = async (request, response) => {
    try {
        const users = await user.find({})
        return response.status(200).json({ users })
    } catch (error) {
        return response.status(500).json(error.message)
    }
}