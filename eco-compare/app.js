document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.trim();
    if (searchInput) {
        fetchProductData(searchInput);
    } else {
        alert('Please enter a valid product ID or name');
    }
});

document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.trim();
    if (query.length > 2) {
        fetchProductSuggestions(query);
    }
});

function fetchProductSuggestions(query) {
    // Example: Fetch product suggestions from the backend (not implemented)
    console.log(`Fetching suggestions for: ${query}`);
    // Implement an API call to fetch suggestions based on the query
}

function fetchProductData(searchInput) {
    console.log(`Fetching data for: ${searchInput}`);
    fetch(`/api/products/${searchInput}/impact`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Received data:', data);
            displayProductData(data);
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
            alert('There was an error fetching the product data. Please try again.');
        });
}

function displayProductData(data) {
    document.getElementById('product-name').innerText = data.productName;
    document.getElementById('carbon-footprint').innerText = data.carbonFootprint;
    document.getElementById('water-usage').innerText = data.waterUsage;
    document.getElementById('waste-generation').innerText = data.wasteGeneration;
    document.getElementById('product-section').style.display = 'block';
}
