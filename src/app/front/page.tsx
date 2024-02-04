"use client"
import { useRouter } from 'next/navigation'
import "../styles/style.css"
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image'
import aboutmeimg from "../img/1680015953150.jpg"
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import React from "react";

export default function Home() {
  let router = useRouter()
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [isFollowed, setIsFollowed] = React.useState(false);
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
          <button className='project'><Link href="/login">
            <p>Check - <strong>PROJECT</strong></p>
          </Link></button>
        </div>

       <div className='quotes'>

       <div>
          <Card className="max-w-[340px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar isBordered radius="full" size="md" style={{height:"40px", width:"40px"}} src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?w=740&t=st=1707028857~exp=1707029457~hmac=070fb9936f765fdd412ffe34a051781d6f662d18899e8385bdc8f696a87a22b3" />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600 text-white">Elon Musk</h4>
                  <h5 className="text-small tracking-tight text-default-400 text-white">@elon_musk</h5>
                </div>
              </div>
              {/* <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200 text-white" : ""}
          color="danger"
          
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button> */}
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400 text-white">
              <p>
              When something is important enough, you do it even if the odds are not in your favor
              </p>
              {/* <span className="pt-2 text-white">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span> */}
            </CardBody>
            {/* <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small text-white">4</p>
          <p className=" text-default-400 text-small text-white">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small text-white">97.1K</p>
          <p className="text-default-400 text-small text-white">Followers</p>
        </div>
      </CardFooter> */}
          </Card>
        </div>

        <div>
          <Card className="max-w-[340px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
"                <Avatar isBordered radius="full" size="md" style={{height:"40px", width:"40px"}} src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?w=740&t=st=1707028857~exp=1707029457~hmac=070fb9936f765fdd412ffe34a051781d6f662d18899e8385bdc8f696a87a22b3" />
"                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600 text-white">Mark Zuckerberg</h4>
                  <h5 className="text-small tracking-tight text-default-400 text-white">@mark_zuckerberg</h5>
                </div>
              </div>
              {/* <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200 text-white" : ""}
          color="danger"
          
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button> */}
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400 text-white">
              <p>
              Figuring out what the next big trend is tells us what we should focus on -
              </p>
              {/* <span className="pt-2 text-white">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span> */}
            </CardBody>
            {/* <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small text-white">4</p>
          <p className=" text-default-400 text-small text-white">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small text-white">97.1K</p>
          <p className="text-default-400 text-small text-white">Followers</p>
        </div>
      </CardFooter> */}
          </Card>
        </div>

        <div>
          <Card className="max-w-[340px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar isBordered radius="full" size="md" style={{height:"40px", width:"40px"}} src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?w=740&t=st=1707028857~exp=1707029457~hmac=070fb9936f765fdd412ffe34a051781d6f662d18899e8385bdc8f696a87a22b3" />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600 text-white">Kent Beck</h4>
                  <h5 className="text-small tracking-tight text-default-400 text-white">@kent_beck</h5>
                </div>
              </div>
              {/* <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200 text-white" : ""}
          color="danger"
          
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button> */}
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400 text-white">
              <p>
              Make it work, make it right, make it fast.
              </p>
              {/* <span className="pt-2 text-white">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span> */}
            </CardBody>
            {/* <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small text-white">4</p>
          <p className=" text-default-400 text-small text-white">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small text-white">97.1K</p>
          <p className="text-default-400 text-small text-white">Followers</p>
        </div>
      </CardFooter> */}
          </Card>
        </div>

        <div>
          <Card className="max-w-[340px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                 <Avatar isBordered radius="full" size="md" style={{height:"40px", width:"40px"}} src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?w=740&t=st=1707028857~exp=1707029457~hmac=070fb9936f765fdd412ffe34a051781d6f662d18899e8385bdc8f696a87a22b3" />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600 text-white">John Johnson</h4>
                  <h5 className="text-small tracking-tight text-default-400 text-white">@john_johnson</h5>
                </div>
              </div>
              {/* <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200 text-white" : ""}
          color="danger"
          
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button> */}
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400 text-white">
              <p>
              First, solve the problem. Then write the code – 
              </p>
              {/* <span className="pt-2 text-white">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span> */}
            </CardBody>
            {/* <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small text-white">4</p>
          <p className=" text-default-400 text-small text-white">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small text-white">97.1K</p>
          <p className="text-default-400 text-small text-white">Followers</p>
        </div>
      </CardFooter> */}
          </Card>
        </div>



       </div>





      </div>



    </>
  )
}
