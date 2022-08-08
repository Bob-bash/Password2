import React,{useState,useEffect} from 'react'
import './skill.css'
import meter1 from '../../assets/img/meter1.svg'
import meter2 from '../../assets/img/meter2.svg'
import meter3 from '../../assets/img/meter3.svg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
const Skill = () => {
    const circles=[
        {src:meter1,description:'Web Development',index:0},
        {src:meter2,description:'Brand Identity',index:1},
        {src:meter3,description:'Logo Design',index:2},
        {src:meter2,description:'Brand Identity',index:3},
        {src:meter1,description:'Web Development',index:4},
        {src:meter3,description:'Logo Design',index:5}
    ]

const [num, setNum] = useState(0);
    const [num1,setNum1]=useState(0)
    const [num2,setNum2]=useState(false)
    const handleMove=(value)=>{
        if(value=='r'){
            setNum((pre)=>{
                setNum2(true)
                return pre+1
            })
        }else if(value=='l'){
            setNum((pre)=>{
                setNum2(true)
                return pre-1
            })
        }
    }
  return (
    <div className='skill' id='skills'>
        <div className="skillCon">
            <div className="skillHead">
                <h1>Skills</h1>
                <div className="skillText">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>
            </div>
            <div className="skillW">
                <div className="skillScreen">
                    <div className="skillCircles" style={{transform:`translateX(${num2?num*(-150):num1*(-150)}px)`}}>
                        {circles.map((item,index1)=>(
                            <button className="skillCircle" key={item.index}
                            onClick={(e)=>{
                                setNum1(()=>{
                                    setNum2(false)
                                    return index1>=2&&index1<=4?index1-1:0
                                })
                            }}
                            >
                                <img src={item.src} alt="" className='circle'/>
                                <span className='des'>{item.description}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="arrWW">
                    <button className="arrW" 
                    disabled={num===0}
                    onClick={()=>handleMove('l')}
                    >
                        <MdOutlineKeyboardArrowLeft />
                    </button>
                    <button className="arrW"
                    onClick={()=>handleMove('r')}
                    disabled={num==3}
                    >
                        <MdKeyboardArrowRight/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill