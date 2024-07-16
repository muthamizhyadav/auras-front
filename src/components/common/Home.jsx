import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const Home = () => {
  return (
    <div className='font'>
      <Navbar/>
      <div className='xl:pt-[95px] lg:pt-[95px] sm:pt-[80px] pt-[81px]'> 
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
