    let cartItems = [];
    let cartTotal = 0;

    function addToCart(itemName, itemPrice) {
        cartItems.push({ name: itemName, price: itemPrice });
        cartTotal += itemPrice;
        updateCart();
    }

    function updateCart() {
        const cartItemsElement = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');
        
        cartItemsElement.innerHTML = '';
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name}: $${item.price}`;
            cartItemsElement.appendChild(li);
        });

        cartTotalElement.textContent = cartTotal;
    }

    function checkout() {
        alert(`Total: $${cartTotal}`);
        cartItems = [];
        cartTotal = 0;
        updateCart();
    }