import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


const Footer = () => {
  return (
    <div className="container flex justify-between">
        <p className="text-sm">
            © {new Date().getFullYear()} by Yale Real Estate Group
        </p>
        <div className="">
            <div className="space-x-4">
                <a href="mailto:yreg.contact@gmail.com" className="text-gray-400 hover:text-white" aria-label="Email">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>
                <a href="https://www.linkedin.com/company/yale-real-estate-group/" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a href="https://www.instagram.com/yreg_yale/" className="text-gray-400 hover:text-white" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
            </div>
        </div>
    </div>

  )
}

export default Footer