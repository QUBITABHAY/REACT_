import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div className="App">
        <header className="App-header">
          <h1 className="text-4xl font-bold">Mini Context</h1>
        </header>
        <div className="flex justify-center mt-10">
          <div className="w-1/3">
            <Login />
          </div>
          <div className="w-1/3">
            <Profile />
          </div>
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
