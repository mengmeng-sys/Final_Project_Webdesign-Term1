 // Add this script to your shop.html page, right before the closing </body> tag

// Product Database - must match the one in info.html
const products = [
    {
        id: 1,
        name: "Loveseat Sofa",
        price: 199.00,
        originalPrice: 400.00,
        discount: 50,
        rating: 5,
        category: "Living Room",
        image: "/image/arrival/item-1.svg",
        description: "A comfortable and stylish loveseat sofa perfect for small spaces. Features premium upholstery and sturdy construction. This elegant piece combines form and function, offering exceptional comfort while maintaining a sophisticated aesthetic that complements any interior design.",
        dimensions: "60\" W x 35\" D x 32\" H",
        material: "Premium fabric with solid wood frame",
        colors: ["white", "brown", "beige"],
        colorNames: ["White", "Brown", "Beige"],
        colorHex: ["#FFFFFF", "#8B4513", "#F5F5DC"],
        sku: "SOF-001",
        reviewCount: 124
    },
    {
        id: 2,
        name: "Luxury Sofa",
        price: 299.00,
        originalPrice: 500.00,
        discount: 50,
        rating: 5,
        category: "Living Room",
        image: "/image/living-room-item/Image Placeholder.svg",
        description: "Luxurious three-seater sofa with elegant design. Perfect centerpiece for your living room. Crafted with attention to detail, this sofa features deep cushioning and a timeless silhouette that will elevate your space for years to come.",
        dimensions: "84\" W x 38\" D x 34\" H",
        material: "Velvet upholstery with hardwood frame",
        colors: ["navy", "emerald", "burgundy"],
        colorNames: ["Navy Blue", "Emerald", "Burgundy"],
        colorHex: ["#000080", "#50C878", "#800020"],
        sku: "SOF-002",
        reviewCount: 89
    },
    {
        id: 3,
        name: "Table Lamp",
        price: 19.00,
        originalPrice: null,
        discount: 0,
        rating: 5,
        category: "Lighting",
        image: "/image/living-room-item/Card-5.svg",
        description: "Modern table lamp with adjustable brightness. Adds warm ambiance to any room. This versatile lighting solution features energy-efficient LED technology and a sleek design that works perfectly on bedside tables, desks, or accent tables.",
        dimensions: "6\" W x 6\" D x 14\" H",
        material: "Metal base with fabric shade",
        colors: ["white", "black", "brass"],
        colorNames: ["White", "Black", "Brass"],
        colorHex: ["#FFFFFF", "#000000", "#B5A642"],
        sku: "LMP-001",
        reviewCount: 203
    },
    {
        id: 4,
        name: "Cozy Sofa",
        price: 299.00,
        originalPrice: null,
        discount: 0,
        rating: 5,
        category: "Living Room",
        image: "/image/living-room-item/Card-6.svg",
        description: "Ultra-comfortable sofa designed for maximum relaxation. Deep seating and plush cushions make this the perfect spot for movie nights and lazy Sunday afternoons. The durable construction ensures years of comfortable use.",
        dimensions: "78\" W x 40\" D x 32\" H",
        material: "Chenille fabric with foam cushions",
        colors: ["gray", "charcoal", "lightgray"],
        colorNames: ["Gray", "Charcoal", "Light Gray"],
        colorHex: ["#808080", "#36454F", "#D3D3D3"],
        sku: "SOF-003",
        reviewCount: 156
    },
    {
        id: 5,
        name: "White Drawer Unit",
        price: 89.99,
        originalPrice: null,
        discount: 0,
        rating: 5,
        category: "Storage",
        image: "/image/living-room-item/Card-2.svg",
        description: "Functional storage solution with three spacious drawers. Clean white finish complements any decor. Features smooth-gliding drawers with metal runners and elegant chrome handles for easy access to your belongings.",
        dimensions: "24\" W x 16\" D x 30\" H",
        material: "MDF with white lacquer finish",
        colors: ["white", "black", "natural"],
        colorNames: ["White", "Black", "Natural Wood"],
        colorHex: ["#FFFFFF", "#000000", "#DAA06D"],
        sku: "DRW-001",
        reviewCount: 78
    },
    {
        id: 6,
        name: "Black Tray Table",
        price: 19.99,
        originalPrice: null,
        discount: 0,
        rating: 5,
        category: "Tables",
        image: "/image/living-room-item/Image Placeholder-1.svg",
        description: "Versatile tray table perfect for serving or as accent furniture. Lightweight and portable, it's ideal for entertaining guests or adding extra surface space wherever needed. The removable tray top makes serving and cleanup a breeze.",
        dimensions: "18\" W x 18\" D x 24\" H",
        material: "Metal with powder coat finish",
        colors: ["black", "white", "gold"],
        colorNames: ["Black", "White", "Gold"],
        colorHex: ["#000000", "#FFFFFF", "#FFD700"],
        sku: "TBL-001",
        reviewCount: 92
    },
    {
        id: 7,
        name: "Black Brow Side Table",
        price: 16.99,
        originalPrice: null,
        discount: 0,
        rating: 5,
        category: "Tables",
        image: "/image/living-room-item/Card-4.svg",
        description: "Compact side table ideal for placing next to sofas or beds. Modern minimalist design with industrial appeal. The sturdy metal construction ensures stability while the compact footprint makes it perfect for small spaces.",
        dimensions: "16\" W x 16\" D x 22\" H",
        material: "Metal with black finish",
        colors: ["black", "silver", "bronze"],
        colorNames: ["Black", "Silver", "Bronze"],
        colorHex: ["#000000", "#C0C0C0", "#CD7F32"],
        sku: "TBL-002",
        reviewCount: 67
    },
    {
        id: 8,
        name: "Ceramic Table Lamp",
        price: 19.00,
        originalPrice: null,
        discount: 0,
        rating: 5,
        category: "Lighting",
        image: "/image/living-room-item/Card-3.svg",
        description: "Contemporary table lamp with elegant design. Provides soft, ambient lighting perfect for creating a cozy atmosphere. The classic ceramic base paired with a neutral linen shade ensures this lamp will coordinate with any decor style.",
        dimensions: "7\" W x 7\" D x 15\" H",
        material: "Ceramic base with linen shade",
        colors: ["beige", "gray", "white"],
        colorNames: ["Beige", "Gray", "White"],
        colorHex: ["#F5F5DC", "#808080", "#FFFFFF"],
        sku: "LMP-002",
        reviewCount: 134
    },
    {
        id: 9,
        name: "Light Beige Pillow",
        price: 3.99,
        originalPrice: null,
        discount: 0,
        rating: 5,
        category: "Decor",
        image: "/image/living-room-item/Card.svg",
        description: "Soft decorative pillow adds comfort and style. Perfect accent piece for any sofa or bed. The premium cotton cover is removable and machine washable for easy care, while the plush polyester fill maintains its shape use after use.",
        dimensions: "18\" W x 18\" H",
        material: "Cotton cover with polyester fill",
        colors: ["lightbeige", "cream", "taupe"],
        colorNames: ["Light Beige", "Cream", "Taupe"],
        colorHex: ["#F5F5DC", "#FFFDD0", "#483C32"],
        sku: "PIL-001",
        reviewCount: 245
    },
    {
        id: 10,
        name: "Adjustable Desk Lamp",
        price: 39.99,
        originalPrice: null,
        discount: 0,
        rating: 5,
        category: "Lighting",
        image: "/image/living-room-item/Card-1.svg",
        description: "Premium table lamp with adjustable arm. Perfect for reading and task lighting, this lamp features a flexible gooseneck design that lets you direct light exactly where you need it. The brushed metal finish adds a modern touch to any workspace.",
        dimensions: "8\" W x 8\" D x 20\" H",
        material: "Brushed metal with adjustable head",
        colors: ["silver", "black", "gold"],
        colorNames: ["Silver", "Black", "Gold"],
        colorHex: ["#C0C0C0", "#000000", "#FFD700"],
        sku: "LMP-003",
        reviewCount: 98
    },
    {
        id: 11,
        name: "Bamboo Basket",
        price: 9.99,
        originalPrice: null,
        discount: 0,
        rating: 5,
        category: "Storage",
        image: "/image/living-room-item/Image Placeholder-2.svg",
        description: "Natural bamboo storage basket. Eco-friendly and stylish organization solution perfect for storing toys, blankets, magazines, or any household items. The handwoven construction adds texture and warmth to your space while helping keep clutter at bay.",
        dimensions: "14\" W x 14\" D x 12\" H",
        material: "100% natural bamboo",
        colors: ["natural", "darkbrown", "honey"],
        colorNames: ["Natural", "Dark Brown", "Honey"],
        colorHex: ["#DAA06D", "#654321", "#D4AF37"],
        sku: "BSK-001",
        reviewCount: 187
    },
    {
        id: 12,
        name: "Off-white Pillow",
        price: 7.99,
        originalPrice: null,
        discount: 0,
        rating: 5,
        category: "Decor",
        image: "/image/living-room-item/Image Placeholder-3.svg",
        description: "Plush decorative pillow with neutral tone. Adds cozy comfort to any space while providing lumbar support. The luxurious velvet cover has a subtle sheen that catches the light beautifully, and the down alternative fill offers cloud-like softness.",
        dimensions: "20\" W x 20\" H",
        material: "Velvet cover with down alternative fill",
        colors: ["offwhite", "ivory", "champagne"],
        colorNames: ["Off-white", "Ivory", "Champagne"],
        colorHex: ["#FAF9F6", "#FFFFF0", "#F7E7CE"],
        sku: "PIL-002",
        reviewCount: 312
    }
];

// Function to navigate to product detail page
function goToProductPage(productId) {
    // Save product ID to localStorage
    localStorage.setItem('selectedProductId', productId);
    
    // Navigate to info.html with product ID in URL
    window.location.href = `Information_staff.html?id=${productId}`;
}

// Add click event listeners to all product items
document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.item');
    
    productItems.forEach((item, index) => {
        // Add cursor pointer style
        item.style.cursor = 'pointer';
        
        // Add click event listener
        item.addEventListener('click', function(e) {
            // Prevent navigation if clicking on specific interactive elements
            if (e.target.closest('.avertise') || e.target.closest('.star')) {
                return;
            }
            
            // Get product ID (index + 1 since IDs start at 1)
            const productId = index + 1;
            goToProductPage(productId);
        });
        
        // Add hover effect
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});