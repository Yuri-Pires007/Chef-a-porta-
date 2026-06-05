// Data
const categories = [
    'Pizza',
    'Hambúrgueres', 
    'Sushi',
    'Tradicional Portuguesa',
    'Saudável',
    'Sobremesas'
];

const restaurants = [
    {
        id: '1',
        name: 'Pizzaria Bella Napoli',
        category: 'Pizza',
        rating: 4.8,
        reviewCount: 324,
        deliveryTime: [25, 35],
        deliveryFee: 2.50,
        imageUrl:'imag5.jpg',
        description: 'Autêntica pizza italiana feita no forno a lenha',
        address: 'Rua Augusta, 123, Lisboa',
        isFeatured: true,
        menu: [
            {
                id: '1-1',
                name: 'Pizza Margherita',
                description: 'Molho de tomate, mozzarella fresca, manjericão e azeite extra virgem',
                price: 12.90,
                imageUrl: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&q=80',
                category: 'Pizzas Clássicas',
                ingredients: ['Molho de tomate', 'Mozzarella', 'Manjericão', 'Azeite']
            },
            {
                id: '1-2',
                name: 'Pizza Pepperoni',
                description: 'Molho de tomate, mozzarella e pepperoni italiano',
                price: 15.90,
                imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&q=80',
                category: 'Pizzas Clássicas',
                ingredients: ['Molho de tomate', 'Mozzarella', 'Pepperoni']
            },
            {
                id: '1-3',
                name: 'Pizza Quattro Stagioni',
                description: 'Molho de tomate, mozzarella, presunto, cogumelos, alcachofras e azeitonas',
                price: 18.90,
                imageUrl: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&q=80',
                category: 'Pizzas Especiais',
                ingredients: ['Molho de tomate', 'Mozzarella', 'Presunto', 'Cogumelos', 'Alcachofras', 'Azeitonas']

            },
                



            
        ]
    },
    {
        id: '2',
        name: 'Burger House',
        category: 'Hambúrgueres',
        rating: 4.6,
        reviewCount: 189,
        deliveryTime: [20, 30],
        deliveryFee: 1.99,
        imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80',
        description: 'Os melhores hambúrgueres artesanais da cidade',
        address: 'Avenida da Liberdade, 456, Lisboa',
        isFeatured: true,
        menu: [
            {
                id: '2-1',
                name: 'Classic Burger',
                description: 'Hambúrguer de carne bovina, alface, tomate, cebola e molho especial',
                price: 9.90,
                imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80',
                category: 'Hambúrgueres Clássicos',
                ingredients: ['Carne bovina', 'Alface', 'Tomate', 'Cebola', 'Molho especial']
            },
            {
                id: '2-2',
                name: 'Bacon Cheeseburger',
                description: 'Hambúrguer de carne, queijo cheddar, bacon crocante e molho barbecue',
                price: 12.90,
                imageUrl: 'imag4.jpg',
                category: 'Hambúrgueres Especiais',
                ingredients: ['Carne bovina', 'Queijo cheddar', 'Bacon', 'Molho barbecue']
            }
        ]
    },
    {
        id: '3',
        name: 'Sushi Zen',
        category: 'Sushi',
        rating: 4.9,
        reviewCount: 267,
        deliveryTime: [35, 45],
        deliveryFee: 3.50,
        imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80',
        description: 'Sushi fresco preparado por chefs japoneses',
        address: 'Rua do Ouro, 789, Lisboa',
        isFeatured: true,
        menu: [
            {
                id: '3-1',
                name: 'Salmão Nigiri',
                description: 'Fatia de salmão fresco sobre arroz temperado',
                price: 3.50,
                imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&q=80',
                category: 'Nigiri',
                ingredients: ['Salmão fresco', 'Arroz de sushi']
            },
            {
                id: '3-2',
                name: 'California Roll',
                description: 'Rolo com caranguejo, abacate e pepino, coberto com sésamo',
                price: 8.90,
                imageUrl: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&q=80',
                category: 'Makis',
                ingredients: ['Caranguejo', 'Abacate', 'Pepino', 'Sésamo']
            }
        ]
    },
    {
        id: '4',
        name: 'Taberna do Fado',
        category: 'Tradicional Portuguesa',
        rating: 4.7,
        reviewCount: 156,
        deliveryTime: [40, 50],
        deliveryFee: 2.99,
        imageUrl: 'imag6.jpg',
        description: 'Sabores tradicionais portugueses com receitas de família',
        address: 'Bairro Alto, 321, Lisboa',
        isFeatured: false,
        menu: [
            {
                id: '4-1',
                name: 'Bacalhau à Brás',
                description: 'Bacalhau desfiado com batata palha, ovos e azeitonas',
                price: 9.50,
                imageUrl: 'imag7.jpg',
                category: 'Pratos Principais',
                ingredients: ['Bacalhau', 'Batata', 'Ovos', 'Azeitonas', 'Cebola']
            },
            {
                id: '4-2',
                name: 'Pastéis de Nata',
                description: 'Tradicionais pastéis de nata com canela',
                price: 1.20,
                imageUrl: 'imag3.jpg',
                category: 'Sobremesas',
                ingredients: ['Massa folhada', 'Nata', 'Ovos', 'Açúcar', 'Canela']
            }
        ]
    },
    {
        id: '5',
        name: 'Green Bowl',
        category: 'Saudável',
        rating: 4.5,
        reviewCount: 98,
        deliveryTime: [25, 35],
        deliveryFee: 1.50,
        imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
        description: 'Bowls nutritivos e saladas frescas',
        address: 'Chiado, 654, Lisboa',
        isFeatured: false,
        menu: [
            {
                id: '5-1',
                name: 'Buddha Bowl',
                description: 'Quinoa, abacate, grão-de-bico, cenoura e molho tahini',
                price: 11.90,
                imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&q=80',
                category: 'Bowls',
                ingredients: ['Quinoa', 'Abacate', 'Grão-de-bico', 'Cenoura', 'Molho tahini']
            }
        ]
    },
    {
        id: '6',
        name: 'Sweet Dreams',
        category: 'Sobremesas',
        rating: 4.8,
        reviewCount: 203,
        deliveryTime: [20, 30],
        deliveryFee: 1.99,
        imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&q=80',
        description: 'Sobremesas artesanais irresistíveis',
        address: 'Príncipe Real, 987, Lisboa',
        isFeatured: false,
        menu: [
            {
                id: '6-1',
                name: 'Cheesecake de Frutos Vermelhos',
                description: 'Cremoso cheesecake com cobertura de frutos vermelhos',
                price: 6.50,
                imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&q=80',
                category: 'Cheesecakes',
                ingredients: ['Queijo cremoso', 'Frutos vermelhos', 'Biscoito', 'Açúcar']
            }
        ]
    }
];

// Cart state
let cart = {
    items: [],
    restaurantId: null,
    restaurantName: null,
    deliveryFee: 0
};

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('pt-PT', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);
}

function calculateDeliveryTime(range) {
    if (!range || range.length !== 2) return 'Tempo indisponível';
    return `${range[0]}-${range[1]} min`;
}

function generateOrderId() {
    return `ENC-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}

// DOM elements
const elements = {
    header: document.getElementById('header'),
    menuToggle: document.getElementById('menuToggle'),
    mobileMenu: document.getElementById('mobileMenu'),
    cartBtn: document.getElementById('cartBtn'),
    cartCount: document.getElementById('cartCount'),
    categoriesGrid: document.getElementById('categoriesGrid'),
    featuredRestaurants: document.getElementById('featuredRestaurants'),
    allRestaurants: document.getElementById('allRestaurants'),
    restaurantsSection: document.getElementById('restaurants'),
    restaurantModal: document.getElementById('restaurantModal'),
    restaurantDetailContent: document.getElementById('restaurantDetailContent'),
    closeRestaurantModal: document.getElementById('closeRestaurantModal'),
    cartModal: document.getElementById('cartModal'),
    cartContent: document.getElementById('cartContent'),
    closeCartModal: document.getElementById('closeCartModal'),
    checkoutModal: document.getElementById('checkoutModal'),
    closeCheckoutModal: document.getElementById('closeCheckoutModal'),
    checkoutForm: document.getElementById('checkoutForm'),
    checkoutSummary: document.getElementById('checkoutSummary'),
    trackingModal: document.getElementById('trackingModal'),
    trackingContent: document.getElementById('trackingContent'),
    closeTrackingModal: document.getElementById('closeTrackingModal'),
    heroSearchForm: document.getElementById('heroSearchForm'),
    heroSearchInput: document.getElementById('heroSearchInput')
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderCategories();
    renderFeaturedRestaurants();
    renderAllRestaurants();
    updateCartUI();
});

function initializeApp() {
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            elements.header.classList.add('scrolled');
        } else {
            elements.header.classList.remove('scrolled');
        }
    });
}

function setupEventListeners() {
    // Mobile menu toggle
    elements.menuToggle.addEventListener('click', function() {
        elements.mobileMenu.classList.toggle('active');
        const icon = this.querySelector('i');
        if (elements.mobileMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', function() {
            elements.mobileMenu.classList.remove('active');
            elements.menuToggle.querySelector('i').className = 'fas fa-bars';
        });
    });

    // Navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                if (targetId === 'restaurants') {
                    showRestaurants();
                } else if (targetId === 'home') {
                    showHome();
                } else {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Cart button
    elements.cartBtn.addEventListener('click', function() {
        openCartModal();
    });

    // Hero search form
    elements.heroSearchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = elements.heroSearchInput.value.trim();
        if (query) {
            showRestaurants();
            // Could implement search functionality here
        }
    });

    // Filter buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            const category = e.target.dataset.category;
            filterRestaurants(category);
            
            // Update active filter
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
        }
    });

    // Modal close buttons
    elements.closeRestaurantModal.addEventListener('click', closeRestaurantModal);
    elements.closeCartModal.addEventListener('click', closeCartModal);
    elements.closeCheckoutModal.addEventListener('click', closeCheckoutModal);
    elements.closeTrackingModal.addEventListener('click', closeTrackingModal);

    // Close modals when clicking outside
    [elements.restaurantModal, elements.cartModal, elements.checkoutModal, elements.trackingModal].forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Checkout form
    elements.checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        processOrder();
    });
}

function renderCategories() {
    const categoryImages = {
        'Pizza': 'imag2.jpg',
        'Hambúrgueres': 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&q=80',
        'Sushi': 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&q=80',
        'Tradicional Portuguesa': 'imag7.jpg',
        'Saudável': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&q=80',
        'Sobremesas': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&q=80'
    };

    elements.categoriesGrid.innerHTML = categories.map(category => `
        <div class="category-card" onclick="filterAndShowRestaurants('${category}')">
            <div class="category-image">
                <img src="${categoryImages[category]}" alt="${category}" loading="lazy">
            </div>
            <div class="category-name">${category}</div>
        </div>
    `).join('');
}

function renderFeaturedRestaurants() {
    const featured = restaurants.filter(r => r.isFeatured).slice(0, 3);
    elements.featuredRestaurants.innerHTML = featured.map(restaurant => createRestaurantCard(restaurant)).join('');
}

function renderAllRestaurants(filteredRestaurants = restaurants) {
    elements.allRestaurants.innerHTML = filteredRestaurants.map(restaurant => createRestaurantCard(restaurant)).join('');
}

function createRestaurantCard(restaurant) {
    const deliveryFeeText = restaurant.deliveryFee === 0 ? 
        '<span class="delivery-fee free"><i class="fas fa-shipping-fast"></i> Grátis</span>' :
        `<span class="delivery-fee"><i class="fas fa-truck"></i> ${formatPrice(restaurant.deliveryFee)}</span>`;

    return `
        <div class="restaurant-card" onclick="openRestaurantDetail('${restaurant.id}')">
            <div class="restaurant-image">
                <img src="${restaurant.imageUrl}" alt="${restaurant.name}" loading="lazy">
                ${restaurant.isFeatured ? '<div class="restaurant-badge">Destaque</div>' : ''}
            </div>
            <div class="restaurant-info">
                <div class="restaurant-header">
                    <div>
                        <div class="restaurant-name">${restaurant.name}</div>
                        <div class="restaurant-category">${restaurant.category}</div>
                    </div>
                    <div class="restaurant-rating">
                        <i class="fas fa-star"></i>
                        <span>${restaurant.rating}</span>
                    </div>
                </div>
                <div class="restaurant-meta">
                    <div class="restaurant-delivery">
                        <div class="delivery-time">
                            <i class="fas fa-clock"></i>
                            <span>${calculateDeliveryTime(restaurant.deliveryTime)}</span>
                        </div>
                        ${deliveryFeeText}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function filterAndShowRestaurants(category) {
    showRestaurants();
    setTimeout(() => {
        filterRestaurants(category);
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });
    }, 100);
}

function filterRestaurants(category) {
    const filtered = category === 'all' ? restaurants : restaurants.filter(r => r.category === category);
    renderAllRestaurants(filtered);
}

function showRestaurants() {
    elements.restaurantsSection.style.display = 'block';
    elements.restaurantsSection.scrollIntoView({ behavior: 'smooth' });
}

function showHome() {
    elements.restaurantsSection.style.display = 'none';
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

function openRestaurantDetail(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) return;

    // Group menu items by category
    const menuByCategory = restaurant.menu.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    const deliveryFeeText = restaurant.deliveryFee === 0 ? 'Entrega Grátis' : formatPrice(restaurant.deliveryFee);

    elements.restaurantDetailContent.innerHTML = `
        <div class="restaurant-detail-header">
            <img src="${restaurant.imageUrl}" alt="${restaurant.name}">
            <div class="restaurant-detail-overlay">
                <div class="restaurant-detail-info">
                    <h2>${restaurant.name}</h2>
                    <div class="restaurant-detail-meta">
                        <span><i class="fas fa-star"></i> ${restaurant.rating} (${restaurant.reviewCount} avaliações)</span>
                        <span><i class="fas fa-clock"></i> ${calculateDeliveryTime(restaurant.deliveryTime)}</span>
                        <span><i class="fas fa-truck"></i> ${deliveryFeeText}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="restaurant-detail-body">
            <p style="margin-bottom: 2rem; color: var(--text-secondary); font-size: 1.1rem;">${restaurant.description}</p>
            ${Object.entries(menuByCategory).map(([category, items]) => `
                <div class="menu-section">
                    <h3>${category}</h3>
                    <div class="menu-items">
                        ${items.map(item => `
                            <div class="menu-item">
                                <div class="menu-item-image">
                                    <img src="${item.imageUrl}" alt="${item.name}" loading="lazy">
                                </div>
                                <div class="menu-item-info">
                                    <div class="menu-item-name">${item.name}</div>
                                    <div class="menu-item-description">${item.description}</div>
                                    <div class="menu-item-ingredients">${item.ingredients.join(', ')}</div>
                                </div>
                                <div class="menu-item-actions">
                                    <div class="menu-item-price">${formatPrice(item.price)}</div>
                                    <button class="add-to-cart-btn" onclick="addToCart('${item.id}', '${restaurant.id}')">
                                        <i class="fas fa-plus"></i>
                                        Adicionar
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    elements.restaurantModal.classList.add('active');
}

function closeRestaurantModal() {
    elements.restaurantModal.classList.remove('active');
}

function addToCart(dishId, restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    const dish = restaurant.menu.find(d => d.id === dishId);
    
    if (!dish) return;

    // Check if adding from different restaurant
    if (cart.restaurantId && cart.restaurantId !== restaurantId) {
        if (!confirm('Já tens itens de outro restaurante no carrinho. Desejas limpar o carrinho atual para adicionar este prato?')) {
            return;
        }
        cart.items = [];
    }

    // Set restaurant info
    cart.restaurantId = restaurantId;
    cart.restaurantName = restaurant.name;
    cart.deliveryFee = restaurant.deliveryFee;

    // Check if item already exists
    const existingItem = cart.items.find(item => item.id === dishId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.items.push({
            ...dish,
            quantity: 1,
            restaurantId: restaurantId,
            restaurantName: restaurant.name
        });
    }

    updateCartUI();
    
    // Show success feedback
    const button = event.target.closest('.add-to-cart-btn');
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
    button.style.background = 'var(--success)';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
    }, 1500);
}

function updateCartUI() {
    const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Update cart button
    elements.cartCount.textContent = totalItems;
    elements.cartCount.classList.toggle('show', totalItems > 0);
    
    const cartTotal = elements.cartBtn.querySelector('.cart-total');
    cartTotal.textContent = formatPrice(subtotal);
}

function openCartModal() {
    renderCartContent();
    elements.cartModal.classList.add('active');
}

function closeCartModal() {
    elements.cartModal.classList.remove('active');
}

function renderCartContent() {
    if (cart.items.length === 0) {
        elements.cartContent.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <h3>O teu carrinho está vazio</h3>
                <p>Adiciona alguns pratos deliciosos para começar!</p>
                <button class="checkout-btn" onclick="closeCartModal(); showRestaurants();">
                    Explorar Restaurantes
                </button>
            </div>
        `;
        return;
    }

    const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + cart.deliveryFee;

    elements.cartContent.innerHTML = `
        <div class="cart-items">
            <h4 style="margin-bottom: 1rem; color: var(--text-secondary);">
                <i class="fas fa-store"></i> ${cart.restaurantName}
            </h4>
            ${cart.items.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.imageUrl}" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${formatPrice(item.price)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateCartItemQuantity('${item.id}', -1)">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateCartItemQuantity('${item.id}', 1)">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="cart-item-total">${formatPrice(item.price * item.quantity)}</div>
                        <button class="remove-item-btn" onclick="removeFromCart('${item.id}')" title="Remover item">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="cart-summary">
            <div class="summary-row">
                <span>Subtotal</span>
                <span class="price">${formatPrice(subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>Taxa de Entrega</span>
                <span class="price ${cart.deliveryFee === 0 ? 'text-success' : ''}">${cart.deliveryFee === 0 ? 'Grátis' : formatPrice(cart.deliveryFee)}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span class="price">${formatPrice(total)}</span>
            </div>
        </div>
        
        <button class="checkout-btn" onclick="proceedToCheckout()">
            <span>Finalizar Pedido</span>
            <i class="fas fa-arrow-right"></i>
        </button>
    `;
}

function updateCartItemQuantity(itemId, delta) {
    const item = cart.items.find(i => i.id === itemId);
    if (!item) return;
    
    item.quantity = Math.max(1, item.quantity + delta);
    updateCartUI();
    renderCartContent();
}

function removeFromCart(itemId) {
    cart.items = cart.items.filter(item => item.id !== itemId);
    
    if (cart.items.length === 0) {
        cart.restaurantId = null;
        cart.restaurantName = null;
        cart.deliveryFee = 0;
    }
    
    updateCartUI();
    renderCartContent();
}

function proceedToCheckout() {
    closeCartModal();
    openCheckoutModal();
}

function openCheckoutModal() {
    renderCheckoutSummary();
    elements.checkoutModal.classList.add('active');
}

function closeCheckoutModal() {
    elements.checkoutModal.classList.remove('active');
}

function renderCheckoutSummary() {
    const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + cart.deliveryFee;

    elements.checkoutSummary.innerHTML = `
        <div style="background: var(--surface); border-radius: var(--border-radius); padding: 1.5rem; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-receipt"></i>
                Resumo da Encomenda
            </h4>
            <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">
                <i class="fas fa-store"></i> ${cart.restaurantName}
            </div>
            
            <div style="max-height: 200px; overflow-y: auto; margin-bottom: 1rem;">
                ${cart.items.map(item => `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0; border-bottom: 1px solid var(--border);">
                        <div>
                            <span style="font-weight: 600;">${item.quantity}x</span>
                            <span style="margin-left: 0.5rem;">${item.name}</span>
                        </div>
                        <span style="font-family: var(--font-mono); font-weight: 600;">${formatPrice(item.price * item.quantity)}</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="summary-row">
                <span>Subtotal</span>
                <span class="price">${formatPrice(subtotal)}</span>
            </div>
            <div class="summary-row">
                <span>Taxa de Entrega</span>
                <span class="price">${cart.deliveryFee === 0 ? 'Grátis' : formatPrice(cart.deliveryFee)}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span class="price">${formatPrice(total)}</span>
            </div>
        </div>
        
        <div style="background: rgba(255, 107, 53, 0.1); border: 1px solid rgba(255, 107, 53, 0.3); border-radius: var(--border-radius); padding: 1rem; text-align: center;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: var(--primary); font-weight: 600;">
                <i class="fas fa-truck"></i>
                <span>Entrega estimada: 25-40 minutos</span>
            </div>
        </div>
    `;
}

function processOrder() {
    // Get form data
    const formData = new FormData(elements.checkoutForm);
    const orderData = Object.fromEntries(formData.entries());
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'street', 'doorNumber', 'zipCode', 'city'];
    const missingFields = requiredFields.filter(field => !orderData[field] || !orderData[field].trim());
    
    if (missingFields.length > 0) {
        alert('Por favor, preenche todos os campos obrigatórios.');
        return;
    }
    
    // Validate Portuguese zip code
    const zipRegex = /^\d{4}-\d{3}$/;
    if (!zipRegex.test(orderData.zipCode)) {
        alert('Código postal inválido. Use o formato 0000-000.');
        return;
    }
    
    // Show loading state
    const submitBtn = elements.checkoutForm.querySelector('.checkout-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> A processar...';
    submitBtn.disabled = true;
    
    // Simulate order processing
    setTimeout(() => {
        const orderId = generateOrderId();
        
        // Clear cart
        cart = {
            items: [],
            restaurantId: null,
            restaurantName: null,
            deliveryFee: 0
        };
        
        updateCartUI();
        closeCheckoutModal();
        openOrderTrackingModal(orderId);
        
        // Reset form
        elements.checkoutForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
    }, 2000);
}

function openOrderTrackingModal(orderId) {
    renderOrderTracking(orderId);
    elements.trackingModal.classList.add('active');
}

function closeTrackingModal() {
    elements.trackingModal.classList.remove('active');
}

function renderOrderTracking(orderId) {
    const steps = [
        { id: 'confirmed', title: 'Pedido Confirmado', time: 'Agora mesmo', completed: true },
        { id: 'preparing', title: 'A Preparar', time: '5 min', active: true },
        { id: 'ready', title: 'Pronto para Entrega', time: '20 min', completed: false },
        { id: 'delivering', title: 'A Caminho', time: '25 min', completed: false },
        { id: 'delivered', title: 'Entregue', time: '35 min', completed: false }
    ];

    elements.trackingContent.innerHTML = `
        <div class="order-status">
            <div class="status-icon">
                <i class="fas fa-utensils"></i>
            </div>
            <div class="order-id">Pedido ${orderId}</div>
            <div class="status-text">O teu pedido está a ser preparado</div>
            <div class="estimated-time">Tempo estimado: 30-35 minutos</div>
        </div>
        
        <div class="tracking-steps">
            ${steps.map(step => `
                <div class="tracking-step ${step.completed ? 'completed' : ''} ${step.active ? 'active' : ''}">
                    <div class="step-info">
                        <h4>${step.title}</h4>
                        <div class="step-time">${step.time}</div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="delivery-info">
            <div class="delivery-person">
                <div class="delivery-avatar">
                    <img src="https://i.pravatar.cc/100?u=delivery" alt="Entregador">
                </div>
                <div class="delivery-details">
                    <h4>João Silva</h4>
                    <div class="delivery-phone">📱 912 345 678</div>
                </div>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 1rem;">
                O teu entregador entrará em contacto quando estiver a chegar.
            </p>
        </div>
        
        <button class="checkout-btn" onclick="closeTrackingModal()">
            <i class="fas fa-check"></i>
            Entendido
        </button>
    `;
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation to images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('fade-in-up');
        });
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.restaurant-card, .category-card, .stat');
    animatedElements.forEach(el => observer.observe(el));
});