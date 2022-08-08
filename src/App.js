import React from 'react'
import { NavBar ,Banner,Skill,Projects,Contact,Email,Footer} from './components'
const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Banner/>
      <Skill/>
      <Projects/> 
      <Contact/>
      <Email/>
      <Footer/>
    </div>
  )
}

export default App