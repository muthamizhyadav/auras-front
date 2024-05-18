import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const Home = () => {
  return (
    <div className='font'>
      <Navbar/>
      <div className='xl:pt-[116px] lg:pt-[95px] sm:pt-[86px] pt-[81px]'> 
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
