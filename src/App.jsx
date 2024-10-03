import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Join from './components/Join'
import Team from './components/Team'

const App = () => {
  return (
    <main className="bg-slate-300/20 min-h-screen">
        <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/About_Us" element={<About />} />
              <Route path="/Join_Us" element={<Join />} />
              <Route path="/Team" element={<Team />} />
            </Routes>
        </Router>
    </main>   
  )
}

export default App