import React from 'react'

const About = () => {
    const about = [
        { title: 'Curriculum', description: 'A ground-up teaching of all things real estate', image: 'https://static.wixstatic.com/media/10a932_2d15724d14c642e7a35a680770af016c~mv2.jpg/v1/fill/w_1512,h_819,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/10a932_2d15724d14c642e7a35a680770af016c~mv2.jpg' },
        { title: 'Speaker Series', description: 'Converse with firms and industry leaders driving the real estate industry', image: 'https://static.wixstatic.com/media/10a932_26b617e6619f47dd898762fef756fd0f~mv2.jpg/v1/fill/w_1512,h_757,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/10a932_26b617e6619f47dd898762fef756fd0f~mv2.jpg' },
        { title: 'Past Events', description: 'Private tour of the Rockefeller Center, Visits to KKR\'s NYC headquarters, YSOM real estate convetion, and MUCH MORE', image: 'https://static.wixstatic.com/media/10a932_6fd3c5c0f1a9482bba796e5077c1ca9c~mv2.jpg/v1/fill/w_1512,h_662,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/10a932_6fd3c5c0f1a9482bba796e5077c1ca9c~mv2.jpg' },
        { title: 'Community', description: ' A passionate, friendly, and vibrant family', image: 'https://static.wixstatic.com/media/10a932_2b2fc263093b4095bc81850e5d8f9e1c~mv2.jpg/v1/fill/w_1512,h_675,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/10a932_2b2fc263093b4095bc81850e5d8f9e1c~mv2.jpg' },
    ];
    return (
        <div className="relative mx-auto">
            <img src="https://static.wixstatic.com/media/10a932_04022d2d4fdb4eedaba071d09954f903~mv2.jpg/v1/fill/w_2752,h_1380,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/10a932_04022d2d4fdb4eedaba071d09954f903~mv2.jpg"
                className=" min-h-[630px] w-full h-auto object-cover rounded-lg mb-8"
            />

            <div className="grid grid-cols-2">
                {about.map((event, index) => (
                    <div className="col-span-2 flex">
                        {/* Left Column */}
                        {index % 2 == 0 ? (
                            <>
                                <div className="flex-1 flex justify-center items-center text-center">
                                    <div>
                                        <h4 className="text-xl font-semibold">{event.title}</h4>
                                        <p className="text-gray-600">{event.description}</p>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <img src={event.image}/>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex-1">
                                    <img src={event.image}/>
                                </div>
                                <div className="flex-1 flex justify-center items-center text-center">
                                    <div>
                                        <h4 className="text-xl font-semibold">{event.title}</h4>
                                        <p className="text-gray-600">{event.description}</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>





    )
}

export default About