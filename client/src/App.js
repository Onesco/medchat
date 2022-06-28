import React from 'react'
import {StreamChat} from 'stream-chat'
import { Chat} from 'stream-chat-react';
// import cookie from 'universal-cookie'

import './index.css'

import {ChannelContainer, ChannelListContainer, Auth} from './components'

const apiKey =  process.env.REACT_APP_API_KEY
const chatClient = new StreamChat(apiKey);

let authToken = false

// const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicHVycGxlLXNreS0wIn0.fX2_F1Y4IEC-fm5-oym1HdqEkftjPqcrIIMlemfOeCM';

// chatClient.connectUser(
//   {
//     id: 'purple-sky-0',
//     name: 'purple-sky-0',
//     image: 'https://getstream.io/random_png/?id=purple-sky-0&name=purple-sky-0',
//   },
//   userToken,
// );


export default function App() {

  if(!authToken) return <Auth/>
   
  return (
    <div className='flex flex-1'>
        <Chat client={chatClient} >
            <ChannelListContainer/>
            <ChannelContainer/>
        </Chat>
    </div>
  )
}
