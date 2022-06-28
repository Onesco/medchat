import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios'

import signinImage from '../assets/signup.jpg'

const styles = {
    fieldWrapper: 'flex px-3 my-5 font-semibold items-center border border-black rounded-sm',
    inputField: 'w-36 sm:w-52 md:w-96 h-11 px-3 outline-none'
}

export default function Auth() {
    const [isSignUp, setIssignUp] = useState(false)
    
    const handleChange = ()=>{

    }
    // const switchMode = ()=>{
    //     setIssignUp(!isSignUp)
    // }


  return (
    <div className='bg-[rgb(0,95,255)] flex w-full h-screen'>
        {/* <div className='w-full md:order-2 md:w-[50%] mb-5'>
                <img src={signinImage} alt='sign Up' width='100%'/>
        </div> */}
        <div className='flex items-center justify-center mx-auto'>
            <div className='md:order-1 bg-white rounded-md px-7 py-10'>
                <p className='font-black text-xl mb-5'> {isSignUp? 'Sign Up' : 'Sign In'}</p>
                <form className='flex flex-col' onSubmit={()=>{}}>
                    {isSignUp && (
                        <div className={styles.fieldWrapper}>
                            <label htmlFor='fullName'>Full Name:</label>
                            <input 
                                className={styles.inputField}
                                id='fullName'  
                                name='fullName' 
                                type='text'
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}
                    <div className={styles.fieldWrapper}>
                        <label htmlFor='username'>Username:</label>
                        <input 
                            className={styles.inputField}
                            id='username'  
                            name='username' 
                            type='text'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {isSignUp && (
                    <div className={styles.fieldWrapper}>
                        <label htmlFor='phone'>Phone Number:</label>
                        <input 
                            className={styles.inputField}
                            id='phone'  
                            name='phone' 
                            type='text'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    )}
                    {isSignUp && (
                    <div className={styles.fieldWrapper}>
                            <label htmlFor='avatarURL'>Avatar:</label>
                            <input 
                                className={styles.inputField}
                                id='avatarURL'  
                                name='avatarURL' 
                                type='url'
                                onChange={handleChange}
                                required
                            />
                    </div>
                    )}
                    <div className={styles.fieldWrapper}>
                        <label htmlFor='password'>Password:</label>
                        <input 
                            className={styles.inputField}
                            id='password'  
                            name='password' 
                            type='password'
                            onChange={handleChange}
                            minLength={8}
                            required
                        />
                    </div>
                    {isSignUp && (
                    <div className={styles.fieldWrapper}>
                            <label htmlFor='rePassword'>Confirm Password:</label>
                            <input 
                                className={styles.inputField}
                                id='rePassword'  
                                name='rePassword' 
                                type='password'
                                onChange={handleChange}
                                required
                                minLength={8}
                            />
                    </div>
                    )}
                </form>
                <div>
                    <p>
                        {isSignUp ? "Already have an account !" :"Don't have Account ?"}
                        <span 
                            className='cursor-pointer font-bold'
                            onClick={()=>{setIssignUp(previousState=>!previousState)}}
                            >{ isSignUp ? " Click to Sig In" : " Click to Sign Up"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}


{/* 

 */}