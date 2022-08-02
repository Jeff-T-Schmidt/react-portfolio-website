import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import image1 from '../../assets/images/july.jpg'
import image2 from '../../assets/images/toshandi.jpg'
import image3 from '../../assets/images/toshandwife.jpg'
import image4 from '../../assets/images/toshy.jpg'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very new full-stack developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            I'm an experienced customer-oriented individual with a strong work ethic,
            ability to escalate issues appropriately and a highly efficient multi-
            tasker with a strong sense of priority management.
          </p>
        </div>
      </div>
      <AliceCarousel autoPlay='true' autoPlayInterval="3000" disableButtonsControls='true' disableDotsControls='true' animationType='fadeout' infinite='true' >
        <img src={image1} className="sliderimg" />
        <img src={image2} className="sliderimg" />
        <img src={image3} className="sliderimg" />
        <img style={{marginLeft: '55%'}} src={image4} className="sliderimg" />
      </AliceCarousel>


      <Loader type="pacman" />
    </>
  )
}

export default About
