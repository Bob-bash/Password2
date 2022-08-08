import React from 'react'
import './footer.css'
import logo from '../../assets/img/logo.svg'
import navIcon1 from '../../assets/img/navIcon1.svg'
import navIcon2 from '../../assets/img/navIcon2.svg'
import navIcon3 from '../../assets/img/navIcon3.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="fC">
        <div className="fLogo">
          <span className='fLogoC'></span>
          <img src={logo} alt="" className='fLogo1'/>
        </div>
          <div className="fW">
            <div className="fInner">
              <div className="fNavW">
                <img src={navIcon1} alt="" className='fn1'/>
                <span className='fMove'></span>
              </div>
              <div className="fNavW">
                <img src={navIcon2} alt=""  className='fn1'/>
                <span className='fMove'></span>
              </div>
              <div className="fNavW">
                <img src={navIcon3} alt=""  className='fn1'/>
                <span className='fMove'></span>
              </div>
            </div>
            <span>Copyright 2022.All rights reserved.</span>
          </div>
      </div>
    </div>
  )
}

export default Footer