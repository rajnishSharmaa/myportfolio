"use client"
import { useRouter } from 'next/navigation'
import "../styles/style.css"
import Link from 'next/link'



export default function Home() {
  let router = useRouter()
  return (
    <>
      <div className='main'>
        <div className='nav-bar'>
          <div>
            <h1 className='font-bold'>RAJNISH SHARMA</h1>
          </div>

          <div className='menu'>
            <ul className="hidden md:flex gap-x-6 text-white">
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



      </div>

    </>
  )
}
