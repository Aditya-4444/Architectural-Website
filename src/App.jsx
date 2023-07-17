import './App.css'
import Partners from './components/Partners/Partners'
import Hero from './components/Hero/Hero'
import Header from './components/Hrader/Header'
import Project from './components/Projects/Project'
import Value from './components/Value/Value'
import Contact from './components/Contact/Contact'
import GetStarted from './components/GetStarted/GetStarted'
import Footer from './components/Footer/Footer'

function App() {
return(
  <div className='App'>
    <div>
      <div className='white-gradient'/>
      <Header/>
      <Hero/>
    </div>
    <Partners/>
    <Project/>
    <Value/>
    <Contact/>
    <GetStarted/>
    <Footer/>
  </div>
)
}

export default App
