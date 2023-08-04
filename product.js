const products = [
    {
      name: 'Product 1',
      category: 'Electronics',
      price: 799.99,
      available: true,
    },
    {
      name: 'Product 2',
      category: 'Books',
      price: 19.99,
      available: true,
    },
    {
      name: 'Product 3',
      category: 'Home & Kitchen',
      price: 49.99,
      available: false,
    },
    {
      name: 'Product 4',
      category: 'Toys & Games',
      price: 29.99,
      available: true,
    },
    {
      name: 'Product 5',
      category: 'Electronics',
      price: 599.99,
      available: true,
    },
    {
      name: 'Product 6',
      category: 'Books',
      price: 9.99,
      available: true,
    },
    {
      name: 'Product 7',
      category: 'Books',
      price: 5.99,
      available: true,
    },
    {
      name: 'Product 8',
      category: 'Electronics',
      price: 1599.99,
      available: true,
    },
  ];
  
  
      function createProductList() {
        const productListElement = document.getElementById('productList');
        const categoryFilter = document.getElementById('categoryFilter').value;
        const availabilityFilter = document.getElementById('availabilityFilter').value;
        const minPriceFilter = parseFloat(document.getElementById('minPrice').value);
        const maxPriceFilter = parseFloat(document.getElementById('maxPrice').value);
  
        productListElement.innerHTML = '';
  
        products.forEach((product, index) => {
          if ((categoryFilter === 'all' || product.category === categoryFilter) &&
              (availabilityFilter === 'all' || (availabilityFilter === 'available' && product.available) || (availabilityFilter === 'unavailable' && !product.available)) &&
              (isNaN(minPriceFilter) || product.price >= minPriceFilter) &&
              (isNaN(maxPriceFilter) || product.price <= maxPriceFilter)) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
              <strong>${product.name}</strong>
              <p>Category: ${product.category}</p>
              <p>Price: $${product.price.toFixed(2)}</p>
              <p>Availability: ${product.available ? 'Available' : 'Unavailable'}</p>
            `;
  
            productListElement.appendChild(listItem);
          }
        });
      }
  
      createProductList();