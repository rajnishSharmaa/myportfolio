"use client"
import { useRouter } from 'next/navigation'
import "../styles/style.css"
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image'
import aboutmeimg from "../img/1680015953150.jpg"



export default function Home() {
  let router = useRouter()
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className='main'>
        <div className='nav-bar'>
          <div>
            <h1 className='font-bold'>RAJNISH SHARMA</h1>
          </div>

          <div className='menu'>
            {/* <ul className="nav-menu gap-x-6"> */}
            {/* <ul className="hidden md:flex gap-x-6 text-white"> */}
            <ul className={click ? ("nav-menu active") : ("nav-menu")}>
              <li>
                <Link href="/skills">
                  <p >SKILLS</p>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <p >PROJECT</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p >ABOUT US</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p >CONTACT</p>
                </Link>
              </li>

            </ul>
            <div className="hamburger" onClick={handleClick}>

              {click ? (<FaTimes size={20} style={{ color: "#000000" }} />) : (<FaBars size={20} style={{ color: "#000000" }} />)}

            </div>

          </div>

        </div>

        <div className='second'>
          <h1 className='text-white'>Hii, I'm RAJNISH SHARMA</h1>
          <h1 className='sd'><strong>Software Developer</strong></h1>
          <h1 className='desc'>This is my official portfolio website to showcase my all work related to web devlopment and UI design</h1>
          <button className='project'><Link href="/projects">
            <p>Check - <strong>PROJECT</strong></p>
          </Link></button>
        </div>






        <div className='about'>

          <div className='aboutimg'>
            <Image
              src={aboutmeimg}
              width={200}
              height={200}
              alt="Picture of the author"
            /> 
        
          </div>
          <div className='ab'>
            <p className='whoim text-black'>Who I am ?</p>
            <h3 className='aboutme text-black'><b>About Me</b></h3>
            <p className='aboutmedesc text-black'>Myself Rajnish Sharma, I am a software developer in IT industry.
              I have been working in this industry for almost a year now.
              When I was young, I used to wonder how everything runs on the internet,
              and today is the day that what I create is running on the internet.</p>

          </div>
        </div>


      </div>



    </>
  )
}
