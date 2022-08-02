import './style.css'
import image1 from '../../assets/images/big picture.jpg'
import image2 from '../../assets/images/code landscape.jpg'
import image3 from '../../assets/images/code landscape1.jpg'
import image4 from '../../assets/images/code landscape2.jpg'

const Project = () => {
    return (
        <div className="project-page">
            <div className="text-zone">
                <h1>Projects!</h1>
                <div className="project-container">
                   <a href='https://jeff-t-schmidt.github.io/Web-API-Quiz/'target="_blank" rel="noopener noreferrer"><img src={image1}className="projectImages" width="100px" height='100px'  /></a>
                   <a href="https://jeff-t-schmidt.github.io/passwordGen/"target="_blank" rel="noopener noreferrer"> <img src={image2}className="projectImages"width="100px" height='100px'  /></a>
                   <a href="https://hidden-shore-04969.herokuapp.com/home"target="_blank" rel="noopener noreferrer" > <img src={image3}className="projectImages" width="100px" height='100px' /></a>
                   <a href="https://jeff-t-schmidt.github.io/First-Project/"target="_blank" rel="noopener noreferrer"> <img src={image4}className="projectImages" width="100px" height='100px' /></a>
                </div>
            </div>
        </div>
    )
}

export default Project