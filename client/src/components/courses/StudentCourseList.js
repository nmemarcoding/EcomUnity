import React from 'react'

export default function Courses() {
    
  return (
    <div className='m-4'>
        {/* bar on top of the corse to say Courses */}
        <div className="w-full h-20 bg-gray-100 shadow-lg flex items-center ">
            <span className="ml-6 text-2xl">Courses</span>
        </div>
        {/* container to show ech course ditales  */}
        <div className="w-full h-32  mt-5 shadow-xl bg-gray-400">
            {/* corse full title  vetically in center */}
            <div className=" h-full flex items-center ">
                <span className="text-lg md:text-2xl ml-3 mr-3 md:ml-6">CIS115-TP06 info. Privacy and Security (2235-1)</span>
            </div>
        </div>
        <div className="w-full h-32  mt-5 shadow-lg bg-gray-400">
            {/* corse full title  vetically in center */}
            <div className=" h-full flex items-center ">
                <span className="text-lg md:text-2xl ml-3 mr-3 md:ml-6">CIS115-TP06 info. Privacy and Security (2235-1)</span>
            </div>
        </div>
        <div className="w-full h-32  mt-5 shadow-lg bg-gray-400">
            {/* corse full title  vetically in center */}
            <div className=" h-full flex items-center ">
                <span className="text-lg md:text-2xl ml-3 mr-3 md:ml-6">CIS115-TP06 info. Privacy and Security (2235-1)</span>
            </div>
        </div>

    </div>
  )
}
