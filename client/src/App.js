import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { publicRequest } from './hooks/requestMethods';
import { useEffect, useState } from 'react';
import StudentHomePage from './pages/StudentHomePage/StudenHopage';
function App() {
  const [serveIsRunning, setServeIsRunning] = useState(false)
  useEffect(() => {
    publicRequest().get("/start")
      .then((res) => {
        setServeIsRunning(true)
      })
      .catch((err) => {
        console.log(err)
        
        setServeIsRunning(false)
      })
  }, [])
  if(!serveIsRunning){
    return <div class="flex items-center justify-center h-screen">
    <div class="app">
      <h1 class="animate-pulse animate-slow text-4xl font-bold text-center">LOADING SERVER</h1>
    </div>
  </div>
  
  

  }
  else{

  return (
    
    <Router>
          <div className="app ">
            <Routes>
              
                
              <Route path="/" element={<></>}/>
              // studentHomePage
              <Route path="/studenthomepage" element={<StudentHomePage/>}/>
              
              
              
            </Routes>
          </div>
    </Router>
  );
}
}
export default App;
