import React, {useContext} from 'react'
import { AppContext } from '../_app'

export default function Ordered() {

    const {queryFrom, setQueryFrom, queryTo, setQueryTo, date, setDate, time, setTime, people, setPeople} = useContext(AppContext)

  return (
    <div className=' w-[90vw] mx-auto mt-[50px]'>
        <div className='text-[18px]'>You've just made an order you badass !</div>
        <div><p>From: {queryFrom}</p></div>
        <div><p>To: {queryFrom}</p></div>
        <div><p>For: {people} people</p></div>
    </div>
  )
}