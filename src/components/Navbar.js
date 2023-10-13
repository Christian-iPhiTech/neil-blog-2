import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'

const Navbar = () => {
    return ( 
        <nav className="max-w-screen-xl w-full flex flex-row justify-between items-center gap-5">
            <div className="logo w-1/4">
                <img className="w-64" src={logo} alt="logo" srcset="" />
            </div>
            <div className="nav-NavLinks w-3/4 flex flex-row justify-end gap-8">
                <NavLink to="/" className="item-NavLinks">Home</NavLink>
                <NavLink to="about" className="item-NavLinks">About</NavLink>
                <NavLink to="services" className="item-NavLinks">Services</NavLink>
                <NavLink to="contact" className="item-NavLinks">Contact</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;