import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { History } from "./pages/History"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}

export default App
