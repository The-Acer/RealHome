// Sample properties (in a real app, these would come from a database or API)
const properties = [
    { id: 1, name: 'Beautiful Waterfront Property', location: 'Miami, FL', price: '$1,200,000', img: 'images/property1.jpg' },
    { id: 2, name: 'Luxury Apartment in Downtown', location: 'New York, NY', price: '$2,500,000', img: 'images/property2.jpg' },
    { id: 3, name: 'Modern Family Home', location: 'Los Angeles, CA', price: '$950,000', img: 'images/property3.jpg' }
];

// Load wishlist from local storage
function loadWishlist() {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistContainer = document.getElementById('wishlist-items');
    wishlistContainer.innerHTML = ''; // Clear existing items

    savedWishlist.forEach(property => {
        const wishlistItem = createWishlistItem(property);
        wishlistContainer.appendChild(wishlistItem);
    });
}

// Create an individual wishlist item
function createWishlistItem(property) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('wishlist-item');

    const img = document.createElement('img');
    img.src = property.img;
    img.alt = property.name;
    img.classList.add('wishlist-photo');

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('wishlist-details');

    const h3 = document.createElement('h3');
    h3.textContent = property.name;

    const locationP = document.createElement('p');
    locationP.textContent = `Location: ${property.location}`;

    const priceP = document.createElement('p');
    priceP.textContent = `Price: ${property.price}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove from Wishlist';
    removeBtn.classList.add('remove-btn');
    removeBtn.onclick = () => removeFromWishlist(property.id);

    detailsDiv.appendChild(h3);
    detailsDiv.appendChild(locationP);
    detailsDiv.appendChild(priceP);
    detailsDiv.appendChild(removeBtn);

    itemDiv.appendChild(img);
    itemDiv.appendChild(detailsDiv);

    return itemDiv;
}

// Add a property to the wishlist
function addToWishlist(propertyId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const property = properties.find(p => p.id === propertyId);

    if (property && !wishlist.some(item => item.id === propertyId)) {
        wishlist.push(property);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        loadWishlist();
    }
}

// Remove a property from the wishlist
function removeFromWishlist(propertyId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(item => item.id !== propertyId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    loadWishlist();
}

// Load the wishlist when the page is loaded
window.onload = loadWishlist;

//JavaScript to toggle the menu on mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});
