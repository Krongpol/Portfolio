import Navbar from './components/navbar'
import Profile from './components/profile'
import Skill from './components/skill'
import Experience from './components/Experience'
import Project from './components/project'
import Contact from './components/contact'

function App() {
  return (
    <>
    <div className='bg-slate-100 w-auto'>
      <Navbar />
      <Profile />
      <Skill />
      <Experience />
      <Project/>
      <Contact />
    </div>
    </>
  )
}

export default App
