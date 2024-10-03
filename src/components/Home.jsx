import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <img 
                    src="https://via.placeholder.com/1600x600"
                    className="min-w-[1120px] min-h-[630px] w-full h-auto object-cover rounded-lg mb-8"
                />
            </div>

            <section className="mb-16">
                <h2 className="text-4xl font-bold text-center mb-6">Who We Are</h2>
                <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
                Yale Real Estate Group (YREG) is Yale's first and only real estate organization on campus.
                Through a combination of cirriculum, speaker series, and other events, YREG aims to foster a 
                vibrant community in which members come together to cultivate their interest in real estate investment, development, and design.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-4xl font-bold text-center mb-6">What Does YREG Do?</h2>
                <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
                YREG organizes a variety of events and programs such as guest speaker panels, networking events, 
                site visits to real estate developments, and internship opportunities. 
                We aim to connect students with professionals and provide insights into different sectors within the real estate industry.
                </p>
            </section>
        </div>
    );
}

export default Home;