function showDetails(event, tabName) {
    // Hide all tab content
    let tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove the active class from all buttons
    let tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the clicked tab content and mark the button as active
    document.getElementById(tabName).style.display = "flex";
    event.currentTarget.classList.add("active");
}

//JavaScript to toggle the menu on mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});


function likeProperty(propertyName) {
    let likedProperties = JSON.parse(localStorage.getItem('likedProperties')) || [];

    if (!likedProperties.includes(propertyName)) {
        likedProperties.push(propertyName);
        localStorage.setItem('likedProperties', JSON.stringify(likedProperties));
        alert('You liked ' + propertyName + '!');
    } else {
        alert('You already liked ' + propertyName + '!');
    }
}


function displayLikedProperties() {
    const likedProperties = JSON.parse(localStorage.getItem('likedProperties')) || [];
    const favoritesContainer = document.getElementById('favoritesContainer');

    likedProperties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('liked-property');
        propertyDiv.innerText = property; // You can customize this to display more details
        favoritesContainer.appendChild(propertyDiv);
    });
}

// Call this function when the page loads
window.onload = displayLikedProperties;



