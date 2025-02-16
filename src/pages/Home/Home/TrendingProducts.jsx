import { useEffect, useState } from 'react';
import Slider from 'react-slick'; // Importing the Slick carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaHeart, FaCartPlus, FaEye } from 'react-icons/fa'; // Importing React icons
import { Rating } from "@smastrom/react-rating"; // Importing Rating from smastrom

import "@smastrom/react-rating/style.css";  // Importing styles for the rating component

const TrendingProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Assuming the JSON file is in the public folder
        fetch('http://localhost:5000/products') 
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty array ensures the effect runs only once, when the component mounts

    // Slick Carousel settings
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // Number of items visible at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // 2 seconds interval
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <h2 className="text-center text-3xl font-semibold my-8">
                Trending Products
            </h2>
            <Slider {...settings}>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="px-2 mb-20"> {/* Add bottom margin */}
                            <div className="relative group product-card bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="product-image relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-60 object-cover"
                                    />
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-opacity-50 p-2 rounded-md">
                                        <button className="wishlist-btn p-2 bg-white rounded-full text-xl text-gray-700 hover:text-red-500">
                                            <FaHeart />
                                        </button>
                                        <button className="add-to-cart-btn p-2 bg-white rounded-full text-xl text-gray-700 hover:text-green-500">
                                            <FaCartPlus />
                                        </button>
                                        <button className="quick-view-btn p-2 bg-white rounded-full text-xl text-gray-700 hover:text-blue-500">
                                            <FaEye />
                                        </button>
                                    </div>
                                </div>
                                <div className="product-details p-4 space-y-1">
                                    <h3 className="text-xl font-semibold">{product.name}</h3>
                                    <p className="text-gray-600">Price: ${product.price}</p>
                                    <div className="flex items-center justify-start">
                                        {/* Display dynamic star rating with 1px gap between stars and left alignment */}
                                        <Rating
                                            value={product.rating} // Set product's rating
                                            readOnly // Makes it non-interactive
                                            className="text-yellow-400 h-6 w-7 mr-25 md:mr-44" // Added margin-right to create gap between stars
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </Slider>
        </div>
    );
};

export default TrendingProducts;
