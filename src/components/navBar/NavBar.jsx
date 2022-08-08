import React from 'react'
import './navBar.css'
import logo from '../../assets/img/logo.svg'
import navIcon1 from '../../assets/img/navIcon1.svg'
import navIcon2 from '../../assets/img/navIcon2.svg'
import navIcon3 from '../../assets/img/navIcon3.svg'
const NavBar = () => {
  return (
    <div className='navBar navBarAn'>
      <div className="logoW">
        <img src={logo} alt="Logo"  className='logo' />
      </div>
      <div className="navR">
        <div className="navW">
          <div className="navText">
            <a href="#home"
            className='linkActive1'
            onClick={(e)=>{
              e.target.classList.add('linkActive1')
              for(let item of e.target.parentNode.children){
                if(item!=e.target){
                  item.classList.remove('linkActive1')
                }
              }
            }}
            >Home</a>
            <a href="#skills"
            onClick={(e)=>{
              e.target.classList.add('linkActive1')
              for(let item of e.target.parentNode.children){
                if(item!=e.target){
                  item.classList.remove('linkActive1')
                }
              }
            }}>Skills</a>
            <a href="#projects"
            onClick={(e)=>{
              e.target.classList.add('linkActive1')
              for(let item of e.target.parentNode.children){
                if(item!=e.target){
                  item.classList.remove('linkActive1')
                }
              }
            }}>Projects</a>
          </div>
          <div className="navSvg">
            <div className="svgW"><img src={navIcon1} alt="Logo" /><span className="circleE"></span></div>
            <div className="svgW"><img src={navIcon2} alt="Logo" /><span className="circleE"></span></div>
            <div className="svgW"><img src={navIcon3} alt="Logo" /><span className="circleE"></span></div>
          </div>
        </div>
        <div className="conW">
          <span className="navCon">Let's Connect</span>
          <span className="conLoad"></span>
        </div>
      </div>
    </div>
  )
}

export default NavBar