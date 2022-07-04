import React from 'react'
import {Channel, useChatContext } from 'stream-chat-react';

import {ChannelInner, CreateChannel, EditChannel, TeamMessage} from './'


export default function ChannelContainer({isEditing, setIsEditing, isCreating, setIsCreating, createType}) {
  const {channel} = useChatContext()

  if(isCreating){
    return(
      <div>
        <CreateChannel createType={createType} setIsCreating={setIsCreating}/>
      </div>
    )
  }
  if(isEditing){
    return(
      <div>
        <EditChannel setIsEditing={setIsEditing}/>
      </div>
    )
  }

  const EmptyState = ()=>{
    return(
      <div>
        <p> this is the beginning of your chat</p>
        <p>send messages attarchment, emojis, links and more</p>
      </div>
    )
  }
  return (
    <div>
      <Channel
          EmptyStateIndicator={EmptyState}
          Message={(messageProps,i)=> <TeamMessage key={i} {...messageProps}/>}
        >
        <ChannelInner setIsEditing={setIsEditing}/>
      </Channel>
    </div>
  )
}
