import logo from '../assets/images/guitar.png'
import './style.scss';

export default function Navbar() {
    
    return (
        <div className='Navbar'>
            <div className='leftSide'>
                <div>Home</div>
                <div>Songs</div>
                <div>About</div>
            </div>
            <div className='rightSide'>
                <img src={logo} />
            </div>
        </div>
    )
}
