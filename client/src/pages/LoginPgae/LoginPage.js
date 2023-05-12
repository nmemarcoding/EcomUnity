import {useState} from 'react';
import {publicRequest} from '../../hooks/requestMethods'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useStore from '../../store';

const LoginPage = () => {
    const addUserInfo = useStore(sate=>sate.addUserInfo)
    const [loginInfo, setLoginInfo] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            publicRequest().post("auth/login", loginInfo)
                .then((res) => {
                    // if status is 200, set userInfo in store
                    if (res.status === 200) {
                        addUserInfo(res.data)
                        navigate("/")
                    }

                    
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        catch (error) {
            console.log(error.response.data.message)
        }
        
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              username
            </label>
            <input
              type="usename"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              onChange={handleChange} 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Sign In
            </button>
            <Link
                to="/signup"
                className="text-sm text-indigo-500 hover:text-indigo-600 focus:outline-none"
            >
                SignUp
            </Link>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
