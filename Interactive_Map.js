// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13); // Adjust initial coordinates and zoom as needed

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Property data
var properties = [
    {
        name: "Luxury Villa",
        type: "Villa",
        description: "A beautiful villa with a swimming pool and ocean view.",
        contact: "123-456-7890",
        coordinates: [51.505, -0.09],
        imageUrl: "LUXURY VILLA.jpeg" 
    },
    {
        name: "Modern Apartment",
        type: "Apartment",
        description: "A stylish apartment in the heart of the city.",
        contact: "555-123-4567",
        coordinates: [51.515, -0.1],
        imageUrl: "apartment.2.jpg"
    },
    {
        name: "Cozy Cottage",
        type: "Cottage",
        description: "A charming cottage in the countryside.",
        contact: "789-654-1230",
        coordinates: [51.495, -0.08],
        imageUrl: "vecteezy_cottage.jpg"
    },
    {
        name: "Spacious House",
        type: "House",
        description: "A large family house with a beautiful garden.",
        contact: "321-987-6540",
        coordinates: [51.49, -0.07],
        imageUrl: "vecteezy_house.jpg"
    },
    {
        name: "Elegant Condo",
        type: "Condo",
        description: "A modern condo with stunning city views.",
        contact: "888-111-2222",
        coordinates: [51.520, -0.12],
        imageUrl: "vecteezy_condo.jpg"
    },
    {
        name: "Charming Bungalow",
        type: "Bungalow",
        description: "A quaint bungalow with a cozy atmosphere.",
        contact: "444-555-6666",
        coordinates: [51.475, -0.15],
        imageUrl: "vecteezy_a-house-in-the-middle-of-a-lake_47991708.jpeg"
    },
    {
        name: "Stylish Townhouse",
        type: "Townhouse",
        description: "A stylish townhouse with modern amenities.",
        contact: "333-444-5555",
        coordinates: [51.48, -0.09],
        imageUrl: "vecteezy_town house.jpeg"
    },
    {
        name: "Luxury Penthouse",
        type: "Penthouse",
        description: "A luxurious penthouse with a rooftop terrace.",
        contact: "222-333-4444",
        coordinates: [51.510, -0.14],
        imageUrl: "vecteezy_2d-rendering-of-an-impressive-contemporary-villa-in-exposed_32318334.jpg"
    },
    {
        name: "Rustic Farmhouse",
        type: "Farmhouse",
        description: "A rustic farmhouse set on a sprawling estate.",
        contact: "999-888-7777",
        coordinates: [51.490, -0.20],
        imageUrl: "vecteezy_mountain-view-from-cozy-log-cabin-retreat_29622079 copy.jpg"
    },
    {
        name: "Urban Loft",
        type: "Loft",
        description: "A trendy loft in an industrial-style building.",
        contact: "666-555-4444",
        coordinates: [51.525, -0.11],
        imageUrl: "vecteezy_a-balcony-with-a-swimming-pool-and-sunset-view_22398747.jpg"
    }
];

// Loop through properties and add markers
properties.forEach(function(property) {
    var marker = L.marker(property.coordinates).addTo(map);

    // Create a popup with property details
    marker.bindPopup(`
        <div>
            <h3>${property.name} (${property.type})</h3>
            <p>${property.description}</p>
            <p><strong>Contact:</strong> ${property.contact}</p>
            <img src="${property.imageUrl}" alt="${property.name}" style="width:100px;height:auto;" />
        </div>
    `);
});

let lastScrollTop = 0; // Keeps track of the last scroll position
const header = document.querySelector('header'); // Select the header element

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = '-100px'; // Hide the header (adjust the value based on your header height)
    } else {
        // Scrolling up
        header.style.top = '0'; // Show the header
    }
    
    lastScrollTop = scrollTop; // Update the last scroll position
});

//JavaScript to toggle the menu on mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

