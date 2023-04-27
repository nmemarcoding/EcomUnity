import {useState}from 'react'
import StudentCourseSideMenu from '../../components/StudentCourseSideMenu/StudentCourseSideMenu'

export default function CoursePage() {
    const [navbarMenu,setNavbarMenu] = useState(false)
    const showMenu = () => {
        if(navbarMenu){
            setNavbarMenu(false)
        }
        else{
            setNavbarMenu(true)
        }
        
    }
  return (
    <div className="w-screen h-screen">
        {/* navbar shows on medum and smaler device size */}
        <div className="w-screen h-16 bg-gray-800 flex items-center justify-between md:hidden text-white" onClick={showMenu} >
            <button className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="ml-4">Menu</span>
            </button>
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10h.01M15 10h.01M9 16h.01M15 16h.01" />
                </svg>
            </div>
        </div>
        {/* if navnarMenu is ture show StudentsideMenue on top of everything  */}
        {navbarMenu && <StudentCourseSideMenu />}

        <dive className="w-screen h-screen flex">
                
            {/* left contaner with 1/6 width and 100% height */} 
            <div className="h-full w-1/6 hidden md:block overflow-y-auto overflow-x-hidden ">
            <StudentCourseSideMenu />
            </div>
            {/* right container with 5/6 width and 100% height */}
            <div className="w-screen md:w-5/6 h-full bg-gray-300">
                
            </div>
            
        </dive>
    </div>
  )
}
