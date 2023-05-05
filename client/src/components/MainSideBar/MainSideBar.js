import React from 'react'

export default function MainSideBar(props) {
   
   
    const handleOnClick = (e) => {
        
        props.onClick(e.target.id)
    }
  return (
   
    <div>
        <div className="w-screen h-screen bg-gray-800  pt-6 text-white" id="menu">
           
            {/* map trow props.options */}
            {props?.options?.map((option) => (
                <button className="w-full h-12 hover:bg-green-500 mb-4 flex items-center " key={option.id}>
                
                    <span className="ml-8 "id={option.id} onClick={handleOnClick}>{option.name}</span>
                </button>
            )
            )}
            

        </div>
    </div>
  )
}
