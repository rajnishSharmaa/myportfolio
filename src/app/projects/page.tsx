"use client"
import React from 'react'
import "../styles/style.css"
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const page = () => {
  return (
 <>
 <div className='projectmain'>

<h1 className='p-ongoing py-4 px-4 font-bold text-white'>Project Ongoing</h1>

 <Card className="py-4">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold text-white">&#x2022; Connected App</p>
     <small className="text-default-500 text-white">This is mobile app based on B2B. where business person can post their required services and sales person can bid on it to do that services. </small>
      <p className=" text-large text-white">React Native Node JS MongoDB</p>
    </CardHeader>
    {/* <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="/img/ongegg.png"
        width={270}
      />
    </CardBody> */}
  </Card>

  <Card className="py-4">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold text-white">&#x2022; Meet App</p>
      <small className="text-default-500 text-white">This is mobile app where meet user can select meetup location and invite to their friends to meet with everyone at one point , their is google map so all friend can reach easily to that location</small>
      <p className="text-large text-white">React Native Node JS MongoDB</p>
    </CardHeader>
    {/* <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="/img/ongegg.png"
        width={270}
      />
    </CardBody> */}
  </Card>

  <Card className="py-4">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold text-white">&#x2022; E-Commerce Website</p>
      <small className="text-default-500 text-white">This is basically e-commerce type website like Myntra </small>
      <p className="text-large text-white">Next JS</p>
    </CardHeader>
    {/* <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="/img/ongegg.png"
        width={270}
      />
    </CardBody> */}
  </Card>
 </div>
 </>
  )
}

export default page