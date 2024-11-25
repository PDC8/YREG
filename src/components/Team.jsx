import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const teamMembers = [
  {
    name: 'Lydia',
    title: 'position',
    image: 'https://via.placeholder.com/150',
    linkedin: '', 
  },
  {
    name: 'Patrick',
    title: 'position',
    image: 'https://via.placeholder.com/150',
    linkedin: '',
  },
  {
    name: 'Henry',
    title: 'position',
    image: 'https://via.placeholder.com/150',
    linkedin: '',
  },
  {
    name: 'Bradely',
    title: 'position',
    image: 'https://via.placeholder.com/150',
    linkedin: '',
  },
  {
    name: 'Russel',
    title: 'position',
    image: 'https://via.placeholder.com/150',
    linkedin: '',
  },
  {
    name: 'Neil',
    title: 'position',
    image: 'https://via.placeholder.com/150',
    linkedin: '',
  },
  
];

const Team = () => {
  return (
    <div className="mt-16 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-16 text-center">
            Meet The Board
        </h2>

      <div className="flex justify-center mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col mb-16">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-72 h-96 mb-4 rounded-md" 
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
              <a href={member.linkedin} className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin}/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
