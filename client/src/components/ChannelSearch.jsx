import React,{useContext, useState} from 'react'
import {useChatContext} from 'stream-chat-react'

import { SearchIcon } from '../assets'

const styles = {
  searchItemsWrapper: "flex items-center space-x-2 h-8 border w-full pl-1 rounded-md",
  searchInput : 'bg-transparent text-white placeholder-white outline-none w-32'
}

export default function ChannelSearch() {
  
  let [query, seQuery] = useState('') 
  let [loading, setLoading] = useState(false)  
   
  const setChannel =async(channel)=>{
    try {
      //Todo: fetch channel
    } catch (error) {
      seQuery('')
    }  
  }

  const onQuery = (e)=>{
    e.preventDefault()
    setLoading(true)
    setChannel(query)
    seQuery(e.target.value)
  }

  return (
    <div className='m-3'>
      <div className={styles.searchItemsWrapper}>
        <div>
          <SearchIcon/>
        </div>
        <input 
          className={styles.searchInput}
          type="text"
          placeholder='Search'
          value={query}
          onChange ={(e)=>{onQuery(e)}}
        />
      </div>
    </div>
  )
}
