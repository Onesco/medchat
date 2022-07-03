import React, {useState} from 'react';
import Cookies from 'universal-cookie';

import axios from 'axios'

// import signinImage from '../assets/signup.jpg'

const cookies =  new Cookies()

const styles = {
    formWrapper:'bg-[rgb(0,95,255)] flex justify-center items-center mx-auto w-full h-screen',
    fieldWrapper: 'flex px-3 my-5 font-semibold items-center border border-black rounded-sm',
    inputField: 'w-36 sm:w-52 md:w-96 h-11 px-3 outline-none'
}
const initialFormState ={
    fullName:'',
    username:"",
    password:'',
    confirmPassword:'',
    phone:"",
    avatarURL:''
}

export default function Auth() {

    const [isSignUp, setIssignUp] = useState(false)
    const [form, setForm] = useState(initialFormState)
    
    const handleChange = (e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }
    const handleSubmit = async (e)=>{
       
        e.preventDefault()
       
        const url = 'http://localhost:7000/'
        const {username, password, avatarURL} = form
        
        const result = await axios.post(isSignUp?url+"signup":url+"login", isSignUp?form:{username, password})
        
        const {token, fullName, userId,  hashedPassword, phone} = result?.data
        
        cookies.set('fullName', fullName)
        cookies.set('username', username)
        cookies.set('token', token)
        cookies.set('avatarURL', avatarURL)
        cookies.set('hashedPassword', hashedPassword)
        cookies.set('phone', phone)
        cookies.set('userId', userId)
        
        window.location.reload()
    }
 
  return (
    <div className={styles.formWrapper}>
        <div className='bg-white rounded-md px-7 py-10'>
            <p className='font-black text-xl mb-5'> {isSignUp? 'Sign Up' : 'Sign In'}</p>
            <form className='flex flex-col' onSubmit={handleSubmit}>
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
                        <label htmlFor='confirmPassword'>Confirm Password:</label>
                        <input 
                            className={styles.inputField}
                            id='confirmPassword'  
                            name='confirmPassword' 
                            type='password'
                            onChange={handleChange}
                            required
                            minLength={8}
                        />
                </div> 
                )}
                
                <div className='mb-2 text-bold'>
                    <button className='bg-[rgb(0,95,255)] text-white py-3 px-2'>{isSignUp? 'Sign Up' : 'Sign In'}</button>
                </div>
                
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
  );
}
