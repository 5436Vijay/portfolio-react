
import './App.css'
import Counter from './components/Counter'
import FirstPage from './components/FirstPage'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Education from './components/Education';
import Experience from './components/Experience';
import Home from './components/Home';
import Project from './components/Project';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';



function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<FirstPage/>}>
              <Route index element={<Navigate to="home" replace />} />
              <Route path='home' element={<Home/>}/>
              <Route path="education"  element={<Education/>}/>
              <Route path='experience' element={<Experience />}/>
              <Route path='project' element={<Project/>} />
              <Route path='skills' element={<Skills/>}/>
              <Route path='achievements' element={<Achievements/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='project/counter' element={<Counter/>} />
            </Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
