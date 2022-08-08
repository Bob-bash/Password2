import React,{useState} from 'react'
import {Link,Routes,Route,useLocation} from 'react-router-dom'
import {Tab1,Tab2,Tab3} from '../index'
import {AnimatePresence} from 'framer-motion'
import './projects.css'
const Projects = () => {
    const location=useLocation()
    console.log(location);
    const [con, setCon] = useState([])
    const [con1, setCon1] = useState([])
    return (
    <div className='projects' id='projects'>
        <div className="proH">
            <h1 className='projectsTittle'>Projects</h1>
            <div className="proP">
                <p>Lorem Ipsum is simple dummy text of the printing and typesetting</p>
                <p>industry.Lorem Ipsum has been the industry's standard dummy text</p>
                <p>  ever since the 1500s. when an unknown printer take a galley of</p>
                <p>type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="linksW"> 
                <div className="linkW ">
                    <span className="load linkActive"></span>
                    <Link to='/tab1' className='link linkActive1'
                    onClick={(e)=>{
                        e.target.classList.add('linkActive1')
                        e.target.parentNode.children[0].classList.add('linkActive')
                        con.push(e.target)
                        con1.push(e.target.parentNode.children[0])
                        for(let item of con1){
                            if(e.target.parentNode.children[0]!=item){
                                item.classList.remove('linkActive')
                            }
                        }
                        for(let item of con){
                            if(e.target!=item){
                                item.classList.remove('linkActive1')
                            }
                        }
                    }}
                    >Tab1</Link>
                </div>
                <div className="linkW">
                    <span className="load"></span>
                    <Link to='/tab2' className='link'
                    onClick={(e)=>{
                        e.target.classList.add('linkActive1')
                        e.target.parentNode.parentNode.children[0].children[0].classList.remove('linkActive')
                        e.target.parentNode.parentNode.children[0].children[1].classList.remove('linkActive1')
                        e.target.parentNode.children[0].classList.add('linkActive')
                        con.push(e.target)
                        con1.push(e.target.parentNode.children[0])
                        for(let item of con1){
                            if(e.target.parentNode.children[0]!=item){
                                item.classList.remove('linkActive')
                            }
                        }
                        for(let item of con){
                            if(e.target!=item){
                                item.classList.remove('linkActive1')
                            }
                        }
                    }}
                    >Tab2</Link>
                </div>
                <div className="linkW">
                    <span className="load"></span>
                    <Link to='/tab3' className='link'
                    onClick={(e)=>{
                        e.target.classList.add('linkActive1')
                        e.target.parentNode.children[0].classList.add('linkActive')
                        e.target.parentNode.parentNode.children[0].children[0].classList.remove('linkActive')
                        e.target.parentNode.parentNode.children[0].children[1].classList.remove('linkActive1')
                        con.push(e.target)
                        con1.push(e.target.parentNode.children[0])
                        for(let item of con1){
                            if(e.target.parentNode.children[0]!=item){
                                item.classList.remove('linkActive')
                            }
                        }
                        for(let item of con){
                            if(e.target!=item){
                                item.classList.remove('linkActive1')
                            }
                        }
                    }}
                    >Tab3</Link>
                </div>
            </div>
        </div>
        <div className="proC">
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/tab1' element={<Tab1/>}/>
                    <Route path='/tab2' element={<Tab2/>}/>
                    <Route path='/tab3' element={<Tab3/>}/>
                </Routes>
            </AnimatePresence>
        </div>
    </div>
  )
}

export default Projects