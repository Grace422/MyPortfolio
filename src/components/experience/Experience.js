import React from "react";
import "./experience.css";
import {BsPatchCheckFill} from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experince__frontend">
          <h3>Frontend Development</h3>
          <div className="experince__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
              <h4>HTML</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
             <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experince__backend">
        <h3>Backend Development</h3>
          <div className="experince__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" /> 
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
