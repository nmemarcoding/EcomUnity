import React from 'react'

export default function StudentSideMenu(props) {
   
    const handleOnClick = (e) => {
        
        props.onClick(e.target.id)
    }
  return (
   
    <div>
        <div className="w-screen h-screen bg-gray-800  pt-6 text-white" id="menu">
            <button className="w-full h-12 hover:bg-green-500 mb-4 flex items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="ml-4"id="user" onClick={handleOnClick}>User</span>
            </button>
            <button className="w-full h-12 hover:bg-green-500 mb-4 flex items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="ml-4"id="courses" onClick={handleOnClick}>Courses</span>
            </button>
            <button className="w-full h-12 hover:bg-green-500 mb-4 flex items-center"  >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="ml-4" id="massage" onClick={handleOnClick}>Massage</span>
            </button>
            <button className="w-full h-12 hover:bg-green-500 mb-4 flex items-center"  >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="ml-4" id="grades" onClick={handleOnClick}>Grades</span>
            </button>
            <button className="w-full h-12 hover:bg-green-500 mb-4 flex items-center"  >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="ml-4" id="tools" onClick={handleOnClick}>Tools</span>
            </button>
            <button className="w-full h-12 hover:bg-green-500 mb-4 flex items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                <span className="ml-4">Sign Out</span>
            </button>


        </div>
    </div>
  )
}
