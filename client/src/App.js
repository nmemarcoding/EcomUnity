import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { publicRequest } from './hooks/requestMethods';
import { useEffect, useState } from 'react';
import StudentHomePage from './pages/StudentHomePage/StudenHopage';
import CoursePage from './pages/CoursePage/StudentCoursePage';
import StudentAsigmnetSubmitionPage from './pages/StudentAsigmnetSubmitionPage/StudentAsigmnetSubmitionPage';
import TeacherHomePage from './pages/TeacherHomePage/TeacherHomePage';
import LoginPage from './pages/LoginPgae/LoginPage';
import SignupPage from './pages/SingUpPage/SignUpPage';
import useStore from './store';

function App() {
  // creat useEffect
  // const addUserInfo = useStore(sate=>sate.addUserInfo)
  // addUserInfo({name:"mohammad"})
  console.log(useStore(sate=>sate.userInf))
 
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
              {/*CoursePage route with id */}
              <Route path="/course/:id" element={<CoursePage/>}/>
              {/* assignment route with id */}
              <Route path="/assignment/:id" element={<StudentAsigmnetSubmitionPage/>}/>
             {/* teacher rout */} 
              <Route path="/teacher" element={<TeacherHomePage/>}/>
              {/* loging page route */}
              <Route path="/login" element={<LoginPage/>}/>              
              {/* sign up page route */}
              <Route path="/signup" element={<SignupPage/>}/>
              
            </Routes>
          </div>
    </Router>
  );
}
}
export default App;
