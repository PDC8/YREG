import React from 'react'

const Join = () => {
    const timeline = [
        { phase: 'Info Session', date: 'January 15, 2024', description: 'Learn about our mission and team.' },
        { phase: 'Applications Due', date: 'January 30, 2024', description: 'Submit your application online.' },
        { phase: 'Interviews', date: 'February 10-15, 2024', description: 'Participate in a one-on-one interview.' },
        { phase: 'Final Decision', date: 'February 20, 2024', description: 'Receive the final results.' },
    ];

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">Join Us</h2>
            <img src="https://via.placeholder.com/800x400" alt="Join Us" className="mt-4 rounded mb-6" />


            <div className="grid grid-cols-3 gap-4">
                
                {/* Left Column */}
                <div className="col-span-1 flex flex-col justify-center">
                    {timeline.map((event, index) => (
                        <div key={index} className="text-right pr-4 mb-10">
                            {index % 2 === 0 && (
                                <div>
                                    <h4 className="text-xl font-semibold">{event.phase}</h4>
                                    <p className="text-gray-600">{event.date}</p>
                                    <p className="text-gray-700">{event.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Middle Column (Timeline) */}
                <div className="col-span-1 flex flex-col items-center relative">
                    {timeline.map((event, index) => (
                        <div key={index} className="relative flex flex-col items-center">
                            {/* Dot */}
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold z-10">
                                {index + 1}
                            </div>
                            {/* Line */}
                            {index < timeline.length - 1 && (
                                <div className="h-20 w-1 bg-green-500"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="col-span-1 flex flex-col justify-center">
                    {timeline.map((event, index) => (
                        <div key={index} className="text-left pl-4">
                            {index % 2 !== 0 && (
                                <div>
                                    <h4 className="text-xl font-semibold">{event.phase}</h4>
                                    <p className="text-gray-600">{event.date}</p>
                                    <p className="text-gray-700">{event.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Join