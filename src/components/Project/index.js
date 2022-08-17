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
                            idx={15} />
                    </h1>
                    <div className="project-container titles">
                        <div className='project1'>
                            <a href='https://jeff-t-schmidt.github.io/Web-API-Quiz/' target="_blank" rel="noopener noreferrer"><img src={image1} className="projectImages1" /></a>
                            <a href='https://github.com/Jeff-T-Schmidt/Web-API-Quiz' className='title1' target="_blank" rel="noopener noreferrer">Code Quiz</a>
                            <p className='p1'>
                                The Coding Quiz was one of our first homework assignments in the Full Stack coding boot camp. As a beginner this was a challenging assignment because this was our first attempts at writing functions, selecting DOM objects and working with HTML/CSS + JavaScript.
                                <br></br>
                                <br></br>
                                The fundamentals we learned from this assignment were:
                                <br></br>
                                    How to create arrays
                                    <br></br>
                                    How to loop through arrays
                                    <br></br> 
                                    Save information to local storage
                                    <br></br>
                                    Basic application styling
                            </p>
                        </div>
                        <div className='project2'>
                            <a href="https://jeff-t-schmidt.github.io/passwordGen/" target="_blank" rel="noopener noreferrer"> <img src={image2} className="projectImages2" /></a>
                            <a href='https://github.com/Jeff-T-Schmidt/passwordGen' className='title2' target="_blank" rel="noopener noreferrer">Password Gen</a>
                            <p className='p2'>
                                The password generator is a simple application that prompts the user for password length, case sensitivity, special characters and a number to generate a secure password.
                                <br></br>
                                <br></br>
                                We learned how to 'prompt' users with questions and take those results and put them in an 'answers' array. Then convert the array to a string and join the results for a new password.
                                <br></br>
                                <br></br>
                                The technologies used in this application were:
                                    <br></br>
                                    HTML
                                    <br></br>
                                    CSS
                                    <br></br>
                                    JavaScript
                            </p>
                        </div>
                        <div className='project3'>
                            <a href="https://hidden-shore-04969.herokuapp.com/home" target="_blank" rel="noopener noreferrer" > <img src={image3} className="projectImages3" /></a>
                            <a href='https://github.com/Pablito14/Lost-Pet-Project' className='title3' target="_blank" rel="noopener noreferrer">Pet Finder</a>
                            <p className='p3'>
                                Pet Finder was the final project of the coding boot camp. This application summarizes the entire technology catalog that we had learned up to this point. 
                                <br></br>
                                <br></br>
                                The problem that we are attempting to solve here with our application is helping people reunite with their lost pets. We do that by having a user login, verify their credentials and from there they can browse lost pets that other people have found or they can create a new lost pet report. If they create a new lost pet report they can upload a picture so that it's easier to identify their pet.
                                <br></br>
                                <br></br>
                                The technologies used for this project were:
                                <br></br>
                                React.js
                                <br></br>
                                MySQL
                                <br></br>
                                Express
                                <br></br>
                                bcrypt
                                <br></br>
                                Cloudinary
                                <br></br>
                                Restful APIs
                            </p>
                        </div>
                        <div className='project4'>
                            <a href="https://jeff-t-schmidt.github.io/First-Project/" target="_blank" rel="noopener noreferrer"> <img src={image4} className="projectImages4" marginRight={'20px'} /></a>
                            <a href='https://github.com/Jeff-T-Schmidt/First-Project' className='title4' target="_blank" rel="noopener noreferrer">Cocktail Wonderland</a>
                            <p className='p4'>
                                Cocktail Wonderland was our first group project. We had to have a Project Manager, front-end dev, back-end dev, and a GitHub admin (me). We were tasked with creating a web application that sent GET requests for multiple APIs. 
                                <br></br>
                                <br></br>
                                We created API calls that would randomize an adult cocktail from adult beverage API. For a laugh, we hit a Chuck Norris API and then we used the adult beverage API so that the user could create an adult beverage from the ingredients they had on-hand. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='text-zone'>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['(', 'S', 'e', 'c', 't', 'i', 'o', 'n', ' ', 'i', 'n', '-', 'w', 'o', 'r', 'k', ')']}
                    idx={10}>
                </AnimatedLetters>
            </h3>
            <Loader type="pacman" />
            <div className='sidebar'>

            </div>
        </>
    )
}

export default Project