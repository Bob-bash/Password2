import React from 'react'
import './tab3.css'
import { motion } from 'framer-motion'
const tab3 = () => {
  return (
    <motion.div className='tab3'
    initial={{translateY:-10}}
    animate={{translateY:0}}
    transition={{duration:.5}}
    >
      <div className="tab3W tab3Ani">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque</p>
        <p>quam.quod neque provident velit.rem explicabo excepturi id illo</p>
        <p>molestiae blandtiis.eligendi dicta afficiis asperiores delectus quasi</p>
        <p>inventore debitis quo</p>
      </div>
    </motion.div>
  )
}

export default tab3