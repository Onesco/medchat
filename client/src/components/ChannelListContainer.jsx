import React from 'react'
import { ChannelList, useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import HospitalIcon from '../assets/hospital.png'  
import logoutIcon from '../assets/logout.png' 

import {ChannelSearch, TeamChannelList, TeamChannelPreview} from './'

const style = {
  iconWrapper:'flex flex-col bg-[#005fff] cursor-pointer h-screen',
  iconItem:'w-[40px] rounded-[50px] bg-white flex justify-center items-center m-3 p-2',
  companyHeader:'flex flex-col bg-[#005effbb] h-screen w-48 relative '
}
const cookies  = new Cookies()

const Sidebar = ()=>{

  const handleLogout = ()=>{
    cookies.remove('fullName')
    cookies.remove('username')
    cookies.remove('hashedPassword')
    cookies.remove('userId')
    cookies.remove('avatarURL')
    cookies.remove('phone')
    cookies.remove('token')
    window.location.reload()
  }

  return(
    <div className={style.iconWrapper }>
      <div className={style.iconItem}>
        <img src={HospitalIcon} alt='hospital' width='28'/>
      </div>
      <div className={style.iconItem} onClick={handleLogout}>
        <img src={logoutIcon} alt='hospital' width={28}/>
      </div>
  </div> 
  )
}

const CompanyHeader = ()=>{
  return(
    <div className='m-3 text-white'>
      <p>Medical Chat</p>
    </div>
  )
}

 
export default function ChannelListContainer() {
  return (
    <>
      <Sidebar/> 
      <div className={style.companyHeader}>
        <CompanyHeader/>
        <ChannelSearch/>
          <div className='t'>
              <ChannelList
                filters={{}}
                channelRenderFilterFn={()=>{}}
                List={listProps =>
                  <TeamChannelList 
                    {...listProps}
                    type='team'
                  />
                }
                Preview={ previewProps =>
                  <TeamChannelPreview
                    {...previewProps}
                    type='team'
                  />
                }
              />
            <ChannelList
              filters={{}}
              channelRenderFilterFn={()=>{}}
              List={listProps =>
                <TeamChannelList 
                  {...listProps}
                  type='messaging'
                />
              }
              Preview={ previewProps =>
                <TeamChannelPreview
                  {...previewProps}
                  type='messaging'
                />
              }
            />
          </div>
      </div>
    </>
  )
}
