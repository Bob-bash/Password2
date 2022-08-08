import React,{useEffect} from 'react'
import './contact.css'
import contactImg from '../../assets/img/contactImg.svg'
import {useAnimation,motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
const Contact = () => {
  const controls=useAnimation()
  const [ref,inView]=useInView()
  useEffect(() => {
    if(inView) controls.start('visible')
    else controls.start('hidden')
  }, [controls,inView])
  const variants = {
    visible: { opacity: 1, scale: 1,translateX:0,transition: { duration: .4}},
    hidden: { opacity: 0,translateX:-10,scale: 0 }
  };
  return (
    <div className='contact'>
        <div className="contactC contactMove">
          <motion.div className='contactImg'
          initial='hidden'
          ref={ref}
          animate={controls}
          variants={variants}
          >
            <img src={contactImg} alt="" className='contactImg1'/>
          </motion.div>
        <div className="contactW">
          <h1>Get In Touch</h1>
          <div className="contactInfo">
            <div className="contactInner">
              <input type="text" placeholder='First Name'/>
              <input type="text" placeholder='Last Name'/>
              <input type="text" placeholder='Email Address'/>
              <input type="text" placeholder='Phone No.'/>
            </div>
            <input type='textarea' placeholder='Message' className='message'/>
          </div>
          <button className='contactB'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact