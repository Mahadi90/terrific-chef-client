import React from 'react';
import Lottie from "lottie-react";
import bannerImg from '../../public/banner_img.json'
import { useLoaderData } from 'react-router-dom';
import SingleChef from './singleChef';

const Home = () => {

    // get chef data using useloader hook
    const chefDetails = useLoaderData()
    // console.log(chefDetails)

    return (
        <div>
            {/* banner section */}
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-4 lg:mx-12'>
                <div className='mt-14'>
                   <h1 className='text-5xl text-red-400 font-bold'>Wellcome to <span className='text-red-600'>TERRIFIC CHEF</span></h1>
                   <h4 className='text-xl text-red-500 my-2'>for unique Italian chef and Italian food</h4>
                   <p className='text-gray-600'>Food Blog by an Italian Food Blogger Vincenzo's Plate, details links to authentic Italian recipes, Italian cuisine and cooking methods and tasty recipes.</p>
                   <button className='bg-red-500 py-2 px-6 text-white hover:bg-white hover:text-red-500 border border-red-400 mt-4'>Learn More</button>
                   <button className='bg-white py-2 px-6 text-red-400 hover:bg-red-500 hover:text-white border border-red-500 ms-2 mt-4'>Contact</button>
                </div>
                <div>
                <Lottie className='w-[80%]' animationData={bannerImg} loop={true} />
                </div>
            </div>


            {/* chef section */}
            <div className='my-14'>
                <h2 className='text-red-500 text-4xl font-bold text-center my-6'>These are our best Italian chef</h2>
                <div className='mx-2 lg:mx-12 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {
                    chefDetails.map(singleChef => <SingleChef
                    key={singleChef.id}
                    singleChef={singleChef}
                    />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;