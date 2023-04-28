import {useState} from 'react'
import TextEditor from '../../components/TextEditor/TextEditor'



export default function StudentAsigmnetSubmitionPage() {
   const [value, setValue] = useState("")

  return (
    <div className="w-screen ">
        {/* assignment title to the center*/}
        <div className="w-full h-20 bg-gray-100 shadow-lg flex items-center justify-center text-center">
            <span className="ml-0 text-2xl">Assignment Title</span>
        </div >
        <div className="m-20">
            <TextEditor setValue={setValue}/>
        </div>
        
        <br></br>
        <div dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  )
}
