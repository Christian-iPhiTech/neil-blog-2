import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'

const Navbar = () => {
    return ( 
        <nav className="max-w-screen-xl w-full flex flex-row justify-between items-center gap-5">
            <div className="logo w-1/4">
                <NavLink to="/" className="item-NavLinks">                    
                    <img className="w-64" src={logo} alt="logo" srcset="" />
                </NavLink>
            </div>
            <div className="nav-NavLinks w-3/4 flex flex-row justify-end gap-8">
                <NavLink to="/" className="item-NavLinks">Home</NavLink>
                <NavLink to="create" className="item-NavLinks">New Blog</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;