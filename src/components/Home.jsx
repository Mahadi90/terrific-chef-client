import React from "react";
import Lottie from "lottie-react";
import bannerImg from "../../public/banner_img.json";
import { useLoaderData } from "react-router-dom";
import SingleChef from "./singleChef";
import slider1 from "../assets/images/cheff.webp";
import slider2 from "../assets/images/homes.webp";
import slider3 from "../assets/images/recep.jpg";


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
            <img src={slider1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 right-1/2 top-1/2">
              <h2 className="text-5xl font-bold ms-20 text-black">
                We Provide quality italian chef as you want
              </h2>
            </div>
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
            <img src={slider2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-2 lg:right-1/2 top-1/2">
              <h2 className="text-5xl ms-20 text-black font-bold">
                You will get quality food
              </h2>
            </div>
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
            <img src={slider3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 right-1/2 top-1/2">
              <h2 className="text-4xl ms-20 text-black font-bold ">
                Spicy Italian food available in every time
              </h2>
            </div>
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

      {/* About us section */}
      <div className="my-12">
        <h2 className="text-red-500 text-4xl font-bold text-center my-6">
          About Us
        </h2>
        <div className="mx-2 lg:mx-12 bg-red-500 rounded p-4 text-white">
          <p>
            Hi,wellcome to Terrific Chef and welcome to The Italian Recipes, dedicated to adapting
            the recipes and techniques of an Italian Chef for the home cook. we
            started this website back in 1999, with the purpose of keeping our
            father Paul Torre’s recipes alive after he retired from the
            restaurant business. When I started this website I was not much of a
            cook. Although I had worked in my father’s restaurant since I was a
            teenager, it was always in the front of the house as a waiter. The
            early process of trying to get recipes from a chef who did
            everything by feel was not easy. When we would ask him for amounts of
            ingredients I would get answers like “You know” and “Better too
            little than too much.” Eventually, we settled into a routine of
            cooking together with me taking the handfuls and pinches of
            ingredients from him, and measuring them. As we got more comfortable
            with cooking over the years, and getting together to cook became
            more difficult, we would discuss a dish with him then go off on my
            own to work out measurements and when I was satisfied, show him the
            recipe for approval and final editing. Sadly, my father passed away
            in 2011, so I no longer will have his direct input or advice on this
            website or life in general for that matter. He was not only a great
            chef, but a great father and I miss him dearly. However, his spirit
            will always be by my side in the kitchen, and I will always apply
            the sensibility about and principles of Italian cooking that he
            instilled in me. Being a chef was not just a job for my father, he
            truly had a passion for cooking and hospitality. This passion is
            something that I now share.
          </p>
          <h4 className="bg-white mt-2 py-2 px-6 text-red-500 rounded-md text-center font-bold">~TERRIFIC CHEF~</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
