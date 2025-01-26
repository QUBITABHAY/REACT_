import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Coustom App!</h1>
    </div>
  )
}

// const reactElement = {
//   type: "a", 
//   props: {
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: "Click me to visit google"
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Click to visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'Click me to visit google'
)

createRoot(document.getElementById('root')).render(
  reactElement
)