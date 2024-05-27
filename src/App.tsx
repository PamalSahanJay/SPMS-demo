import Device from "./features/devices/Device"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./features/home/Home"
import Counter from "./features/counter/Counter"
import Movie from "./features/movie/Movie"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/devices" element={<div><Device/></div>} />
        </Routes>
        <Routes>
          <Route path="/" element={<div><Home/></div>} />  
        </Routes>
        <Routes>
          <Route path="/count" element={<Counter/>} />
        </Routes>
        <Routes>
          <Route path="/movie" element={<Movie/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App 
