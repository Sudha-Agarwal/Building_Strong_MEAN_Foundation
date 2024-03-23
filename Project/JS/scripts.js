const products = [
    { id: 1, name: 'Pizza', price: 10.00 , image:'../Images/pizza.jpg'},
    { id: 2, name: 'Garlic Bread', price: 20.00, image:'../Images/garlic_bread.jpg' },
    { id: 3, name: 'Pita', price: 30.00, image:'../Images/pita.jpg' },
    { id: 4, name: 'Product 4', price: 30.00 },   
    { id: 5, name: 'Pita', price: 30.00, image:'../Images/pita.jpg' },
];

let cartItems =[];
let wishlist = [];


function displayProducts() {
    const productList = document.getElementById("product-list");

    productList.innerHTML = '';
    let wishlistItems = sessionStorage.getItem('wishlist') ? JSON.parse(sessionStorage.getItem('wishlist')) : [];

    products.forEach(product => {
        // Check if the product is in the wishlist    
        let heartIcon;
        let isInWishlist = wishlistItems.some(item => item.id === product.id);

        if (isInWishlist) {
            // Determine which heart icon to display based on whether the product is in the wishlist
            heartIcon = 'bi-heart-fill';
        } else {
            heartIcon = 'bi-heart';
        }

        const productCard = `
            <div class="col">
                <div class="card">
                    <img src=${product.image} class="card-img-top" alt="...">
                    <i class="bi ${heartIcon} position-absolute top-0 start-0 text-danger" style="font-size: 2rem;" onclick="toggleHeart(this, ${product.id})"></i>
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="card-footer mb-2">
                            $ ${product.price}
                        </div>
                        <div class="d-flex">
                            <a href="#" class="btn btn-primary" onclick="addToCart(${product.id})">Add to cart</a>
                            <a href="#" class="btn btn-secondary" onclick="addToWishlist(${product.id})">Wishlist</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    })
}


// Function to toggle heart icon
function toggleHeart(heart, productId) {
    const heartIcon = heart.parentElement.querySelector('.bi');
    console.log(heartIcon)

    if (heartIcon.classList.contains('bi-heart')) {
        heartIcon.classList.remove('bi-heart');
        heartIcon.classList.add('bi-heart-fill');
        addToWishlist(productId);
       
    } else if (heartIcon.classList.contains('bi-heart-fill')) {
        heartIcon.classList.remove('bi-heart-fill');
        heartIcon.classList.add('bi-heart');
        removeFromWishlist(productId);
       
    }
}
function addToWishlist(productId){
    // Check if the product already exists in the wishlist
    // Retrieve wishlist items from sessionStorage
    var storedJsonStr = sessionStorage.getItem('wishlist');

    // Parse JSON string back to array
    wishlist = storedJsonStr ? JSON.parse(storedJsonStr) : [];

    // Find the product from the product array
    const product = products.find(prod => prod.id === productId);
        if (product) {
            var storedJsonStr  = sessionStorage.getItem('wishlist');
            console.log(storedJsonStr);
            wishlist = sessionStorage.getItem('wishlist') ?  wishlist = JSON.parse(storedJsonStr):[];
            
            if(!wishlist.find(item => item.id === productId)){
                wishlist.push(product);          
                sessionStorage.setItem('wishlist', JSON.stringify(wishlist));
            }            

    var storedJsonStr = sessionStorage.getItem('wishlist');    
    console.log(JSON.parse(storedJsonStr));
    displayProducts();

    }
}

function removeFromWishlist(productId) {    
   
    // Retrieve wishlist items from sessionStorage
    var storedJsonStr = sessionStorage.getItem('wishlist');

    // Parse JSON string back to array
    var wishlist = storedJsonStr ? JSON.parse(storedJsonStr) : [];
console.log(wishlist)
    // Find index of product with given productId in wishlist array
    const index = wishlist.findIndex(item => item.id === productId);
    // Check if the product exists in the wishlist
    if (index !== -1) {
        // Remove the product from the wishlist array
        wishlist.splice(index, 1);
        // Update sessionStorage with the modified wishlist array
        sessionStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    var storedJsonStr = sessionStorage.getItem('wishlist');    
    console.log(JSON.parse(storedJsonStr));
    displayProducts();
    
}
sessionStorage.setItem('abc','hello');

sessionStorage.getItem('abc');
function addToCart(productId){
    alert("product added")
   
    const product = products.find(prod => prod.id === productId);
        if (product) {
            var storedJsonStr  = sessionStorage.getItem('cartItems');
            console.log(storedJsonStr);
            if(storedJsonStr===null){
                cartItems = []; 
            }
            else{
                cartItems = JSON.parse(storedJsonStr);               
            }

            // Check if the product already exists in cartItems
        const existingProductIndex = cartItems.findIndex(item => item.id === productId);
        if (existingProductIndex !== -1) {
            // If the product already exists, increase its quantity
            cartItems[existingProductIndex].quantity++;
        } else {
            // If the product is being added for the first time, set its quantity to 1
            const newCartItem = {
                ...product, // Spread operator to copy existing product properties
                quantity: 1 // Add quantity property
            };
            // Push the new cart item object into the cartItems array
            cartItems.push(newCartItem);
        }
    
            // Update sessionStorage with the modified cartItems array
            // Convert the cartItems array to JSON string
        var jsonCartItems = JSON.stringify(cartItems);
        sessionStorage.setItem('cartItems', jsonCartItems);

        // Log the updated cartItems array
        console.log(cartItems);
           
        }

        
}

function displayCart(){
   // Get the container for the cart items
    const cartList = document.getElementById("cart-items");
    // Clear previous content
    cartList.innerHTML = '';

   // Retrieve cart items from sessionStorage
    let storedJsonStr  = sessionStorage.getItem('cartItems');
    // Parse JSON string back to array
    // If sessionStorage contains 'cartItems', it means there are items in the cart stored as JSON string.
    // We use JSON.parse() to convert the JSON string back into a JavaScript array.

    let cartItems1 = JSON.parse(storedJsonStr);

    // Loop through each item in the cartItems array
    cartItems1.forEach(item =>{
        const cartCard = `
        <div class="card mb-3"> 
        <div class="row g-0">
            <div class="col-md-4">
                <img src=${item.image} class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Product Title</h5>
                    <p class="card-text">Description of the product goes here.</p>
                    <p class="card-text"><small class="text-muted">${item.price}</small></p>
                    <div class="btn-group" role="group" aria-label="Quantity">
                        <button type="button" class="btn btn-secondary" onclick="decreaseQuantity(${item.id})">-</button>
                        <span id="quantity-${item.id}">${item.quantity}</span>
                        <button type="button" class="btn btn-secondary" onclick="increaseQuantity(${item.id})">+</button>
                    </div>
                    <button class="btn btn-danger" onclick="removeItem(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    </div>
        `;
        // Append the HTML markup to the container
        cartList.innerHTML += cartCard;
    });

    calculateCartTotal(cartItems1);
};

// Function to increase quantity
function increaseQuantity(itemId) {
    // Retrieve cart items from sessionStorage
    var storedJsonStr = sessionStorage.getItem('cartItems');
    if (storedJsonStr === null) {
        return; // Cart is empty, nothing to increase
    }

    // Parse JSON string back to array
    var cartItems = JSON.parse(storedJsonStr);

    // Find the index of the item in cartItems array
    const itemIndex = cartItems.findIndex(item => item.id === itemId);

    // If item not found, return
    if (itemIndex === -1) {
        return;
    }

    // Increase the quantity for the item with the given id
    cartItems[itemIndex].quantity++;

    // Update sessionStorage with the modified cartItems array
    var jsonCartItems = JSON.stringify(cartItems);
    sessionStorage.setItem('cartItems', jsonCartItems);    
    // Refresh the displayed cart
    displayCart();
   
}

// Function to decrease quantity
function decreaseQuantity(itemId) {
    // Retrieve cart items from sessionStorage
    var storedJsonStr = sessionStorage.getItem('cartItems');
    if (storedJsonStr === null) {
        return; // Cart is empty, nothing to decrease
    }

    // Parse JSON string back to array
    var cartItems = JSON.parse(storedJsonStr);

    // Find the index of the item in cartItems array
    const itemIndex = cartItems.findIndex(item => item.id === itemId);

    // If item not found, return
    if (itemIndex === -1) {
        return;
    }

    // Decrease the quantity for the item with the given id
    if (cartItems[itemIndex].quantity > 1) {
        cartItems[itemIndex].quantity--;
    }

    // Update sessionStorage with the modified cartItems array
    var jsonCartItems = JSON.stringify(cartItems);
    sessionStorage.setItem('cartItems', jsonCartItems);

   
    // Refresh the displayed cart
    displayCart();
    
}

function calculateCartTotal(cartItems){
    let totalprice = 0;
    cartItems.forEach(item =>{
        totalprice += item.price * item.quantity;
    })
    console.log(totalprice);

    document.getElementById('sub-total').innerText = '$' + totalprice;
    document.getElementById('total').innerText = '$' + totalprice;
}

function removeItem(productId) {
    // Retrieve cart items from sessionStorage
    var storedJsonStr = sessionStorage.getItem('cartItems');

    // Parse JSON string back to array
    var cartItems = storedJsonStr ? JSON.parse(storedJsonStr) : [];

    // Find index of product with given productId in cartItems array
    const index = cartItems.findIndex(item => item.id === productId);

    // If product with given productId is found, remove it from cartItems array
    if (index !== -1) {
        cartItems.splice(index, 1);

        // Update sessionStorage with the modified cartItems array
        var jsonCartItems = JSON.stringify(cartItems);
        sessionStorage.setItem('cartItems', jsonCartItems);

        // Log the updated cartItems array
        console.log(cartItems);
        calculateCartTotal(cartItems);
        displayCart();
    }
}

function displayWishlist(){
    // Get the container for the cart items
    const wishListItems = document.getElementById("wishlist-items");
    // Clear previous content
    wishListItems.innerHTML = '';

   // Retrieve cart items from sessionStorage
    let storedJsonStr  = sessionStorage.getItem('wishlist');
    // Parse JSON string back to array
    // If sessionStorage contains 'cartItems', it means there are items in the cart stored as JSON string.
    // We use JSON.parse() to convert the JSON string back into a JavaScript array.

    let wishlist1 = JSON.parse(storedJsonStr);
    console.log(wishlist1);

    // Loop through each item in the cartItems array
    wishlist1.forEach(item =>{
        const wishlistCard = `
        <div class="card mb-3">
        <div class="card-body">
            <!-- Product title and description -->
            <h5 class="card-title">${item.name}</h5>
            <div class="col-md-4">
            <img src=${item.image} class="img-fluid rounded-start" alt="...">
        </div>
            <p class="card-text">Description of the product goes here.</p>
            <!-- Price -->
            <p class="card-text"><small class="text-muted">${item.price}</small></p>
            <a href="#" class="btn btn-primary" onclick="addToCart(${item.id})">Add to cart</a>
        </div>
    </div>
        `;
        // Append the HTML markup to the container
        wishListItems.innerHTML += wishlistCard;
    });

}

function searchProduct(event){   
    event.preventDefault(); // Prevent the default form submission behavior

    const searchInput = document.getElementById("searchItem");
    const searchItem = searchInput.value.trim().toLowerCase();

    matchedProducts = products.filter(product => product.name.toLowerCase() === searchItem);
    console.log(matchedProducts);
    displaySearchedProducts(matchedProducts);
    
}

function displaySearchedProducts(matchedProducts){
   
    const productList = document.getElementById("product-list");

    productList.innerHTML = '';
    let wishlistItems = sessionStorage.getItem('wishlist') ? JSON.parse(sessionStorage.getItem('wishlist')) : [];

    
    matchedProducts.forEach(product => {
        // Check if the product is in the wishlist    
        let heartIcon;
        let isInWishlist = wishlistItems.some(item => item.id === product.id);

        if (isInWishlist) {
            // Determine which heart icon to display based on whether the product is in the wishlist
            heartIcon = 'bi-heart-fill';
        } else {
            heartIcon = 'bi-heart';
        }

        const productCard = `
            <div class="col">
                <div class="card">
                    <img src=${product.image} class="card-img-top" alt="...">
                    <i class="bi ${heartIcon} position-absolute top-0 start-0 text-danger" style="font-size: 2rem;" onclick="toggleHeart(this, ${product.id})"></i>
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="card-footer mb-2">
                            $ ${product.price}
                        </div>
                        <div class="d-flex">
                            <a href="#" class="btn btn-primary" onclick="addToCart(${product.id})">Add to cart</a>
                            <a href="#" class="btn btn-secondary" onclick="addToWishlist(${product.id})">Wishlist</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    })


}


function abc(n1){ //here n1 is called parameter
    n1();

}


//second way of writing the same
abc(() => console.log('xyz1'));

abc(()=> console.log('xyz'));