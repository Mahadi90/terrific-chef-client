import React from "react";
import Lottie from "lottie-react";
import bannerImg from "../../public/banner_img.json";
import { useLoaderData } from "react-router-dom";
import SingleChef from "./singleChef";
import slider1 from '../assets/images/cheff.webp'
import slider2 from '../assets/images/homes.webp'
import slider3 from '../assets/images/recep.jpg'

const Home = () => {
  // get chef data using useloader hook
  const chefDetails = useLoaderData();
  // console.log(chefDetails)

  return (
    <div>
      {/* banner section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 lg:mx-12">
        <div className="mt-14">
          <h1 className="text-5xl text-red-400 font-bold">
            Wellcome to <span className="text-red-600">TERRIFIC CHEF</span>
          </h1>
          <h4 className="text-xl text-red-500 my-2">
            for unique Italian chef and Italian food
          </h4>
          <p className="text-gray-600">
            Food Blog by an Italian Food Blogger Vincenzo's Plate, details links
            to authentic Italian recipes, Italian cuisine and cooking methods
            and tasty recipes.
          </p>
          <button className="bg-red-500 py-2 px-6 text-white hover:bg-white hover:text-red-500 border border-red-400 mt-4">
            Learn More
          </button>
          <button className="bg-white py-2 px-6 text-red-400 hover:bg-red-500 hover:text-white border border-red-500 ms-2 mt-4">
            Contact
          </button>
        </div>
        <div>
          <Lottie className="w-[80%]" animationData={bannerImg} loop={true} />
        </div>
      </div>

      {/* chef section */}
      <div className="my-14">
        <h2 className="text-red-500 text-4xl font-bold text-center my-6">
          These are our best Italian chef
        </h2>
        <div className="mx-2 lg:mx-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {chefDetails.map((singleChef) => (
            <SingleChef key={singleChef.id} singleChef={singleChef} />
          ))}
        </div>
      </div>

      {/* services section */}
      <div className="my-12 mx-2 lg:mx-12">
        <h2 className="text-red-500 text-4xl font-bold text-center my-6">
          Our Services
        </h2>
        <div className="carousel w-full h-96">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={slider1}
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 right-1/2 top-1/2"><h2 className="text-5xl font-bold ms-20 text-black">We Provide quality italian chef as you want</h2></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={slider2}
              className="w-full"
            />
               <div className="absolute flex justify-between transform -translate-y-2 lg:right-1/2 top-1/2"><h2 className="text-5xl ms-20 text-black font-bold">You will get quality food</h2></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={slider3}
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 right-1/2 top-1/2"><h2 className="text-4xl ms-20 text-black font-bold ">Spicy Italian food available in every time</h2></div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
