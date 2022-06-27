import React from 'react'
import {StreamChat} from 'stream-chat'
import { Chat} from 'stream-chat-react';
// import cookie from 'universal-cookie'

import './index.css'

import {ChannelContainer, ChannelListContainer} from './components'

const apiKey =  process.env.REACT_APP_API_KEY
const client = StreamChat.getInstance(apiKey);

export default function App() {
   
  return (
    <div className='flex flex-1'>
        <Chat client={client} theme= 'team light'>
            <ChannelListContainer/>
            <ChannelContainer/>
        </Chat>
    </div>
  )
}
