import { Link } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = () => {
    return ( 
            <nav className="nav__bottom__container">
                <div className="bottom__container">
                    <ul className="nav">
                        <li className='nav-link'><Link to="/">Home</Link></li> 
                        <li className='nav-link'><Link to="/shop">Products</Link> </li>
                        <li className='nav-link'><Link to="/resources">Resources</Link></li> 
                        <li className='nav-link'><Link to="/gallery">Gallery</Link></li> 
                        <li className='nav-link'><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
     );
}
 
export default NavLinks;