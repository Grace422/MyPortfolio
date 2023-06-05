import React from 'react'
import './services.css'
import app from '../../assets/app6.jpeg'
import web from '../../assets/web2 image.jpg'
import soft from '../../assets/img6.png'
import {BiCheck} from 'react-icons/bi'



export const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2> 
            <div className="container services__container">
              <article className="service">
              <div className="image">
                <img src={web} alt='app' className='img2'/>
              </div> <br></br>
              <div className='service__name'>
                <h5>Web Development</h5>  
              </div>
              <div className="service__list">
                 <BiCheck className='service_list_icons'/>
                 <small>HTML and CSS</small> 
              </div>
              <div className="service__list">
                 <BiCheck className='service_list_icons'/>
                 <small> JAVASCRIPT</small> 
              </div>
              <div className="service__list">
                  <BiCheck className='service_list_icons'/>
                  <small>REACT</small> 
              </div>
              </article>
              <article className="service">
                <div className="image">
                <img src={app} alt='app' className='img2'/>
                </div>  <br></br>
                <div className='service__name'>
                <h5>Mobile App Development</h5> 
                </div> 
                <div className="service__list">
                 <BiCheck className='service_list_icons'/>
                 <small>HTML and CSS</small> 
              </div>
              <div className="service__list">
                 <BiCheck className='service_list_icons'/>
                 <small> FIGMA</small> 
              </div>
              <div className="service__list">
                  <BiCheck className='service_list_icons'/>
                  <small>FLUTTER</small> 
              </div>  
              </article> 
              <article className="service">
              <div className="image">
                <img src={soft} alt='app' className='img2'/>
                </div>  <br></br>
                <div className='service__name'>
                <h5>Software Development</h5>  
                </div>
                <div className="service__list">
                 <BiCheck className='service_list_icons'/>
                 <small>PYTHON</small> 
              </div>
              <div className="service__list">
                 <BiCheck className='service_list_icons'/>
                 <small> JAVA</small> 
              </div>
              <div className="service__list">
                  <BiCheck className='service_list_icons'/>
                  <small>C++</small> 
              </div>
              </article>
            </div>
    </section>
  );
}
export default Services;