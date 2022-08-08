import React,{useState,useEffect} from 'react'
import {FiArrowRightCircle} from 'react-icons/fi'
import './banner.css'
import colorSharp from  '../../assets/img/colorSharp.png'
import bannerBg from  '../../assets/img/bannerBg.png'
import headerImg from  '../../assets/img/headerImg.svg'
const Banner = () => {
    const text='UI/UX Designer!'
    const [showText, setShowText] = useState('')
    const [index, setIndex] = useState(0)
    const time=()=>{
        return Math.random().toFixed(1)*1000+200
    }
    useEffect(()=>{
        const timer=setInterval(() => {
            setIndex(()=>{
                return index==text.split('').length?0:index+1
            })
            setShowText((pre)=>{
                return pre=='UI/UX Designer!'?'':pre+text.split('')[index]
            })
        }, time());
        return ()=> clearInterval(timer)
    },[index])
  return (
    <div className='banner' id='home'>
        <div className="bannerC">
            <div className="bannerw">
                <div className="bannerWel">
                    <div className="imgMove">
                        <span className='wel'>Welcome to my Portfolio</span>
                        <span className='imgC'></span>
                    </div>
                    <div className="bannerAn">
                        <h1>Hi! I'm Bobashave</h1>
                        <h2>{`A ${showText}`}</h2>
                    </div>
                </div>
                <div className="bannerT">
                    <p>Lorem Ipsum is simple dummy text of the printing and typesetting
                    industry.Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s. when an unknown printer take a galley of
                    type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="bannerConW">
                    <span>Let's Connect</span>
                    <FiArrowRightCircle className='riA'/>
                </div>
            </div>
                <img src={headerImg} alt="" className='headerImgAn '/>
        </div>
    </div>
  )
}

export default Banner