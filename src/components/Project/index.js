import './style.scss'
import image1 from '../../assets/images/big picture.jpg'
import image2 from '../../assets/images/code landscape.jpg'
import image3 from '../../assets/images/code landscape1.jpg'
import image4 from '../../assets/images/code landscape2.jpg'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
            <div className="container project-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                    <div className="project-container">
                        <a href='https://jeff-t-schmidt.github.io/Web-API-Quiz/' target="_blank" rel="noopener noreferrer"><img src={image1} className="projectImages"/></a>
                        <a href="https://jeff-t-schmidt.github.io/passwordGen/" target="_blank" rel="noopener noreferrer"> <img src={image2} className="projectImages"/></a>
                        <a href="https://hidden-shore-04969.herokuapp.com/home" target="_blank" rel="noopener noreferrer" > <img src={image3} className="projectImages"/></a>
                        <a href="https://jeff-t-schmidt.github.io/First-Project/" target="_blank" rel="noopener noreferrer"> <img src={image4} className="projectImages" /></a>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Project