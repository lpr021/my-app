import React from 'react';
import './FeaturedListings.css';

const listings = [
  {
    title: "2BHK Elegant Flat",
    location: "Benz Circle",
    price: "₹45 Lakhs",
    image: "https://www.zadinteriors.com/blog/wp-content/uploads/2020/09/22.jpg",
  },
  {
    title: "3BHK Gated Community",
    location: "Governorpet",
    price: "₹68 Lakhs",
    image: "https://www.keralarealestate.com/image/lg/property/property/2021/06/05/085516275/images/tgfhgh.jpg",
  },
  {
    title: "Luxury Villa",
    location: "Gannavaram",
    price: "₹1.5 Cr",
    image: "https://wallpapercave.com/wp/wp9359283.jpg",
  },
  {
    title: "Residential Plot",
    location: "Enikepadu",
    price: "₹32 Lakhs",
    image: "https://i.pinimg.com/originals/76/e3/5e/76e35e505d25d93a334fa55e16207a56.jpg",
  },
  {
    title: "2BHK Premium Apartment",
    location: "Auto Nagar",
    price: "₹52 Lakhs",
    image: "https://media.designcafe.com/wp-content/uploads/2020/09/25151904/2bhk-apartment-living-room-interior-design.jpg",
  },
  {
    title: "High-end Villa",
    location: "Poranki",
    price: "₹1.28 Cr",
    image: "https://wallpaperaccess.com/full/4722358.jpg",
  },
  {
    title: "Modern 3BHK",
    location: "Currency Nagar",
    price: "₹72 Lakhs",
    image: "https://thearchitectsdiary.com/wp-content/uploads/2017/12/IMGL2478-copy-Large.jpg",
  },
  {
    title: "Residential Plot",
    location: "Kanuru",
    price: "₹26 Lakhs",
    image: "https://miro.medium.com/v2/resize:fit:360/1*yLWDz5TBgY1NQSzxG0HD5Q.jpeg",
  },
  {
    title: "Studio Apartment",
    location: "Pinnamaneni Polyclinic",
    price: "₹42 Lakhs",
    image: "https://www.idesignarch.com/wp-content/uploads/Taipei-Studio-Apartment_1.jpeg",
  },
  {
    title: "Luxury 4BHK Villa",
    location: "Prasadampadu",
    price: "₹2 Cr",
    image: "https://luxurystays.in/villas/villa-sies/sies-18.jpg",
  },
  {
    title: "3BHK Classic Flat",
    location: "Vidyadharapuram",
    price: "₹66 Lakhs",
    image: "https://media.designcafe.com/wp-content/uploads/2020/06/23184157/3bhk-flat-living-room-interior-design-bangalore-bannerghatta-road.jpg",
  },
  {
    title: "2BHK Family Flat",
    location: "Satyanarayanapuram",
    price: "₹48 Lakhs",
    image: "https://assets.architecturaldigest.in/photos/600844ae274aca243711c732/16:9/w_1280,c_limit/Mumbai-2-bhk-nordic-interior-design-1366x768.jpg",
  },
];

const FeaturedListings = () => {
  return (
    <section className="featured-listings">
      <h2 className="heading">🏡 Featured Listings in Vijayawada</h2>
      <div className="cards-container">
        {listings.map((property, index) => (
          <div className="property-card" key={index}>
            <div className="image-wrapper">
              <img src={property.image} alt={property.title} />
            </div>
            <div className="property-info">
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <span>{property.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;
