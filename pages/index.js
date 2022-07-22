import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const [menu, setmenu] = useState(false);
  return (
    <div className=''>
      <Head>
        <title>Fiber</title>
        <meta name="description" content="fiber web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gray-50'>
      <div className='max-w-screen-lg items-center mx-auto p-7'>
      <div className='flex justify-between items-center '>
      <div className='flex items-center'>
        <h3 className='font-bold'>Fiber</h3>
        
      </div>
      <div className='hidden justify-between space-x-4 items-center md:flex'>
        <p className='font-light cursor-pointer'>Community</p>
        <p className='font-light cursor-pointer'>Pricing</p>
        <p className='font-light cursor-pointer'>Features</p>
      </div>
      <div className=' md:flex justify-between items-center'>
      <div className='hidden md:flex justify-between items-center space-x-4 ' >
        <h3 className='font-bold cursor-pointer'>Sign In</h3>
        <button className='border-none bg-violet-800 text-white pl-4 pr-4 pt-2 pb-2 text-center rounded-md font-medium'>Sign Up</button>
      </div>
      <motion.div whileTap={{scale: 0.9 }} className='md:w-0 md:overflow-hidden' onClick={() => setmenu(!menu)}>
      <svg className=' cursor-pointer ' width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 4H0V0H24V4ZM24 8H0V12H24V8ZM24 16H0V20H24V16Z" fill="black"/>
</svg>

      </motion.div>
      </div>
      
    </div>
    {menu && <motion.div   animate={{
    x: -9,
    y: 0,
    scale: 1,
    rotate: 0,
  }} transition={{ type: "spring", stiffness: 90, dampness: 25 }} className='w-72 absolute top-0 right-0 bg-slate-100 text-right pt-6 pb-20 pr-4 z-10 h-full md:hidden'>
    <motion.div className='float-right' whileTap={{scale: 0.9 }} onClick={() => setmenu(!menu)}>
      <svg className=' cursor-pointer ' width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 4H0V0H24V4ZM24 8H0V12H24V8ZM24 16H0V20H24V16Z" fill="black"/>
</svg>

      </motion.div>
        <motion.p  className='font-light pt-10 cursor-pointer'>Community</motion.p>
        <motion.p className='font-light pt-3 cursor-pointer'>Pricing</motion.p>
        <motion.p className='font-light pt-3 cursor-pointer'>Features</motion.p>
        <motion.div className='pt-10' >
        <h3 className='font-bold cursor-pointer'>Sign In</h3>
        <button className='border-none bg-violet-800 text-white pl-4 pr-4 pt-2 pb-2 text-center rounded-md font-medium mt-3'>Sign Up</button>
      </motion.div>
    </motion.div>}
    
    <div className='md:mt-28 flex items-center '>
      <div className='md:flex flex-row-reverse items-center w-full'>
        <div className='w-full'>
        <Image src="/Assets/hero-illustration.png" alt="jh" width='100%' height='100%' layout='responsive' />
        </div>
        <div>
        <div className='hidden md:flex space-x-3 items-center'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
    </svg>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
    </svg>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
    </svg>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
    </svg>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0.440247L11.751 6.11625L18 6.9795L13.452 11.3505L14.562 17.5597L9 14.5845L3.43725 17.5597L4.548 11.3505L0 6.9795L6.249 6.11625L9 0.440247Z" fill="#FF9529"/>
    </svg>
    <p>Rated 4.8/5 (243 reviews)</p>
      </div>
      <div>
        <h1 className='text-4xl font-bold pt-3 '>Create your portfolio in minutes.</h1>
        <p className='font-light pt-2'>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</p>
      </div>
      <div className='pt-4 md:space-x-5 flex flex-col justify-center items-center md:flex-row md:justify-start'>
        <button className='border-none bg-violet-800 text-white pt-4 pb-4 text-center rounded-md font-bold w-full md:w-44 md:pb-2 md:pt-2'>Start Free Trial</button>
        <a href="#" className='text-violet-800 underline font-bold pt-4 md:pt-0'> View Examples</a>
      </div>
      <div className='pt-6 flex md:items-center md:space-x-2 flex-col md:flex-row'>
        <div className='flex items-center space-x-2'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z" fill="#45B19E"/>
      </svg>
      <p className='font-light text-sm'>No Credit Card Required</p>
        </div>
      <div className='flex items-center space-x-2 pt-6 md:pt-0'>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z" fill="#45B19E"/>
      </svg>
      <p className='font-light text-sm '>10 Free Templates</p>
      </div>
      </div>
          </div>

      </div>
      </div>
    
   
    </div>
      </div>
      
    <div className='mt-20 max-w-screen-lg items-center mx-auto p-7'>
      <div className='max-w-sm'>
      <p className='text-violet-800 font-semibold'>Why Fiber?</p>
      <h1 className='font-bold text-4xl pt-3'>A good portfolio means good employability.</h1>
      </div>
      <div className='pt-10 flex md:items-center md:justify-between flex-col md:flex-row'>
        <div>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6666 20L20.52 13.3333H19.505L18.3333 20C17.34 20.5783 16.6666 21.64 16.6666 22.8717C16.6666 24.7117 18.16 26.205 20 26.205C21.84 26.205 23.3333 24.7117 23.3333 22.8717C23.3333 21.64 22.66 20.5783 21.6666 20ZM20 6.66667C10.7966 6.66667 3.33331 14.1283 3.33331 23.3333C3.33331 32.5383 10.7966 40 20 40C29.2033 40 36.6666 32.5383 36.6666 23.3333C36.6666 14.1283 29.2033 6.66667 20 6.66667ZM20 36.6667C12.6483 36.6667 6.66665 30.685 6.66665 23.3333C6.66665 15.9817 12.6483 10 20 10C27.3516 10 33.3333 15.9817 33.3333 23.3333C33.3333 30.685 27.3516 36.6667 20 36.6667ZM16.6666 3.635V0H23.3333V3.635C20.9366 3.23 19.0133 3.23833 16.6666 3.635ZM31.965 7.345L34.31 5L36.6666 7.35667L34.465 9.55833C33.695 8.75167 32.8583 8.015 31.965 7.345ZM10.8333 23.3333C10.8333 23.7933 10.46 24.1667 9.99998 24.1667C9.53998 24.1667 9.16665 23.7933 9.16665 23.3333C9.16665 22.8733 9.53998 22.5 9.99998 22.5C10.46 22.5 10.8333 22.8733 10.8333 23.3333ZM30.8333 23.3333C30.8333 23.7933 30.46 24.1667 30 24.1667C29.54 24.1667 29.1666 23.7933 29.1666 23.3333C29.1666 22.8733 29.54 22.5 30 22.5C30.46 22.5 30.8333 22.8733 30.8333 23.3333ZM20.8333 33.3333C20.8333 33.7933 20.46 34.1667 20 34.1667C19.54 34.1667 19.1666 33.7933 19.1666 33.3333C19.1666 32.8733 19.54 32.5 20 32.5C20.46 32.5 20.8333 32.8733 20.8333 33.3333ZM14.1666 30C14.1666 30.46 13.7933 30.8333 13.3333 30.8333C12.8733 30.8333 12.5 30.46 12.5 30C12.5 29.54 12.8733 29.1667 13.3333 29.1667C13.7933 29.1667 14.1666 29.54 14.1666 30ZM27.5 30C27.5 30.46 27.1266 30.8333 26.6666 30.8333C26.2066 30.8333 25.8333 30.46 25.8333 30C25.8333 29.54 26.2066 29.1667 26.6666 29.1667C27.1266 29.1667 27.5 29.54 27.5 30ZM14.1666 15C14.1666 15.46 13.7933 15.8333 13.3333 15.8333C12.8733 15.8333 12.5 15.46 12.5 15C12.5 14.54 12.8733 14.1667 13.3333 14.1667C13.7933 14.1667 14.1666 14.54 14.1666 15ZM27.5 15C27.5 15.46 27.1266 15.8333 26.6666 15.8333C26.2066 15.8333 25.8333 15.46 25.8333 15C25.8333 14.54 26.2066 14.1667 26.6666 14.1667C27.1266 14.1667 27.5 14.54 27.5 15Z" fill="#4D13D1"/>
        </svg>

          <p className='font-semibold pt-3'>Build in minutes</p>
          <p className='font-light pt-3'>With a selection of premade templates, you can build out a portfolio in less than 10 minutes.</p>
        </div>
        <div className='pt-10'>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.6667 0H8.33333C3.73167 0 0 3.73167 0 8.33333V31.6667C0 36.2683 3.73167 40 8.33333 40H31.6667C36.27 40 40 36.2683 40 31.6667V8.33333C40 3.73167 36.27 0 31.6667 0ZM18.3333 16.9983L12.2667 20L18.3333 22.9933V26.6667L8.33333 21.775V18.2233L18.3333 13.3333V16.9983ZM31.6667 21.775L21.6667 26.6667V22.9933L27.7333 20L21.6667 16.9983V13.3333L31.6667 18.225V21.775Z" fill="#4D13D1"/>
        </svg>

          <p className='font-semibold pt-3'>Add custom CSS</p>
          <p className='font-light pt-3'>Customize your personal even more with the ability to add your own custom CSS styles</p>
        </div>
        <div className='pt-10'>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M22.605 40H3.33333C1.49333 40 0 38.5067 0 36.6667V3.33333C0 1.49333 1.49333 0 3.33333 0H26.6667C28.5067 0 30 1.49333 30 3.33333V10H26.6667V5H3.33333V33.3333H21.6667V37.5C21.6667 38.3733 21.97 39.4583 22.605 40ZM37.5 11.6667C38.88 11.6667 40 12.7867 40 14.1667V37.5C40 38.8767 38.8817 40 37.5 40H25.8333C24.4517 40 23.3333 38.875 23.3333 37.5V14.1667C23.3333 12.7883 24.455 11.6667 25.8333 11.6667H37.5ZM15 35C15.92 35 16.6667 35.7467 16.6667 36.6667C16.6667 37.5867 15.92 38.3333 15 38.3333C14.08 38.3333 13.3333 37.5867 13.3333 36.6667C13.3333 35.7467 14.08 35 15 35ZM31.6667 38.3333C30.745 38.3333 30 37.5867 30 36.6667C30 35.7467 30.745 35 31.6667 35C32.5867 35 33.3317 35.7467 33.3317 36.6667C33.3317 37.5867 32.5867 38.3333 31.6667 38.3333ZM38.3333 33.3333V16.6267H25V33.3333H38.3333ZM32.5 15C32.9583 15 33.3333 14.6267 33.3333 14.1667C33.3333 13.7067 32.9583 13.3333 32.5 13.3333H30.8333C30.3733 13.3333 30 13.7067 30 14.1667C30 14.6267 30.3733 15 30.8333 15H32.5Z" fill="#4D13D1"/>
</svg>

          <p className='font-semibold pt-3'>Responsive</p>
          <p className='font-light pt-3'>All FIber templates are fully responsive to ensure the experience is seemless across all devices</p>
        </div>
      </div>
    </div>
    <div>
    </div>
    <div className='max-w-screen-lg mx-auto'>
    <div className='bg-violet-800 flex items-center max-w-screen-lg mx-5 rounded-lg pt-10 pr-10 pl-10 justify-between flex-col sm:flex-row'>
      <div className='text-white'>
        <h1 className='text-3xl font-bold'>Diversify your portfolio.</h1>
        <p className='font-light text-md text-left w-52 pt-3'>Create an even more impressive portfolio by creating case studies for your projects. Simply follow our step-by-step guide</p>
        <div>
        <button className='bg-white text-violet-800 font-semibold p-2 rounded-sm mt-4 w-52 md:w-auto'>Start free Trial</button>
        </div>
        
      </div>
      <div className='w-full pt-6 md:pt-0'>
      <Image src="/Assets/page image.png" alt="" width='100%' height='80%' layout='responsive' />
      </div>
      
    </div>
    </div>
    
    <div className='max-w-screen-lg mx-auto p-5'>
    <div className='flex justify-between items-center md:space-x-2 mt-20 flex-col md:flex-row'>
      <div className='border-gray-200 border p-3'>
        <div className='font-semibold text-left '>
          <p className='text-violet-800'>Sarah Andrews</p>
          <p className='font-normal'>$100k in revenue</p>
        </div>
        <p className='font-light text-sm h-28'>Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k</p>
        <div className='w-70 border border-gray-200 text-violet-800 font-semibold text-center p-2'>View Sarah&apos;s Portfolio</div>
      </div>
      <div className='border-gray-200 border p-3 w-full mt-6 md:mt-0'>
        <div className='font-semibold text-left '>
          <p className='text-violet-800'>Mathew Higgins</p>
          <p className='font-normal'>$20k in revenue</p>
        </div>
        <p className='font-light text-sm h-28'>I have been getting A LOT of leads ever since i used Fiber&apos;s premade templated, now i just need to work on my case studies and i&apos;ll be ready to go</p>
        <div className='w-70 border border-gray-200 text-violet-800 font-semibold text-center p-2 flex-nowrap'>View Higgins&apos;s Portfolio</div>
      </div>
      <div className='border-gray-200 border w-full p-3 mt-6 md:mt-0'>
        <div className='font-semibold text-left '>
          <p className='text-violet-800'>Janice Dave</p>
          <p className='font-normal'>$30k in revenue</p>
        </div>
        <p className='font-light text-sm h-28'>I only just started freelancing this year and i have already made more than i evr did in my full-time job. Templates are so amazing</p>
        <div className='w-70 border border-gray-200 text-violet-800 font-semibold text-center p-2'>View Janice&apos;s Portfolio</div>
      </div>
    </div> 
    </div>
    
    <div className='mt-28 bg-slate-300'>
      <div className=' flex justify-between p-10 max-w-screen-lg mx-auto flex-col md:flex-row '>
        <div>
        <div className='w-72'>
        <h1 className='font-bold'>Fiber</h1>
        <p className='text-sm font-thin text-gray-700'>With Fiber, you can setup your own personal portfolio in minutes with dozens of premdae, beautiful templates</p>
        <p className='pt-10 text-sm font-thin text-gray-700'>Made with love in the Netherlands</p>
      </div>
        </div>
      <div className='pt-6'>
        <h1 className='font-bold'>Sitemap</h1>
        <p className='text-sm pt-2 font-thin text-gray-700'>Homepage</p>
        <p className='text-sm pt-2 font-thin text-gray-700'>Pricing</p>
        <p className='text-sm pt-2 font-thin text-gray-700'>Testimonials</p>
        <p className='text-sm pt-2 font-thin text-gray-700'>Features</p>
      </div>
      <div className='pt-6'>
        <h1 className='font-bold'>Resources</h1>
        <p className='text-sm pt-2 font-thin text-gray-700'>Support</p>
        <p className='text-sm pt-2 font-thin text-gray-700'>Contact</p>
        <p className='text-sm pt-2 font-thin text-gray-700'>FAQ</p>
     </div>
     <div className='pt-6'>
        <h1 className='font-bold'>Company</h1>
        <p className='text-sm pt-2 font-thin text-gray-700'>Abort</p>
        <p className='text-sm pt-2 font-thin text-gray-700'>Customers</p>
        <p className='text-sm pt-2 font-thin text-gray-700'>Blog</p>
     </div>
     <div className='pt-6'>
        <h1 className='font-bold'>Portfolios</h1>
        <p className='text-sm pt-2 font-thin text-gray-700'>Sarah Andrews</p>
        <p className='text-sm pt-2 font-thin text-gray-700'>Mathew Higgins</p>
        <p className='text-sm pt-2 font-thin text-gray-700'>Janice Dave</p>
     </div>
      </div>
   
    </div>
    </div>
  )
}
