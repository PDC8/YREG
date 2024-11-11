import React from 'react';
import KKR from '/Users/peidongchen/Projects/YREG/public/KKR-Logo.webp'
import Blackstone from '/Users/peidongchen/Projects/YREG/public/Blackstone-Logo.webp'
import Tishman from '/Users/peidongchen/Projects/YREG/public/Tishman-Logo.webp'
const firm_visits = [
    {
        name: 'KKR',
        logo: KKR,
    },
    {
        name: 'Blackstone',
        logo: Blackstone,
    },
    {
        name: 'Tishman Speyer',
        logo: Tishman,
    }
    
  ];

const Home = () => {
    return (
        <div>
            <div className="relative overflow-x-auto">
                <img 
                    src="https://static.wixstatic.com/media/10a932_04022d2d4fdb4eedaba071d09954f903~mv2.jpg/v1/fill/w_2752,h_1380,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/10a932_04022d2d4fdb4eedaba071d09954f903~mv2.jpg"
                    className=" min-h-[630px] w-full h-auto object-cover rounded-lg mb-8"
                />
                <div className="absolute bottom-32 left-24 flex">
                    <div className="bg-blue-1 bg-opacity-80 p-10 pr-48 text-white min-w-[600px] w-full">
                        <h1 className="text-6xl font-bold mb-4">Yale Real <br /> Estate Group</h1>
                    </div>
                </div>
            </div>

            <div className="justify-around mb-16 flex overflow-x-auto">
                <h2 className="text-4xl text-nowrap font-bold mb-6">Who <br />We Are</h2>
                <p className="text-lg text-gray-700 w-[500px]">
                Yale Real Estate Group (YREG) is Yale's first and only real estate organization on campus.
                Through a combination of cirriculum, speaker series, and other events, YREG aims to foster a
                vibrant community in which members come together to cultivate their interest in real estate investment, development, and design.
                </p>
            </div>


            <div className="mb-16 flex overflow-x-auto justify-around">
                <img 
                src="https://placecats.com/millie/300/150" 
                className="min-w-[400px] min-h-[200px] w-auto h-auto object-cover mb-8 flex">
                </img>
                <div className="flex flex-col">
                    <h2 className="text-4xl font-bold text-nowrap">What We Do</h2>
                    <p className="text-lg text-gray-700 w-[500px] mt-2">
                    YREG organizes a variety of events and programs such as guest speaker panels, networking events, 
                    site visits to real estate developments, and internship opportunities. 
                    We aim to connect students with professionals and provide insights into different sectors within the real estate industry.
                    </p>
                </div>
            </div>

            <div>
                <h2 className= "text-4xl font-bold text-center"> Recent Firm Visits</h2>
                
                <div className="flex flex-wrap justify-center gap-8">
                    {firm_visits.map((company, index) => (
                        <div key={index} className="w-1/3 md:w-1/4 lg:w-1/6">
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="object-contain h-24 mx-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className= "text-4xl text-center"> After YREG</h2>
            </div>
        </div>
    );
}

export default Home;