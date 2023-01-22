import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I've Studied</h5>
      <h2>Education</h2>

      <div className='container service_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>
              Bachelor of Engineering
            </h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Netaji Subhas Institute of Technology</p>
            </li>

            <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Score: 7.4 CGPA (74% aggregate)</p>
            </li>

            {/* <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li> */}
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>
              12th Standard
            </h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Kamal Model Sr. Sec. School</p>
            </li>

            <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Score: 92%</p>
            </li>

            {/* <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li> */}
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>
              10th Standard
            </h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Kamal Model Sr. Sec. School</p>
            </li>

            <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Score: 10 CGPA (95% aggregate)</p>
            </li>

            {/* <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>

            <li>
              <BiCheck className='service_lisy-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services