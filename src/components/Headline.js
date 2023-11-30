import logo from './assets/avataaars.png'
import './CSS/headline.css'

const Headline = () => {
    return (
        <>
        <div className="top-page">
            <img className='logo-image' src={logo} alt='computer cartoon'/>
        <h1 className='name'>Jackson Pruett</h1>
        <h3 className='headline'>Full-Stack Web Developer</h3>

        </div>
        </>
    );
}
 
export default Headline