import React from 'react'
import './projects.css'
import IMG from '../../assets/my_rMVfbyl.jpg'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">

      <article className="project__item">
          <div className="project__item-image">
            <img src={IMG} alt="image" />
          </div>
          <h3>This is a project title</h3>
          <div className="project__item-cta">
            <a href="" className="btn">Github</a>
            <a href="" className="btn btn-primary">Live Demo</a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG} alt="image" />
          </div>
          <h3>This is a project title</h3>
          <div className="project__item-cta">
            <a href="" className="btn">Github</a>
            <a href="" className="btn btn-primary">Live Demo</a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG} alt="image" />
          </div>
          <h3>This is a project title</h3>
          <div className="project__item-cta">
            <a href="" className="btn">Github</a>
            <a href="" className="btn btn-primary">Live Demo</a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG} alt="image" />
          </div>
          <h3>This is a project title</h3>
          <div className="project__item-cta">
            <a href="" className="btn">Github</a>
            <a href="" className="btn btn-primary">Live Demo</a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG} alt="image" />
          </div>
          <h3>This is a project title</h3>
          <div className="project__item-cta">
            <a href="" className="btn">Github</a>
            <a href="" className="btn btn-primary">Live Demo</a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG} alt="image" />
          </div>
          <h3>This is a project title</h3>
          <div className="project__item-cta">
            <a href="" className="btn">Github</a>
            <a href="" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects
