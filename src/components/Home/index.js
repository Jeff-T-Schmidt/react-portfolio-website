import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/Jeff_S_OG_Black_2022-01.png'
import Logo from './Logo'
import './index.scss'
import ReactGA from 'react-ga';

const TRACKING_ID = "G-PNHVXJRZN8";
ReactGA.initialize(TRACKING_ID);

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['c', 'h', 'm', 'i', 'd', 't']
  const jobArray = [
    'a',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _12`}>,</span>
            <span style={{marginLeft:'15px'}} className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'</span>
            <span className={`${letterClass} _14`}>m</span>
            <br />
            <span className={`${letterClass} _14`}>J</span>
            <span className={`${letterClass} _14`}>e</span>
            <span className={`${letterClass} _14`}>f</span>
            <span className={`${letterClass} _14`}>f</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>Full Stack Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <NavLink style={{marginLeft: "80px"}} to='/' onClick={() => window.open("https://docs.google.com/document/d/1J2W-EwZhN78MEM4jtZG55BTixvjfRRuGzd62zhy7-0g/edit?usp=sharing")} className='flat-button resume'>
            RESUME
          </NavLink>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
