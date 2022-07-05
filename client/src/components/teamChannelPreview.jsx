import React from 'react'
import {Avatar, useChatContext} from 'stream-chat-react'




export default function TeamChannelPreview({channel, type}) {

  const {channel:activateChanel, client} = useChatContext()

  const ChannelPreview =()=>(
    <p>
      {channel?.data?.name || channel?.data.id}
    </p>

  )

  const DirectPreview =()=>{
    const memebrs = Object.values(channel?.state?.members).filter(({user}) => user.id !== client.userID)

    return (
      <div>
        <Avatar
          image={memebrs[0]?.user?.image}
          name={memebrs[0]?.user?.fullName}
          size={24}
        />
        <p>
          {memebrs[0]?.user?.fullName}
        </p>
      </div>
    )
  }


  return (
    <div
      className={
        channel?.id === activateChanel?.id
        ? "active preview channel"
        : 'preview channel'
      }
      onClick ={()=>{console.log(activateChanel?.id)}}
    >
      {type === 'team'? <ChannelPreview/> : <DirectPreview/> }
    </div>
  )
}
