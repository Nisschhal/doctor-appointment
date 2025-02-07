import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-4 sm:mx-[10%]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
