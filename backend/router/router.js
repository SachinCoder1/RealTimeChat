import express from "express";
import { getConversation, newConversation } from "../controller/conversation-controller.js";
import { createUser, getUsers } from "../controller/user-controller.js";
import { sendMessage, getMessage } from "../controller/message-controller.js";

const Router = express.Router()

// users router

//  create

Router.post('/create/user', createUser)

//  read
Router.get('/users', getUsers)

// conversation

Router.post('/create/conversation', newConversation)
Router.post('/conversation/get', getConversation)


// message

Router.post('/create/message', sendMessage)
Router.get('/get/message/:id', getMessage)



export default Router 