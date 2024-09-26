import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="">
            <p> YREG </p>
        
        </NavLink>
        <nav>
            <NavLink to="/About_Us">
                About Us
            </NavLink>
            <NavLink to="/Join_Us">
                Join Us
            </NavLink>
            <NavLink to="/Contact">
                Contact
            </NavLink>
        </nav>
    </header>

    // <nav className="bg-blue-600 p-4">
    //   <div className="container mx-auto flex justify-between">
    //     <h1 className="text-white text-2xl font-bold">Yale Real Estate Group</h1>
    //     <ul className="flex space-x-4">
    //       <li><Link className="text-white hover:text-gray-300" to="/">Home</Link></li>
    //       <li><Link className="text-white hover:text-gray-300" to="/about">About Us</Link></li>
    //       <li><Link className="text-white hover:text-gray-300" to="/join">Join Us</Link></li>
    //       <li><Link className="text-white hover:text-gray-300" to="/contact">Contact Us</Link></li>
    //       <li><Link className="text-white hover:text-gray-300" to="/team">Team Members</Link></li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;
