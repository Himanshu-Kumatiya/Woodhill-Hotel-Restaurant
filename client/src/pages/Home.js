import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "flowbite-react"
import Roomdisplay from '../components/Roomdisplay'
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import Review from '../components/Review'
import { HiArrowSmRight } from 'react-icons/hi'
const Home = () => {

  return (
    <div className='mt-[10vh] flex flex-col justify-center items-center  '>
      <section className='flex px-4 items-center gap-6 container m-10 mx-auto'>
        <div className='py-10 h-full'>
          <h1 className=' text-[rgb(189,186,186)] font-bold text-[20px] md:text-[30px] lg:text-[45px] mb-6'>Explore Our Exquisite Hotel & Restaurant</h1>
          <p className='text-sky-400  text-[20px] mb-12 max-w-lg'>
            Your cozy haven nestled in the heart of Nainital.
          </p>
          <a href="#rooms"><Button gradientDuoTone="greenToBlue" ><span className='text-[18px]'>Explore </span><HiArrowSmRight></HiArrowSmRight></Button></a>

          <div className='flex  text-[22px] justify-between mt-14 font-bold pl-4 py-4 pr-10'>
            <div className='flex flex-col items-center p-2   bg-slate-800 rounded-[15px] justify-center'>
              <p className='text-center text-[rgb(220,169,93)]'>Basic Room</p>
              <h1 className='text-[20px] text-[rgb(220,169,93)]'>5</h1>
            </div>
            <div className='flex flex-col items-center p-2 text-[rgb(220,169,93)] bg-slate-800  rounded-[15px] justify-center'>
              <p className=' text-center text-[rgb(220,169,93)]'>AC Room </p>
              <h1 className='text-[20px] text-[rgb(220,169,93)]'>3</h1>
            </div>

            <div className='flex flex-col items-center text-[rgb(220,169,93)] bg-slate-800  p-2 rounded-[15px] justify-center'>
              <p className='text-center w-[70px] text-[rgb(220,169,93)]'>Hall</p>
              <h1 className='text-[20px] text-[rgb(220,169,93)]'>1</h1>
            </div>
          </div>
        </div>

        <div className='flex flex-row justify-center items-center gap-8 '>
          <div className='flex flex-col gap-8 '>
            <div className='rounded-2xl overflow-hidden '>
              <img
                src={img2}
                alt='hero-1'
                className='w-[300px] h-[220px] hover:scale-105 transition-scale duration-300'
              />
            </div>
            <div className='rounded-2xl overflow-hidden'>
              <img
                src={img3}
                alt='hero-3'
                className='w-[300px] h-[220px] hover:scale-105 transition-scale duration-300'
              />
            </div>
          </div>

          <div className='rounded-2xl overflow-hidden'>
            <img
              src={img1}
              alt='hero-2'
              className='w-[300px] h-[400px] rounded-2xl hover:scale-105 transition-scale duration-300'
            />
          </div>
        </div>
      </section>
      <div id="rooms" className='w-[80vw] mt-[12vh] flex flex-col justify-center items-center'>
        <h1 className='text-[35px] text-sky-500 border-b-4 m-4 border-green-500'>Rooms</h1>
        <Roomdisplay />
      </div>
      <div className='flex flex-col m-16'>
        <div className="flex justify-center text-[30px] border-b-4  border-sky-500 text-green-500 font-bold">
          Our Reviews
        </div>
        <Review />
      </div>


    </div>

  )
}

export default Home
