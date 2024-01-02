import React from 'react'
import './Categories.css'
import gaming from '../images/gaming.jpg'
import coocking from '../images/coocking.jpg'
import travel from '../images/travel.jpg'
import tech from '../images/technilogies.jpg'
import fitness from '../images/fitness.jpg'
import comedy from '../images/comedy.jpg'
import edu from '../images/edu.jpg'
import science from '../images/science.jpg'
import art from '../images/art.jpg'
import news from '../images/news.jpg'
import vlogs from '../images/vloger.jpg'
import life from '../images/lifestyle.jpg'
import { Link } from 'react-router-dom';






function Categories() {
  return (
    <div className='mt-16 ms-16'>
      <br />
      <h1 className='ms-5 text-white text-center'><u>CATEGORIES</u></h1>

      <div>
        <div className='ms-2'>
          <div className="container1">
         
            <div className="row">
            <Link to="/gaming"> <div className="col"><img  src={gaming} alt="" className='ctr' /></div></Link> 
            <Link to="/coocking"> <div className="col"><img src={coocking} alt="" className='ctr' /></div></Link> 
            <Link to="/travel"> <div className="col"><img src={travel} alt="" className='ctr' /></div></Link> 
            </div>
            <div className="row">
            <Link to="/tech">  <div className="col"><img src={tech} alt="" className='ctr' /></div></Link> 
            <Link to="/fitness"> <div className="col"><img src={fitness} alt="" className='ctr' /></div></Link> 
            <Link to="/art"> <div className="col"><img src={art} alt="" className='ctr' /></div></Link> 
            </div>
            <div className="row">
            <Link to="/science"><div className="col"><img src={science} alt="" className='ctr' /></div></Link>
             <Link to="/comedy"><div className="col"><img src={comedy} alt="" className='ctr' /></div></Link>
             <Link to="/edu"> <div className="col"><img src={edu} alt="" className='ctr' /></div></Link>
            </div>
            <div className="row">
            <Link to="/news"> <div className="col"><img src={news} alt="" className='ctr' /></div></Link> 
            <Link to="/vlogs"> <div className="col"><img src={vlogs} alt="" className='ctr' /></div></Link> 
            <Link to="/life"> <div className="col"><img src={life} alt="" className='ctr' /></div></Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories