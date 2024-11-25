import { NavLink } from 'react-router-dom'
import Logo from '/Users/peidongchen/Projects/YREG/public/YREG-Logo.webp'

const Navbar = () => {
  return (
    <header className="header justify-between flex bg-blue-1">
        <div className="h-24 w-32 overflow-hidden">
            <NavLink to="/YREG" className="">
                <img className="h-24 w-32 object-cover" style={{ transform: 'translateY(2px)' }} src={Logo}></img>
            
            </NavLink>
        </div>
        <nav className="flex space-x-12 px-8 items-center">
            <NavLink to="/YREG/About_Us" className= {({ isActive }) => isActive ? "text-yellow-1" : "text-white hover:text-yellow-1"}>
                About Us
            </NavLink>
            <NavLink to="/YREG/Join_Us" className= {({ isActive }) => isActive ? "text-yellow-1" : "text-white hover:text-yellow-1"}>
                Join Us
            </NavLink>
            <NavLink to="/YREG/Team" className={({ isActive }) => isActive ? "text-yellow-1" : "text-white hover:text-yellow-1"}>
                Team
            </NavLink>
            <NavLink to="/YREG/Contact" className={({ isActive }) => isActive ? "text-yellow-1" : "text-white hover:text-yellow-1"}>
                Contact
            </NavLink>
        </nav>
    </header>
  );
};

export default Navbar;
