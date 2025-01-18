import React from 'react';
import Img2 from '../../assets/coffee2.png';

const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Espresso",
        description:
            "A rich, bold shot of coffee, brewed to perfection with intense flavor and a velvety crema.",
        aosDelay: "100",
    },
    {
        id: 2,
        img: Img2,
        name: "Americano",
        description:
            "A smooth, diluted espresso with hot water, offering a milder coffee flavor.",
        aosDelay: "300",
    },
    {
        id: 3,
        img: Img2,
        name: "Cappuccino",
        description:
            "A creamy blend of espresso, steamed milk, and frothy foam, perfect for a rich and velvety sip.",
        aosDelay: "500",
    },
]
const Services = () => {
    return <>
       <span id="Services"></span>
        <div>
            <div className="container">
                <div className="text-center mb-20">
                    <h1 className="text-4xl font-bold font-cursive text-gray-800 mt-5">Best Coffee For You</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols3 gap-14 md:gap-5 place-items-center">
                    {
                        ServicesData.map((data, index) => {
                            return (
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={data.aosDelay}
                                    key={index}
                                    className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative">
                                    <div>
                                        <img src={data.img} alt=""
                                            className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300" />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h1 className="text-xl font-bold">{data.name}</h1>
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    </>

}

export default Services;