import {useState} from 'react'
import TextEditor from '../../components/TextEditor/TextEditor'



export default function StudentAsigmnetSubmitionPage() {
   const [value, setValue] = useState("")
   const [Preview, setPreview] = useState(false)

    const PreviewOnClik = () => {
        if(Preview){
            setPreview(false)
        }else{
            setPreview(true)
        }
    }

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
        
        <div className="w-full h-20 bg-gray-100 shadow-lg flex items-center justify-center text-center hover:bg-gray-200" onClick={PreviewOnClik}>
            <span className="ml-0 text-2xl">Assignment Preview</span>
        </div >
        
        {/* if preview is true show a div  */}
        {Preview && <div className="m-20">
            <div dangerouslySetInnerHTML={{ __html: value }} />
            <br></br>
            
        </div>}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-20">
                Submit
        </button>

    </div>
  )
}
