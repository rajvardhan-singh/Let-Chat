import express from 'express';
import { addUser, getUsers } from '../controller/user-controller.js';
import { getConversation, newConversation } from '../controller/conversation-controller.js';
import { getMessage, newMessage } from '../controller/message-controller.js';
import { uploadFile, getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const route = express.Router();

route.post('/adduser', addUser)
route.get('/users', getUsers)

route.post('/conversation/add', newConversation)
route.post('/conversation/get', getConversation)

route.post('/message/add', newMessage)
route.get('/message/get/:id', getMessage)


route.post('/file/upload', upload.single("file"), uploadFile)
route.get('/file/:filename', getImage)

export default route;