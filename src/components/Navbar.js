import logo from '../assets/logo.svg'

const Navbar = () => {
    return ( 
        <nav className="max-w-screen-xl w-full flex flex-row justify-between items-center gap-5">
            <div className="logo w-1/4">
                <img className="w-64" src={logo} alt="logo" srcset="" />
            </div>
            <div className="nav-links w-3/4 flex flex-row justify-end gap-8">
                <a href="#!" className="item-links">Home</a>
                <a href="#!" className="item-links">About</a>
                <a href="#!" className="item-links">Services</a>
                <a href="#!" className="item-links">Contact</a>
            </div>
        </nav>
     );
}
 
export default Navbar;