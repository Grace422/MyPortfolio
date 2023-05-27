import React from "react";
import "./testimonial.css";
import IMG from "../../assets/team1.jpg";
import AV1 from "../../assets/team2.jpg";
import AV2 from "../../assets/team3.jpg";

export const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
          <div className="test">
           
           
            <p class="try">Working with her is easy. <br></br> 
            She understands fast and <br></br>  provides very good outputs. </p> 
              <div class="pic1">
              <img src={IMG} alt='woman' className="port"/>
                <p className="head">Jane Doe</p>
                <p> <small>FrontEnd Developer</small> </p>
                </div>
          
          
         
         
          <p className="try2"> She knows how to listen <br></br>  to people. 
          In case of confusion, <br></br> she helps you out.
          </p>
          <div className="pic2">
          <img src={AV1} alt='man' className="port"/>
             <p class="head">John Doe</p>
             <p> <small> BackEnd Developer</small></p>
          </div>
          

        
        
          <p className="try3">She makes sure she  <br></br> understoods exactly what 
          you <br></br>  want before implementing it.  
          </p>
          <div className="pic3">
          <img src={AV2} alt='man' className="port"/>
             <p class="head">Johnny Doe</p>
             <p> <small> Data Analyist</small></p>   
   </div>
  </div>
  </section>
  );
} 
export default Testimonial;
   


  


  
   

