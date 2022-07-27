import React from 'react'
import Image from 'next/image'
import '../styles/Home.module.css'
import { useState } from 'react'

const signIn = () => {
    const [passwordType, setpasswordType] = useState('password');
    const pass = () => {
        passwordType === 'password' ? setpasswordType('text') : setpasswordType('password')
    }
    return <div className='h-full'>
        <div className='p-10 w-full lg:w-1/2 float-left'>
            <div >
                <h1 className='font-bold text-left'>FIber</h1>
            </div>
            <div className='mt-8'>
                <h1 className='font-bold text-4xl'>Create your Fiber account</h1>
                <form action="" className='mt-6'>
                    <label htmlFor="" className='mt-4'>
                        <p className='font-bold'>Your Name</p>
                        <input type="text" placeholder='John Doe' className='border w-full mt-4 p-4 border-gray-200 outline-none' />
                    </label>
                    <label htmlFor="" className='mt-4'>
                        <p className='font-bold mt-4'>E-mail</p>
                        <input type="email" placeholder='john@example.com'  className='border w-full mt-4 p-4 border-gray-200 outline-none' />
                    </label>
                    <label>
                        <p className='font-bold mt-4'>Password</p>
                        <div className='relative'>
                        <input type={passwordType} placeholder='At least 8 characters' className='border w-full mt-4 p-4 border-gray-200 outline-none'/>
                        <svg width="24" height="24" className='absolute top-8 right-2 cursor-pointer' onClick={pass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9C13.654 9 15 10.346 15 12ZM24 11.551C24 11.551 19.748 20 12.015 20C4.835 20 0 11.551 0 11.551C0 11.551 4.446 4 12.015 4C19.709 4 24 11.551 24 11.551ZM17 12C17 9.243 14.757 7 12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12Z" fill="#A9A9A9"/>
                    </svg>
                        </div>
                    </label>
                    <label htmlFor="" className='flex items-baseline space-x-3 pt-4'>
                        <input type="checkbox"  />
                        <p className='text-md font-light'>By creating an account on Fiber, you agree to the <a href="#" className='text-violet-900 underline'>Terms and Conditions</a></p>
                    </label>
                    <button type='submit' className='mt-7 w-full p-4 bg-violet-900 rounded-lg text-white font-bold'>Create Fiber Account</button>
                </form>
                <div className='text-center mt-4'>
                    <p>Already have an account? <a href="#" className='text-violet-900'>Sign in</a></p>
                </div>
            </div>
        </div>
        <div className='absolute right-0 h-full top-0 bg-violet-900 hidden lg:block w-1/2 p-10'>
            <div className='mt-14'>
            <Image layout='responsive' width={300} height='200' src='/Assets/Sign Up Image.png' />
            </div>
            <div className={`text-white text-center overflow-y-hidden`}>
                <h1 className='text-4xl font-bold mt-4'>Unparallel Templates</h1>
                <p className='text-xl font-semibold mt-4'>Crafted by a team of professional designers, our templates are unparalleled in the market.</p>
            </div>
        </div>
    </div>
}

export default signIn