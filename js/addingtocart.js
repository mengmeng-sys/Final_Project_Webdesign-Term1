// Load cart when page loads
        window.addEventListener('DOMContentLoaded', function() {
            loadCart();
        });

        function loadCart() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const cartItemsContainer = document.getElementById('cartItemsContainer');
            const emptyCartMessage = document.getElementById('emptyCartMessage');
            const cartBadge = document.getElementById('cartBadge');
            
            // Update badge
            cartBadge.textContent = cart.length;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '';
                emptyCartMessage.style.display = 'block';
               document.getElementById('subtotal').textContent = '$0.00';
               document.getElementById('shipping').textContent = '$0.00';
               document.getElementById('total').textContent = '$0.00';
               cartBadge.textContent = 0;

                return;
            }
            
            emptyCartMessage.style.display = 'none';
            
            // Clear container
            cartItemsContainer.innerHTML = '';
            
            // Add each item
            cart.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item';
                itemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="item-img">
                    <div class="item-info">
                        <div class="item-name">${item.name}</div>
                        <div class="item-desc">${item.description} - Color: ${item.color}</div>
                        <div class="item-bottom">
                            <div class="qty-box">
                                <button onclick="updateQuantity(${index}, -1)">-</button>
                                <span>${item.quantity}</span>
                                <button onclick="updateQuantity(${index}, 1)">+</button>
                            </div>
                            <span class="price">$${(item.price * item.quantity).toFixed(2)}</span>
                            <button class="remove" onclick="removeItem(${index})">🗑️</button>
                        </div>
                    </div>
                `;
                cartItemsContainer.appendChild(itemDiv);
            });
            
            // Update summary
            updateSummary();
        }

        function updateQuantity(index, change) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart[index].quantity += change;
            
            if (cart[index].quantity <= 0) {
                removeItem(index);
                return;
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        }

        function removeItem(index) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        }

        function updateSummary() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const shippingCost = 10;
            
            let subtotal = 0;
            cart.forEach(item => {
                subtotal += item.price * item.quantity;
            });
            
            const total = subtotal + (cart.length > 0 ? shippingCost : 0);
            document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
            document.getElementById('shipping').textContent = cart.length > 0 ? `$${shippingCost.toFixed(2)}` : '$0.00';
            document.getElementById('total').textContent = `$${total.toFixed(2)}`;
        }

        function proceedToCheckout() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert('Proceeding to checkout...');
            // Add checkout logic here
        }