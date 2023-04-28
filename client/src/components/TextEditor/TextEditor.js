import React, { useRef } from 'react'
import JoditEditor from 'jodit-react';



export default function TextEditor({setValue}) {
    const editor = useRef(null)
  return (
    <div>
        <JoditEditor
            ref={editor}
            onChange = {(content)=>setValue(content)}
      
            
        />
        <p style={{ textAlign: 'center' }}>
    
    </p>
        
    </div>
  )
}
