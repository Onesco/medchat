const bcrypt =  require('bcrypt')
const {connect} = require('getstream')
const {StreamChat} = require('stream-chat')
const { randomUUID } = require('crypto')

const STREAM_API_KEY = process.env.STREAM_API_KEY  
const STREAM_ID =  process.env.STREAM_ID 
const STREAM_SECRET = process.env.STREAM_SECRET

// connect to the stream server
const serverClient = connect(STREAM_API_KEY, STREAM_SECRET, STREAM_ID)

const signIn = async(req, res)=>{
    const {username, password} = req.body

    // create new stream chat
   try {
    const streamChat = new StreamChat(STREAM_API_KEY, STREAM_SECRET)

    // get all users that matche the username within the streamchat
    const {users} = await streamChat.queryUsers({name:username})
 
    if(users.length < 1) return res.status(400).json({message:'incorrect user credential or user not registered!'})

    const isCorrectPassword = await bcrypt.compare(password, users[0].hashedPassword) 

    const token =  serverClient.createUserToken(users[0].id)

    if(!isCorrectPassword) return res.status(400).json({message:'incorrect user credential or user not registered!'})

    return res.status(200)
    .json({token, username, fullName:users[0].fullName, userId:users[0].id, hashedPassword:users[0].hashedPassword, phone:users[0].phone})
   } catch (error) {
     
    return res.status(500).json({message:error})   
    
   }
}

const signUp = async(req, res)=>{
    const {
        fullName,
        username,
        password,
        confirmPassword,
        phone,
        avatarURL
    } = req.body

    if(password !== confirmPassword) return res.status(406).json({'message':'confirm password does not match'})

    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const userId = randomUUID() 

        const token =  serverClient.createUserToken(userId)

        return res.status(200).json({token, hashedPassword,fullName, username, phone, avatarURL, userId})
    } 
    catch (error) {
        console.log(error)
        return res.status(500).json({message:error})   
    }
}

module.exports ={
    signIn,
    signUp
}