import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div className="App">
        <header className="App-header">
          <h1 className="text-4xl font-bold">Mini Context</h1>
        </header>
      </div>
    </UserContextProvider>
  )
}

export default App
