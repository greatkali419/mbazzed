import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import icon2 from '../images/icon2.svg'
import icon1 from '../images/icon.svg'
import patner1 from '../images/patner1.jpg'
import icon3 from '../images/icon-instagram.svg'
import {Link} from "react-router-dom"

export default function Footer() {
  const form = useRef();
  const today = new Date();

  const sendEmail =  (e) => {
    e.preventDefault();

    emailjs.sendForm("service_nyw7zlq", "template_86oy6yv", form.current, "6tWxVNY2RQmIz_txc")
      .then((result) => {
        e.target.reset()
          alert('email submitted')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='subscribe' className='flex-col md:justify-center md:text-center bg-bcolor p-8 w-full'>
       <h2 className='text-black text-2xl md:text-3xl my-4 md:my-8  font-semibold'>
        Never miss an update
      </h2>
      <p className='text-white text-lg md:text-xl my-4 md:my-8 font-semibold'>
        Get updates on our latest marketing deals 
      </p>
      <form
      className='flex-col md:grid md:grid-cols-2 justify-center my-4 gap-4 w-full align-middle md:mx-[20%]'
      ref={form} onSubmit={sendEmail} action="submit">
        <input
          className='bg-white h-12 md:h-16 md:w-[100%] w-full border-none outline-none placeholder:text-gray-400 placeholder:p-2 md:placeholder:p-4 md:placeholder:text-lg text-black'
          type="email"
          name="message"
          id='subscribe'
          placeholder='Enter your email' />
          <button className='h-12 md:h-16 md:p-5 p-3 px-4 my-4 md:my-0 md:ml-10 md:w-[20%] w-full flex justify-center align-middle text-white bg-color border-1 border-white text-lg md:text-xl font-semibold hover:bg-white hover:text-bcolor hover:border-bcolor md:rounded-md items-center'>
            Subscribe
          </button>
          
      </form>
      <section className='flex-col justify-center items-center '>
    <ul
          className='flex-col gap-2 list-none my-8 mx-0 text-lg md:text-xl font-semibold text-center'
          >
             <Link to="/">
      <li className='cursor-pointer text-lg font-semibold text-white my-2 py-1 '>Back to Home</li>
      </Link>
      <Link  to="/about" >
      <li className='cursor-pointer text-lg font-semibold text-white my-2 py-1'>About Us</li>
      </Link>
      <Link  to="/service">
      <li className='cursor-pointer text-lg font-semibold text-white my-2 py-1'>Our Services</li>
      </Link>
      <Link to="/contact">
      <li className='cursor-pointer text-lg font-semibold text-white my-2 py-1'>Contact Us</li>
      </Link>
      <Link  to="/team">
      <li className='cursor-pointer text-lg font-semibold text-white my-2 py-1'>The Team</li>
      </Link>

     </ul> 
          <article className='flex justify-evenly'>
              <img src={icon1} alt="icon1" />
              <img src={icon2} alt="icon2" />
              <a href="https://instagram.com/official_mbazzempire?igshid=ZDdkNTZiNTM=">
                <img src={icon3} alt="icon3" />
              </a>
          </article>
          <div className='flex-col justify-center items-center text-center'>
            <h1  className='text-white text-lg md:text-2xl my-4 md:my-8  font-semibold'>
              In Patnership with 
            </h1>
            <img
            src={patner1}
            alt='patner'
            className='h-[30px] mx-auto' />
          </div>
          <div className='flex justify-center items-center text-center mt-6 text-lg font-semibold'>
            <p className='text-lg'>Copyright &copy; {today.getFullYear()}. All Rights Reserved.</p>
          </div>
      </section>
    </div>
  )
}
