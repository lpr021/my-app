import React from 'react';
import './PropertyListings.css';

const PropertyListings = () => {
  const apartments = [
    {
      title: '2BHK Elegant Apartment',
      location: 'Benz Circle, Vijayawada',
      price: '₹45 Lakhs',
      image: 'https://www.zadinteriors.com/blog/wp-content/uploads/2020/09/21-1024x576.jpg'
    },
    {
      title: '3BHK Prime Flat',
      location: 'Governorpet, Vijayawada',
      price: '₹65 Lakhs',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/681457042.jpg?k=5c64d4f69e626fbd7448329d24225c84809d5a502ceffec5e77b8355c5856e1b&o=&hp=1'
    },
    {
      title: 'Luxury Apartment',
      location: 'Suryaraopet, Vijayawada',
      price: '₹82 Lakhs',
      image: 'https://thearchitectsdiary.com/wp-content/uploads/2018/03/2-bhk-interior-design-2.jpg'
    },
    {
      title: 'Budget Apartment',
      location: 'Gollapudi, Vijayawada',
      price: '₹35 Lakhs',
      image: 'https://tse4.mm.bing.net/th/id/OIP.kywWTKAu10faRDWg4Q48QwHaEK?pid=Api&P=0&h=180'
    },
    {
      title: 'Modern 2BHK Flat',
      location: 'Auto Nagar, Vijayawada',
      price: '₹50 Lakhs',
      image: 'https://assets.architecturaldigest.in/photos/600845f5e6e1f64740189662/16:9/w_2560%2Cc_limit/Mumbai-2-BHK-Limehouse-Design-Studio-1366x768.jpg'
    },
    {
      title: 'Spacious 3BHK Apartment',
      location: 'Patamata, Vijayawada',
      price: '₹70 Lakhs',
      image: 'https://tse3.mm.bing.net/th/id/OIP.8yoboskwKoztRfUFLE4OogHaFj?pid=Api&P=0&h=180'
    }
  ];

  const villas = [
    {
      title: 'Luxury Villa',
      location: 'Gannavaram, Vijayawada',
      price: '₹1.5 Cr',
      image: 'https://p4.wallpaperbetter.com/wallpaper/150/385/134/trees-design-house-lawn-wallpaper-preview.jpg'
    },
    {
      title: 'Premium Duplex Villa',
      location: 'Kanuru, Vijayawada',
      price: '₹1.2 Cr',
      image: 'https://wallpaperaccess.com/full/3921855.jpg'
    },
    {
      title: '3BHK Villa with Lawn',
      location: 'Enikepadu, Vijayawada',
      price: '₹1 Cr',
      image: 'https://gos3.ibcdn.com/0037051b-565b-489c-b970-0554b7c88314.png'
    },
    {
      title: 'Contemporary Villa',
      location: 'Poranki, Vijayawada',
      price: '₹1.3 Cr',
      image: 'https://wallpapercrafter.com/desktop4/1187391-design-house-lawn-Villa-pool-modern-houses-luxury.jpg'
    },
    {
      title: 'Elegant Garden Villa',
      location: 'Gunadala, Vijayawada',
      price: '₹1.6 Cr',
      image: 'https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg'
    },
    {
      title: 'Classic Family Villa',
      location: 'Bhavanipuram, Vijayawada',
      price: '₹1.4 Cr',
      image: 'https://www.chennaidreamhomes.com/wp-content/uploads/2024/04/Type1-villas-850x570.jpg'
    }
  ];

  const plots = [
    {
      title: 'Open Residential Plot',
      location: 'Ibrahimpatnam, Vijayawada',
      price: '₹25 Lakhs',
      image: 'https://www.shutterstock.com/image-photo/land-plot-aerial-view-include-260nw-1906603717.jpg'
    },
    {
      title: 'Corner Plot 200 Sq.Yards',
      location: 'Gollapudi, Vijayawada',
      price: '₹32 Lakhs',
      image: 'https://www.imaginationshaper.com/product_images/corner-plot-house-design731.jpg'
    },
    {
      title: 'East Facing Plot',
      location: 'Vidhyadharapuram, Vijayawada',
      price: '₹28 Lakhs',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhY8ot2b4KL0hYjmQQLZBdEvVX0CLVy1hlWmI_N7dwjIH7v8i3KTrH2eC_2qz7XcsMtTtBup6Nkqqo8FQGxx6Djmi2uRJJxGwgpYK-c2JFiClNoUWi5mCZrnjTixBSluA7HtbG0ytoL8WU/s1600/grand-kerala-home-design.jpg'
    },
    {
      title: 'DTCP Approved Plot',
      location: 'Penamaluru, Vijayawada',
      price: '₹35 Lakhs',
      image: 'https://imagecdn.99acres.com/media1/30941/8/618828047M-1752474126351.webp'
    },
    {
      title: 'Premium Plot 300 Sq.Yards',
      location: 'Ramavarappadu, Vijayawada',
      price: '₹40 Lakhs',
      image: 'https://static.vecteezy.com/system/resources/previews/014/445/766/non_2x/land-plot-for-building-house-aerial-view-land-field-with-pins-pin-location-for-housing-subdivision-residential-development-owned-sale-rent-buy-or-investment-home-or-house-expand-the-city-suburb-free-photo.JPG'
    },
    {
      title: 'North Facing Plot',
      location: 'Poranki, Vijayawada',
      price: '₹36 Lakhs',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_jL7nCDwIKKZXimLdp9B7436cjEJxOniMg&s'
    }
  ];

  const renderProperties = (list) =>
    list.map((property, index) => (
      <div key={index} className="property-card">
        <img src={property.image} alt={property.title} className="property-image" />
        <div className="property-content">
          <h3 className="property-title">{property.title}</h3>
          <p className="property-location">{property.location}</p>
          <p className="property-price">{property.price}</p>
          <button className="property-button">View Details</button>
        </div>
      </div>
    ));

  return (
    <div className="property-listing">
      <h1 className="main-heading">🏡 Property Listings</h1>

      <div className="property-category">
        <h2 className="category-heading">Apartments</h2>
        <div className="property-grid">
          {renderProperties(apartments)}
        </div>
      </div>

      <div className="property-category">
        <h2 className="category-heading">Villas</h2>
        <div className="property-grid">
          {renderProperties(villas)}
        </div>
      </div>

      <div className="property-category">
        <h2 className="category-heading">Plots</h2>
        <div className="property-grid">
          {renderProperties(plots)}
        </div>
      </div>
    </div>
  );
};

export default PropertyListings;
