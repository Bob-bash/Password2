import React,{useEffect} from 'react'
import './email.css'
import colorSharp2 from '../../assets/img/colorSharp2.png'
import {motion,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Email = () => {
  const squareVariants = {
    visible: { opacity: 1,translateX:0, transition: { duration: .8} },
    hidden: { opacity: 0,translateX:-20}
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    else controls.start('hidden')
  }, [controls, inView]);
  return (
    <div className='email'>
      <img src={colorSharp2} alt="" className='colorSharp2'/>
      <motion.div className="emailC"
       ref={ref}
       animate={controls}
       initial="hidden"
       variants={squareVariants}
      >
        <div className="emailT">
          <p>Subscribe to out</p>
          <p>Newsletter</p>
          <p>& Never miss latest</p>
          <p>updates</p>
        </div>
        <div className="emailIn">
          <input type="text" placeholder='Email Address' />
          <button>Submit</button>
        </div>
      </motion.div>
    </div>
  )
}
export default Email