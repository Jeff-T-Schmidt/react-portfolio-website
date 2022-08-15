import './style.scss'
import image1 from '../../assets/images/CodingQuiz.JPG'
import image2 from '../../assets/images/PasswordGen.JPG'
import image3 from '../../assets/images/PetFinder.JPG'
import image4 from '../../assets/images/Project1.JPG'
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
                        <a href='https://jeff-t-schmidt.github.io/Web-API-Quiz/' target="_blank" rel="noopener noreferrer"><img src={image1} className="projectImages" /></a>
                        <a href="https://jeff-t-schmidt.github.io/passwordGen/" target="_blank" rel="noopener noreferrer"> <img src={image2} className="projectImages" /></a>
                        <a href="https://hidden-shore-04969.herokuapp.com/home" target="_blank" rel="noopener noreferrer" > <img src={image3} className="projectImages" /></a>
                        <a href="https://jeff-t-schmidt.github.io/First-Project/" target="_blank" rel="noopener noreferrer"> <img src={image4} className="projectImages" marginRight={'20px'}/></a>
                    </div>
                    <div className='titles'>
                        <a href='https://github.com/Jeff-T-Schmidt/Web-API-Quiz' className='title1' target="_blank" rel="noopener noreferrer">Code Quiz</a>
                        <a href='https://github.com/Jeff-T-Schmidt/passwordGen' className='title2' target="_blank" rel="noopener noreferrer">Password Gen</a>
                        <a href='https://github.com/Pablito14/Lost-Pet-Project' className='title3' target="_blank" rel="noopener noreferrer">Pet Finder</a>
                        <a href='https://github.com/Jeff-T-Schmidt/First-Project' className='title4' target="_blank" rel="noopener noreferrer">Cocktails</a>
                    </div>
                    <h3>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['(', 'S', 'e', 'c', 't', 'i', 'o', 'n', ' ', 'i', 'n', '-', 'w', 'o', 'r', 'k', ')']}
                            idx={10}>
                        </AnimatedLetters>
                    </h3>
                </div>
            </div>

            <Loader type="pacman" />
        </>
    )
}

export default Project