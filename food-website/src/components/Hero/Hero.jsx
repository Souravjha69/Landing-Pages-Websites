// import React from "react";
import FoodPng from "../../assets/food/food.png";
import Spoon from "../../assets/food/spoon.png";
import Banana from "../../assets/food/banana2.png";
import Leaf from "../../assets/food/leaf.png";
function Hero () {
    return (
        <main>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols2
                gap-12 lg:gap-24 place-items-center justify-between" >
                    {/* text content here */}
                    <div>
                        <h1 className="relative text-5xl lg:text-7xl
                        xl:text8xl font-bold uppercase">Yummy

                            <img src={Leaf} alt="/" className="absolute w-[50px] top-0 right-0 "/>
                        </h1>
                        <h1>BREAKFAST</h1>
                    </div>
                    {/* Images here */}
                </div>
            </div>
        </main>
    );
}

export default Hero;