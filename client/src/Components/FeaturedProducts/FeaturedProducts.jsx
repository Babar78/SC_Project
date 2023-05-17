import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

function FeaturedProducts() {
  //Cards Details
  const cardInfo = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/3156217/pexels-photo-3156217.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Black Leather Jacket",
      style: "Minimal Design",
      size: "Small",
      color: "Black",
      price: "65",
      category: "jacket",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2765557/pexels-photo-2765557.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Blue Denim Jacket",
      style: "Modern Design",
      size: "Medium",
      color: "Blue",
      price: "75",
      category: "jacket",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Sky Blue Denim Jacket",
      style: "Classic Design",
      size: "Large",
      color: "Black",
      price: "85",
      category: "jacket",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/14389775/pexels-photo-14389775.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Black hoodie for men",
      style: "Modern Design",
      size: "Extra Large",
      color: "Black",
      price: "95",
      category: "jacket",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/9561299/pexels-photo-9561299.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Quantum Enigma",
      style: "Classic Design",
      size: "Small",
      color: "Black",
      price: "95",
      category: "watch",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "NovaGlo Masterpiece",
      style: "Classic Design",
      size: "Medium",
      color: "Black",
      price: "72",
      category: "watch",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/11638635/pexels-photo-11638635.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Eclipse Horizon",
      style: "Classic Design",
      size: "Medium",
      color: "Black",
      price: "50",
      category: "watch",
    },
    {
      id: 8,
      image:
        "https://images.pexels.com/photos/13548995/pexels-photo-13548995.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Vanguard ChronoTech",
      style: "Classic Design",
      size: "Large",
      color: "Brown",
      price: "45",
      category: "watch",
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/3613388/pexels-photo-3613388.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Regal Elegance",
      style: "Slim Fit",
      size: "Large",
      color: "Black",
      price: "145",
      category: "suit",
    },
    {
      id: 10,
      image:
        "https://images.pexels.com/photos/4566871/pexels-photo-4566871.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Feminine Grace",
      style: "Slim Fit",
      size: "Large",
      color: "Pink",
      price: "120",
      category: "suit",
    },
    {
      id: 11,
      image:
        "https://images.pexels.com/photos/7083673/pexels-photo-7083673.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern Maverick",
      style: "Classic Fit",
      size: "Large",
      color: "Gray",
      price: "160",
      category: "suit",
    },
    {
      id: 12,
      image:
        "https://images.pexels.com/photos/5411335/pexels-photo-5411335.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Midnight Royale",
      style: "Classic Design",
      size: "Large",
      color: "White",
      price: "110",
      category: "suit",
    },
    {
      id: 13,
      image:
        "https://images.pexels.com/photos/1147377/pexels-photo-1147377.png?auto=compress&cs=tinysrgb&w=600",
      description: "Black Checkered Shirt",
      style: "Casual",
      size: "Large",
      color: "Black",
      price: "20",
      category: "shirt",
    },
    {
      id: 14,
      image:
        "https://img.freepik.com/free-photo/young-man-with-bengal-fire-sticks-hands_23-2147989971.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=ais",
      description: "Red Dotted Shirt",
      style: "Casual",
      size: "X-Large",
      color: "Red",
      price: "10",
      category: "shirt",
    },
    {
      id: 15,
      image:
        "https://img.freepik.com/free-photo/elegant-young-handsome-man-studio-fashion-portrait_1301-3973.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=ais",
      description: "Red Lining Shirt",
      style: "Casual",
      size: "X-Large",
      color: "Red",
      price: "12",
      category: "shirt",
    },
    {
      id: 16,
      image:
        "https://images.pexels.com/photos/14709323/pexels-photo-14709323.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Black Hvaein Shirt",
      style: "Casual",
      size: "X-Large",
      color: "Black",
      price: "12",
      category: "shirt",
    },
    {
      id: 17,
      image:
        "https://img.freepik.com/free-photo/yellow-t-shirt-with-mountain-middle-picture-forest-bottom_1340-37687.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=sph",
      description: "Yellow Print Shirt",
      style: "Casual Wear",
      size: "X-Large",
      color: "Yellow",
      price: "5",
      category: "t-shirt",
    },
    {
      id: 18,
      image:
        "https://img.freepik.com/free-photo/man-black-shirt-with-word-unnana-it_1340-25483.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=ais",
      description: "Black T-Shirt",
      style: "Gym Wear",
      size: "X-Large",
      color: "Black",
      price: "5",
      category: "t-shirt",
    },
    {
      id: 19,
      image:
        "https://images.pexels.com/photos/4255642/pexels-photo-4255642.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Red T-Shirt",
      style: "Street Wear",
      size: "Small",
      color: "Red",
      price: "8",
      category: "t-shirt",
    },
    {
      id: 20,
      image:
        "https://images.pexels.com/photos/5996936/pexels-photo-5996936.png?auto=compress&cs=tinysrgb&w=600",
      description: "Beautiful Purple T-Shirt",
      style: "Street Wear",
      size: "Large",
      color: "Purple",
      price: "8",
      category: "t-shirt",
    },
    {
      id: 21,
      image:
        "https://img.freepik.com/free-photo/bff-printed-red-hoodie_53876-105408.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=sph",
      description: "Simle Red Hoodie",
      style: "Pullover Hoodie",
      size: "Large",
      color: "Red",
      price: "18",
      category: "hoodie",
    },
    {
      id: 22,
      image:
        "https://img.freepik.com/free-photo/man-yellow-hoodie-streetwear-men-s-apparel-fashion_53876-105536.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=sph",
      description: "Yellow Men Hoodie",
      style: "Pullover Hoodie",
      size: "Small",
      color: "Yellow",
      price: "15",
      category: "hoodie",
    },
    {
      id: 23,
      image:
        "https://img.freepik.com/free-photo/white-hoodie-man-with-green-pants-city_53876-119827.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=sph",
      description: "White Men Hoodie",
      style: "Pullover Hoodie",
      size: "Small",
      color: "Yellow",
      price: "15",
      category: "hoodie",
    },
    {
      id: 24,
      image:
        "https://img.freepik.com/free-photo/jeans_1203-8093.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=sph",
      description: "Blue Jeans Men",
      style: "Straight Leg",
      size: "Large",
      color: "Blue",
      price: "25",
      category: "jeans",
    },
    {
      id: 25,
      image:
        "https://images.pexels.com/photos/6062228/pexels-photo-6062228.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Black Ripped Jeans",
      style: "Slim Fit",
      size: "Large",
      color: "Black",
      price: "25",
      category: "jeans",
    },
    {
      id: 26,
      image:
        "https://images.pexels.com/photos/5996936/pexels-photo-5996936.png?auto=compress&cs=tinysrgb&w=600",
      description: "Blue Jeans for Women",
      style: "Oversized",
      size: "Large",
      color: "Blue",
      price: "17",
      category: "jeans",
    },
    {
      id: 27,
      image:
        "https://images.pexels.com/photos/7045178/pexels-photo-7045178.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Dark blue jean",
      style: "Slim Fit",
      size: "Large",
      color: "Blue",
      price: "17",
      category: "jeans",
    },
  ];

  //Active Button State
  const [activeButton, setActiveButton] = useState("jacket");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <h1 className="mt-20 mb-4 px-24 text-3xl font-bold text-gray-700">
        Featured Collection
      </h1>
      <div className="flex justify-center">
        <div className="inline-flex rounded-md shadow-sm my-4" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l ${
              activeButton === "jacket"
                ? "z-10 bg-gray-600 text-orange-400 ring-2 ring-orange-400"
                : "bg-gray-700 border-gray-600 border-2 text-white"
            }`}
            name="jacket"
            onClick={() => handleButtonClick("jacket")}
          >
            JACKETS
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${
              activeButton === "watch"
                ? "z-10 bg-gray-600 text-orange-400 ring-2 ring-orange-400"
                : "bg-gray-700 border-gray-600 border-2 text-white"
            }`}
            name="watch"
            onClick={() => handleButtonClick("watch")}
          >
            WATCH
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${
              activeButton === "suit"
                ? "z-10 bg-gray-600 text-orange-400 ring-2 ring-orange-400"
                : "bg-gray-700 border-gray-600 border-2 text-white"
            }`}
            name="suit"
            onClick={() => handleButtonClick("suit")}
          >
            SUITS
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${
              activeButton === "shirt"
                ? "z-10 bg-gray-600 text-orange-400 ring-2 ring-orange-400"
                : "bg-gray-700 border-gray-600 border-2 text-white"
            }`}
            name="shirt"
            onClick={() => handleButtonClick("shirt")}
          >
            SHIRTS
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${
              activeButton === "t-shirt"
                ? "z-10 bg-gray-600 text-orange-400 ring-2 ring-orange-400"
                : "bg-gray-700 border-gray-600 border-2 text-white"
            }`}
            name="t-shirt"
            onClick={() => handleButtonClick("t-shirt")}
          >
            T-SHIRTS & POLOS
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${
              activeButton === "hoodie"
                ? "z-10 bg-gray-600 text-orange-400 ring-2 ring-orange-400"
                : "bg-gray-700 border-gray-600 border-2 text-white"
            }`}
            name="hoodie"
            onClick={() => handleButtonClick("hoodie")}
          >
            HOODIE
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r ${
              activeButton === "jeans"
                ? "z-10 bg-gray-600 text-orange-400 ring-2 ring-orange-400"
                : "bg-gray-700 border-gray-600 border-2 text-white"
            }`}
            name="jeans"
            onClick={() => handleButtonClick("jeans")}
          >
            JEANS
          </button>
        </div>
      </div>
      <ProductCard cardInfo={cardInfo} activeButton={activeButton} />
    </>
  );
}

export default FeaturedProducts;
