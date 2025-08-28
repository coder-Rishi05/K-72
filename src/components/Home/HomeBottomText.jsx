import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex text-[6.5vw]  items-end justify-center gap-8 text-white  font-[font2]' >
      <Link className=' border-5 hover:text-[#D3FD50] hover:border-[#D3FD50] leading-[6vw] pt-2 px-8 border-white rounded-full  uppercase  ' to="/projects" >Work</Link>
      <Link className=' border-5 hover:text-[#D3FD50] hover:border-[#D3FD50] leading-[6vw] pt-2 px-8 border-white rounded-full  uppercase  ' to="/agency" >Agency</Link>
    </div>
  )
}

export default HomeBottomText;