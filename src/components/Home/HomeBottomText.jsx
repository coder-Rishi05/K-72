import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex text-[6.5vw] items-end justify-center gap-8 text-white  font-[font2]' >
      <Link className=' border-5 leading-[6vw] pt-2 px-8 border-white rounded-full  uppercase  ' to="" >Work</Link>
      <Link className=' border-5 leading-[6vw] pt-2 px-8 border-white rounded-full  uppercase  ' to="" >Agency</Link>
    </div>
  )
}

export default HomeBottomText;