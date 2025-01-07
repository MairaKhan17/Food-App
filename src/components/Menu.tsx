import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./Menucard";

const menuData = [
  {
    img: "/cake.avif",
    title: "Delicious Cake",
    desc: "2x rich chocolate, 1x creamy frosting",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tomato sauce, 1x parmesan",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Margherita Delight",
    desc: "2x fresh basil, 1x mozzarella",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Spicy Pepperoni Supreme",
    desc: "2x spicy pepperoni, 1x cheese",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Veggie Garden Medley",
    desc: "2x bell peppers, 1x olives",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "BBQ Chicken Fiesta",
    desc: "2x grilled chicken, 1x BBQ sauce",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Four Cheese Extravaganza",
    desc: "2x mozzarella, 1x blue cheese",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
];

const Menu = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700">
        Explore our diverse menu, featuring a curated selection of dishes to suit every taste
          <br />
          from hearty entrées and light salads to refreshing juices and decadent desserts.
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="bg-accent text-white p-1">Appetizers</li>
        <li>Breakfast</li>
        <li>Salads</li>
        <li>Meat & Fish</li>
        <li>Soup</li>
        <li>Desert</li>
        <li>Drinks</li>
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto"
            src="/menu_left.png"
            width={500}
            height={500}
            alt="dish"
          />
        </div>

        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {menuData.map((item, index) => (
            <MenuCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;