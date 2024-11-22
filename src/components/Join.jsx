import React from 'react'

const Join = () => {
    const timeline = [
        { phase: 'Info Session', date: 'January 15, 2024', description: 'Learn about our mission and team.' },
        { phase: 'Applications Due', date: 'January 30, 2024', description: 'Submit your application online.' },
        { phase: 'Interviews', date: 'February 10-15, 2024', description: 'Participate in a one-on-one interview.' },
        { phase: 'Final Decision', date: 'February 20, 2024', description: 'Receive the final results.' },
    ];

    return (
        <div className="relative flex flex-col justify-center items-center">

            <img src="https://via.placeholder.com/800x400" className=" min-h-[630px] w-full h-auto object-cover rounded-lg mb-8"/>

            <h2 className="text-2xl items-center mb-10">Application Timeline</h2>

            <div className="grid grid-cols-3">
                {timeline.map((event, index) => (
                    <>
                        {/* Left Column */}
                        {index % 2 == 0 ? (
                            <div className="col-span-1 flex flex-col justify-center text-right pr-4">
                                <div>
                                    <h4 className="text-xl font-semibold">{event.phase}</h4>
                                    <p className="text-gray-600">{event.date}</p>
                                    <p className="text-gray-700">{event.description}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="col-span-1"></div> // Blank Box
                        )}

                        {/* Middle Column (Timeline) */}
                        <div className="col-span-1 flex flex-col items-center relative">
                            {/* Dot */}
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold z-10">
                                {index + 1}
                            </div>
                            {/* Line */}
                            {index < timeline.length && (
                                <div className="h-40 w-1 bg-green-500"></div>
                            )}
                        </div>

                        {/* Right Column */}
                        {index % 2 == 1 ? (
                            <div className="col-span-1 flex flex-col justify-center text-left pl-4">
                                <div>
                                    <h4 className="text-xl font-semibold">{event.phase}</h4>
                                    <p className="text-gray-600">{event.date}</p>
                                    <p className="text-gray-700">{event.description}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="col-span-1"></div> // Blank Box
                        )}
                    </>
                ))}
            </div>

            <button type="submit" className="w-80 h-20 bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 mb-20">
                    Apply Here
            </button>

            {/*Add More*/}

        </div>
    );
};

export default Join