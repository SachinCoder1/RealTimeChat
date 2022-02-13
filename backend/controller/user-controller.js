import chatUser from "../model/UserSchema.js";

export const createUser = async (req, res) => {
    try {
        let exists = await chatUser.findOne({ googleId: req.body.googleId })
        if (exists) {
            res.status(200).json('user already exist')
            console.log('user already exist')
            return;
        }
            const user = await new chatUser(req.body)
            user.save()
            res.status(200).json('user created successfully')
            console.log('user created successfully')
        

    } catch (error) {
        res.status(500).json(error)
        console.log('you are in catch of createuser', error)
    }
}


export const getUsers = async (req, res) => {
    try {
        let response = await chatUser.find({})
        res.status(200).json(response)

    } catch (error) {
        res.status(500).json('there is error in getUsers', error)
    }
}