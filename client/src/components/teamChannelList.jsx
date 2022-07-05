import React from 'react'

import { AddChannel } from '../assets'

export default function TeamChannelList({children, error=false, loading, type}) {
  
  if(error){
    return type === 'team'?(
      <div>
        <p>Connection error please wait a moment and try again</p>
      </div>
    ):null
  }
  if(loading){
    return (
      <div>
        <p>
          {type === 'team' ? 'Channels': "Messages"} loading ...
        </p>
      </div>
    )
  }
  return (
    <div>
      <p>
        {type === 'team' ? 'Channels': "Direct Messages"}
      </p>
      {/* {Button - add channels} */}
      {children}
    </div>
  )
}
