import React,{useState} from 'react'
import {StreamChat} from 'stream-chat'
import { Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie'


import 'stream-chat-react/dist/css/index.css';
import './index.css'


import {ChannelContainer, ChannelListContainer, Auth} from './components'

const apiKey =  process.env.REACT_APP_API_KEY
const chatClient = new StreamChat(apiKey);

const cookies  = new Cookies()
let authToken = cookies.get('token')

const fullName = cookies.get('fullName')
const username = cookies.get('username')
const hashedPassword = cookies.get('hashedPassword')
const userId = cookies.get('userId')
const avatarURL = cookies.get('avatarURL')
const phone = cookies.get('phone')

if(authToken){
  chatClient.connectUser(
    {
      id: userId,
      name: username,
      image: avatarURL,
       fullName,
       hashedPassword,
      phone 
    },
    authToken
  );
}

export default function App() {

  const [createType, setCreateType]  = useState('')
  const [isEditing, setIsEditing]  = useState(false)
  const [isCreating, setIsCreating]  = useState(false)

  if(!authToken) return <Auth/>
   
  return (
    <div className='flex'>
        <Chat client={chatClient}>
         <div className='flex'>
          <ChannelListContainer
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType}
              setIsEditing={setIsEditing}
            />
         </div>
          <ChannelContainer
              isEditing={isEditing}
              setIsEditing={setIsEditing} 
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              createType={createType}
          />
        </Chat>
    </div>
  )
}
