import mongoose from 'mongoose'


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    familyName: {
        type: String
    },
    givenName: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
})

const chatUser = mongoose.model("chatUser", userSchema)

export default chatUser