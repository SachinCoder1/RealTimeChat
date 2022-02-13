import axios from 'axios'
const URL = "https://chatbackend03.herokuapp.com"

export const createUser = async (input) => {
    try {
        return await axios.post(`${URL}/create/user`, input)

    } catch (error) {
        console.log('error in creating user', error)
    }
}
export const getUsers = async () => {
    try {
        let response = await axios.get(`${URL}/users`)
        return response.data

    } catch (error) {
        console.log('error in get user', error)
    }
}

export const createConversation = async (input) => {
    try {
        return await axios.post(`${URL}/create/conversation`, input)

    } catch (error) {
        console.log('error in creating conversation', error)
    }
}
export const getConversation = async (input) => {
    try {
        let response = await axios.post(`${URL}/conversation/get`, input)
        return response.data

    } catch (error) {
        console.log('error in creating user', error)
    }
}

export const newMessage = async (input) => {
    try {
        return await axios.post(`${URL}/create/message`, input)

    } catch (error) {
        console.log('error in creating user', error)
    }
}
export const getMessages = async (id) => {
    try {
        const response = await axios.get(`${URL}/get/message/${id}`)
        return response.data

    } catch (error) {
        console.log('error in creating user', error)
    }
}


