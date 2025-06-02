import React from 'react'
import { FaClock, FaFacebookMessenger, FaLocationArrow, FaMap, FaPhone, FaSearchLocation, FaSms } from 'react-icons/fa'
import {assets} from '../assets/assets'
import NewsLetter from '../components/NewsLetter'
const Contact = () => {
  return (
    <div >
        <div className='flex items-end flex-col mx-auto w-60 py-8'>
              <div className='font-semibold text-2xl uppercase text-black'>Contact <span className='text-gray-600'>Us</span></div>
              <span className='w-26 h-0.5 bg-black'></span>        
        </div> 
      <div className="flex justify-around">
        <div className="w-[400px]">
          <img src={assets.contact} className='w-full shadow-2xl rounded-md' />
        </div>
        <div className="flex flex-col gap-3">
          <p className='uppercase text-2xl font-semibold'>Details</p>
          <p>531162 Visakhapatnam <br />Andhra Prdesh, India.</p>
          <p>Mobile: +91 939 020 516 <br />dammukiran4@gmail.com</p>
          <h2 className='text-xl font-semibold pt-3'>Careers at Forever</h2>
          <p>Learn more about our teams and job openings.</p>
          <h4 className='py-4 rounded cursor-pointer bg-black text-white flex items-center justify-center w-60'>Explore Jobs</h4>
        </div>
      </div>
    <div className='flex w-full px-40 py-16 gap-20'>
      <div className=' flex flex-col basis-1/2 p-5 rounded-xl bg-white shadow-2xl'>
          <div className='flex flex-col items-center '>
            <h3 className='text-black font-semibold text-2xl '>Contact GoGadgets</h3>
            <span className='text-gray-500'>We would love to hear from you!</span>
          </div>
          <div>
            <p className='text-gray-700 pt-2'>Name</p>
            <input type="text" placeholder='Your Name' className='w-full p-2 border-gray-400 border rounded outline-black' />
          </div>
          <div>
          <p className='text-gray-700 pt-2'>Email</p>
          <input type="text" placeholder='Your Email' className='w-full p-2 border-gray-400 border rounded outline-black' />

          </div>
          <div className='text-gray-700 pt-2'>
            <p>Message</p>
            <textarea  className='w-full p-2 border-gray-400 border rounded outline-black'></textarea>
          </div>
          <div>
            <button className='my-4 font-semibold py-3 px-6 rounded-lg w-full text-white bg-black cursor-pointer'>Send Message</button>
          </div>
      </div>
      <div  className=' flex flex-col basis-1/2 p-5  rounded-xl bg-white shadow-2xl'>
          <div>
            <h3 className='text-black font-semibold text-2xl '>Contact Information</h3>
          </div>
          <div className='flex p-2' ><FaPhone className=' w-5 h-5 text-black rounded m-3 '/>
            <div>
            <span className='text-lg font-semibold'>Phone</span>
            <p className='text-gray-600'>12345679</p>
            <p className='text-gray-600'>(555) 765-4321 (Customer Service)</p>

            </div>
          </div>
          <div className='flex p-2'><FaFacebookMessenger className=' w-5 h-5 text-black rounded m-3 '/>
            <div>
            <span className='text-lg font-semibold'>Email</span>
            <p className='text-gray-600'>dammukiran4@gmail.com</p>
            <p className='text-gray-600'>info@gogadgets.com</p>
            </div>
          </div>
          <div className='flex p-2'><FaMap className=' w-5 h-5 text-black rounded m-3 '/>
            <div>
            <span className='text-lg font-semibold'>Address</span>
            <p className='text-gray-600'>123 Fresh Avenue Produce City, PC 12345</p>

            </div>
          </div>
          <div className='flex p-2'><FaClock className=' w-5 h-5 text-black rounded m-3 '/>
            <div>
            <span className='text-lg font-semibold'>Store Hours</span>
            <p className='text-gray-600'>Monday - Friday: 7:00 AM - 9:00 PM</p>
            <p className='text-gray-600'>Saturday: 8:00 AM - 8:00 PM</p>
            <p className='text-gray-600'>Sunday: 9:00 AM - 6:00 PM</p>

            </div>
          </div>
          
      </div>
    </div>

    </div>
  )
}

export default Contact
