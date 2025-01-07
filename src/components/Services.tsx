import React from 'react';
import Dash from "./Dash";
import ServicesCard from "./Servicescard"


const servicesData = [
    {
        img: "/services__1.png",
        title: "Professonal Kitchen",
        desc: "Our professional kitchen combines state-of-the-art equipment with expert craftsmanship to deliver top-quality culinary creations.",
    },
    {
        img: "/services__2.png",
        title: "Delivery",
        desc: "Enjoy fast, reliable delivery right to your doorstep",
    },
    {
        img: "/services__3.png",
        title: "juices List",
        desc: "Our fresh juices are a vibrant selection of pure, natural flavors to energize and refresh your day.",
    },
    {
        img: "/services__4.png",
        title: "Free Wifi",
        desc: "Enjoy complimentary Wi-Fi to stay connected while you relax and savor your meal.",
    },
];


const Services = () => {
    return (
        <div className="container pt-40">
            <div className="space-y-4 w-fit mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold">
                    Choose Best <span className="text-accent">Service</span>
                </h2>
                <p className="text-gray-700">
                    Experience our best-in-class service, where attention to detail and customer satisfaction are our top priorities,
                    <br />
                    ensuring a memorable dining experience every time.
                </p>
                <div className="w-fit mx-auto">
                    <Dash />
                </div>
            </div>

            <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
                {servicesData.map((item, index) => (
                    <ServicesCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>
        </div>
    )
}

export default Services;