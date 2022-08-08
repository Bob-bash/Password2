import React from 'react'
import projectImg1 from '../../assets/img/projectImg1.png'
import projectImg2 from '../../assets/img/projectImg2.png'
import projectImg3 from '../../assets/img/projectImg3.png'
import './tab1.css'
import {motion} from 'framer-motion'
const projects=[
  {src:projectImg1,description:['Business StartUp','Design & Development'],index:1},
  {src:projectImg2,description:['Business StartUp','Design & Development'],index:2},
  {src:projectImg3,description:['Business StartUp','Design & Development'],index:3},
  {src:projectImg1,description:['Business StartUp','Design & Development'],index:4},
  {src:projectImg2,description:['Business StartUp','Design & Development'],index:5},
  {src:projectImg3,description:['Business StartUp','Design & Development'],index:6}
  
]
const Tab1 = () => {
  return (
    <motion.div className='tab1'
    initial={{scale:.5}}
    animate={{scale:1}}
    transition={{duration:.5}}
    >
      <div className="tab1sW ">
        {projects.map(item=>(
          <div className="tab1W" key={item.index}>
            <img src={item.src} alt="" className='img'/>
            <div className="tab1Inner">
              <h1>{item.description[0]}</h1>
              <span>{item.description[1]}</span>
            </div>
          </div>
        ))}
        </div>
    </motion.div>
  )
}
export default Tab1