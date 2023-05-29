import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img2.png'
import IMG5 from '../../assets/img9.png'
import IMG6 from '../../assets/img6.png'


export const Portfolio = () => {
return (
<section id="portfolio">
   <h5>My Recent Work</h5>
   <h2>Portfolio</h2>

   <div className="container_port porfolio__container">
      <article className="portfolio__item">
         <div className="portfolio__item-image">
             <img src={IMG1} alt="" /> 
         </div>
         <h3>Project 1</h3>
        <div className="portfolio__item__cta">
         <a href='https://github.com' className="btn">Github</a>
         <a href='https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design' className="btn btn-primary" target="blank">Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
         <div className="portfolio__item-image">
             <img src={IMG2} alt="" /> 
         </div>
         <h3>Project 2</h3>
        <div className="portfolio__item__cta">
         <a href='https://github.com' className="btn">Github</a>
         <a href='https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design' className="btn btn-primary" target="blank">Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
         <div className="portfolio__item-image">
             <img src={IMG3} alt="" /> 
         </div>
         <h3>Project 3</h3>
        <div className="portfolio__item__cta">
         <a href='https://github.com' className="btn">Github</a>
         <a href='https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design' className="btn btn-primary" target="blank">Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
         <div className="portfolio__item-image">
             <img src={IMG4} alt="" /> 
         </div>
         <h3>Project 4</h3>
        <div className="portfolio__item__cta">
         <a href='https://github.com' className="btn">Github</a>
         <a href='https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design' className="btn btn-primary" target="blank">Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
         <div className="portfolio__item-image">
             <img src={IMG5} alt="" /> 
         </div>
         <h3>Project 5</h3>
        <div className="portfolio__item__cta">
         <a href='https://github.com' className="btn">Github</a>
         <a href='https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design' className="btn btn-primary" target="blank">Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
         <div className="portfolio__item-image">
             <img src={IMG6} alt="" /> 
         </div>
         <h3>Project 6</h3>
        <div className="portfolio__item__cta">
         <a href='https://github.com' className="btn">Github</a>
         <a href='https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design' className="btn btn-primary" target="blank">Live Demo</a>
        </div>
      </article>
  </div>
</section>
)
}
export default Portfolio;