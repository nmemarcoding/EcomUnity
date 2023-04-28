import React from 'react'

export default function StudentCourseSideMenu(props) {
  
    const handleOnClick = (e) => {
        
       
    }
    const weeks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',];
  return (
   
    <div>
        <div className="w-screen h-screen bg-gray-800  pt-6 text-white overflow-y-auto" id="menu">
            {/* button to show corese title */}
       
            <button className="w-full h-12 hover:bg-green-500 mb-4 flex items-center" onClick={handleOnClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="ml-4 break-words" id="title">Title</span>
            </button>
            {/* announcments btn */}
            <button className="w-full h-12 hover:bg-green-500 mb-4 flex items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" viewBox="0 0 20 20" fill="currentColor">
                    <path  fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                    <path  fillRule="evenodd" d="M13 10a1 1 0 11-2 0 1 1 0 012 0zM9 10a1 1 0 11-2 0 1 1 0 012 0zM7 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="ml-4" id="announcments" onClick={handleOnClick}>Announcments</span>
            </button>
            {/* Syllabus btn */} 
            <button className="w-full h-12 hover:bg-green-500 mb-4 flex items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" viewBox="0 0 20 20" fill="currentColor">
                    <path  fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                    <path  fillRule="evenodd" d="M13 10a1 1 0 11-2 0 1 1 0 012 0zM9 10a1 1 0 11-2 0 1 1 0 012 0zM7 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="ml-4" id="sylabus" onClick={handleOnClick}>Syllabus</span>
            </button>
           {/* instructor info btn */}
            <button className="w-full h-12 hover:bg-green-500 mb-4 flex items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" viewBox="0 0 20 20" fill="currentColor">
                    <path  fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                    <path  fillRule="evenodd" d="M13 10a1 1 0 11-2 0 1 1 0 012 0zM9 10a1 1 0 11-2 0 1 1 0 012 0zM7 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="ml-4" id="instructor" onClick={handleOnClick}>Instructor</span>
            </button>
            {/* horizentl line  */}
            <hr className="w-full h-px bg-gray-700 mb-4"/>
            {/* week btn */}
            {weeks.map((week) => (
                <button
                key={week}
                className="w-full h-12 hover:bg-green-500 mb-4 flex items-center"
                onClick={handleOnClick}
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M13 10a1 1 0 11-2 0 1 1 0 012 0zM9 10a1 1 0 11-2 0 1 1 0 012 0zM7 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="ml-4" id={`create${week}Week`}>Week {week}</span>
                </button>
            ))}
            {/* horizentl line  */}
            <hr className="w-full h-px bg-gray-700 mb-4"/>
            {/* grades btn */}
            <button className="w-full h-12 hover:bg-green-500 mb-4 flex items-center" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" viewBox="0 0 20 20" fill="currentColor">
                    <path  fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                    <path  fillRule="evenodd" d="M13 10a1 1 0 11-2 0 1 1 0 012 0zM9 10a1 1 0 11-2 0 1 1 0 012 0zM7 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="ml-4" id="grades" onClick={handleOnClick}>Grades</span>
            </button>
            
        </div>
    </div>
  )
}
