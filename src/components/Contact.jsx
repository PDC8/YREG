import React from 'react';

const teamMembers = [
  {
    name: 'Lydia',
    title: 'position',
    image: 'https://via.placeholder.com/150', // Replace with actual image path
  },
  {
    name: 'Patrick',
    title: 'position',
    image: 'https://via.placeholder.com/150', // Replace with actual image path
  },
  {
    name: 'Henry',
    title: 'position',
    image: 'https://via.placeholder.com/150', // Replace with actual image path
  },
  {
    name: 'Bradely',
    title: 'position',
    image: 'https://via.placeholder.com/150', // Replace with actual image path
  },
  // Add more team members as needed
];

const Contact = () => {
  return (
    <section className=" py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-8 text-center">
            Meet the Team
        </h2>
      <div className="flex justify-center mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-72 h-96 mb-4 rounded-md" // Square image with fixed height
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
