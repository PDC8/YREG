import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Join from './components/Join'
import Team from './components/Team'
import Contact from './components/Contact'

const App = () => {
  return (
    <main className="bg-slate-300/200 min-h-screen min-w-[1120px] h-auto">
        <Router>
            <Navbar />
            <Routes>
              <Route path="/YREG" element={<Home/>} />
              <Route path="/YREG/About_Us" element={<About />} />
              <Route path="/YREG/Join_Us" element={<Join />} />
              <Route path="/YREG/Team" element={<Team />} />
              <Route path="/YREG/Contact" element={<Contact />} />
            </Routes>
        </Router>
    </main>   
  )
}

export default App