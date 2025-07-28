// api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/properties'; // ✅ Matches server.js route

// Fetch all properties (for buyers)
export const fetchAllProperties = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};

// Create new property (for sellers)
export const createProperty = async (propertyData) => {
  try {
    const response = await axios.post(BASE_URL, propertyData);
    return response.data;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
};

// Alias for compatibility with PropertyDetail.jsx
export const uploadProperty = createProperty;
