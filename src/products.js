const furnitureProducts = [
    // Couches Category
    {
        id: 1,
        name: "Modern Leather Couch",
        description: "A sleek and modern leather couch perfect for living rooms.",
        price: 1299.99,
        category: "couches",
        featured: true,
        bestSeller: true,
        image: "sofa5.jpeg"
    },
    {
        id: 2,
        name: "Minimalist Grey Sofa",
        description: "A minimalist grey sofa with plush cushions and clean lines.",
        price: 799.99,
        category: "couches",
        featured: false,
        bestSeller: false,
        image: "sofa6.jpeg"
    },
    {
        id: 3,
        name: "Luxury Velvet Couch",
        description: "A luxurious velvet couch that adds elegance to any room.",
        price: 1099.99,
        category: "couches",
        featured: true,
        bestSeller: false,
        image: "sofa7.jpeg"
    },
    {
        id: 4,
        name: "L-Shaped Sofa",
        description: "Spacious L-shaped sofa with a stylish, modern design.",
        price: 1499.99,
        category: "couches",
        featured: false,
        bestSeller: true,
        image: "sofa8.jpeg"
    },
    {
        id: 5,
        name: "Rustic Leather Couch",
        description: "A rustic-style leather couch with a vintage look.",
        price: 1349.99,
        category: "couches",
        featured: false,
        bestSeller: false,
        image: "sofa9.jpeg"
    },
    {
        id: 6,
        name: "Mid-century Modern Couch",
        description: "A mid-century modern couch featuring wood and fabric blend.",
        price: 899.99,
        category: "couches",
        featured: true,
        bestSeller: false,
        image: "sofa10.jpeg"
    },
    {
        id: 7,
        name: "Convertible Sofa Bed",
        description: "A versatile sofa that easily converts into a bed.",
        price: 999.99,
        category: "couches",
        featured: false,
        bestSeller: true,
        image: "sofa11.jpeg"
    },
    {
        id: 8,
        name: "Reclining Sectional Sofa",
        description: "A reclining sectional sofa that offers maximum comfort.",
        price: 1799.99,
        category: "couches",
        featured: true,
        bestSeller: false,
        image: "sofa12.jpeg"
    },
    {
        id: 9,
        name: "Velvet Chesterfield Sofa",
        description: "A velvet Chesterfield sofa with classic button-tufted design.",
        price: 1299.99,
        category: "couches",
        featured: false,
        bestSeller: true,
        image: "sofa13.jpeg"
    },
    // {
    //     id: 10,
    //     name: "Scandinavian Sofa",
    //     description: "A clean and elegant Scandinavian-style sofa.",
    //     price: 999.99,
    //     category: "couches",
    //     featured: false,
    //     bestSeller: false,
    //     image: "sofa10.jpeg"
    // },

    // Office Chairs Category
    {
        id: 11,
        name: "Ergonomic Office Chair",
        description: "A modern ergonomic chair offering maximum support for long work hours.",
        price: 299.99,
        category: "office chairs",
        featured: true,
        bestSeller: true,
        image: "office1.jpeg"
    },
    {
        id: 12,
        name: "Leather Executive Chair",
        description: "An executive office chair with premium leather finish.",
        price: 399.99,
        category: "office chairs",
        featured: false,
        bestSeller: false,
        image: "office2.jpeg"
    },
    {
        id: 13,
        name: "Mesh Back Office Chair",
        description: "A breathable mesh back chair for extra comfort.",
        price: 199.99,
        category: "office chairs",
        featured: false,
        bestSeller: false,
        image: "office3.jpeg"
    },
    {
        id: 14,
        name: "Adjustable Office Chair",
        description: "A fully adjustable office chair with wheels for easy mobility.",
        price: 249.99,
        category: "office chairs",
        featured: false,
        bestSeller: true,
        image: "office4.jpeg"
    },
    // {
    //     id: 15,
    //     name: "Minimalist White Office Chair",
    //     description: "A sleek white office chair with a minimalist design.",
    //     price: 229.99,
    //     category: "office chairs",
    //     featured: true,
    //     bestSeller: false,
    //     image: "https://unsplash.com/photos/rwwL6JAxkIo"
    // },
    // {
    //     id: 16,
    //     name: "High-back Office Chair",
    //     description: "A high-back office chair with additional lumbar support.",
    //     price: 279.99,
    //     category: "office chairs",
    //     featured: true,
    //     bestSeller: false,
    //     image: "https://unsplash.com/photos/6sCxZ9CxAHA"
    // },
    // {
    //     id: 17,
    //     name: "Swivel Task Chair",
    //     description: "A lightweight swivel chair perfect for daily tasks.",
    //     price: 149.99,
    //     category: "office chairs",
    //     featured: false,
    //     bestSeller: true,
    //     image: "https://unsplash.com/photos/QBpZGqEMsKg"
    // },
    // {
    //     id: 18,
    //     name: "Luxury Velvet Office Chair",
    //     description: "A velvet upholstered chair offering elegance and comfort.",
    //     price: 299.99,
    //     category: "office chairs",
    //     featured: false,
    //     bestSeller: false,
    //     image: "https://unsplash.com/photos/r7kyBXmsb6M"
    // },
    // {
    //     id: 19,
    //     name: "Portable Office Chair",
    //     description: "A lightweight, foldable chair for convenient office use.",
    //     price: 99.99,
    //     category: "office chairs",
    //     featured: false,
    //     bestSeller: false,
    //     image: "https://unsplash.com/photos/mCJ3R0uMiYQ"
    // },
    // {
    //     id: 20,
    //     name: "Fabric Task Chair",
    //     description: "A fabric task chair for home and office use.",
    //     price: 199.99,
    //     category: "office chairs",
    //     featured: true,
    //     bestSeller: false,
    //     image: "https://unsplash.com/photos/rx2BPq5aNVg"
    // },

    // // Stool Chairs Category
    {
        id: 21,
        name: "Wooden Bar Stool",
        description: "A sturdy wooden bar stool with a modern finish.",
        price: 129.99,
        category: "stool chairs",
        featured: true,
        bestSeller: true,
        image: "stool1.jpeg"
    },
    {
        id: 22,
        name: "Minimalist Metal Stool",
        description: "A minimalist metal stool with a contemporary design.",
        price: 89.99,
        category: "stool chairs",
        featured: false,
        bestSeller: false,
        image: "stool2.jpeg"
    },
    {
        id: 23,
        name: "Rustic Bar Stool",
        description: "A rustic-style bar stool made of reclaimed wood.",
        price: 119.99,
        category: "stool chairs",
        featured: true,
        bestSeller: false,
        image: "stool3.jpeg"
    },
    {
        id: 24,
        name: "Contemporary White Stool",
        description: "A white bar stool with a sleek contemporary design.",
        price: 99.99,
        category: "stool chairs",
        featured: false,
        bestSeller: true,
        image: "stool4.jpeg"
    },
    // {
    //     id: 25,
    //     name: "Adjustable Swivel Stool",
    //     description: "A comfortable adjustable swivel stool for versatile seating.",
    //     price: 149.99,
    //     category: "stool chairs",
    //     featured: false,
    //     bestSeller: true,
    //     image: "https://unsplash.com/photos/nV03awww36s"
    // },
    // Dressers
    // {
    //     id: 25,
    //     name: "Modern Oak Dresser",
    //     description: "A sleek, modern oak dresser with six spacious drawers. Perfect for minimalist interiors.",
    //     price: 399.99,
    //     featured: true,
    //     bestSeller: false,
    //     category: "dressers",
    //     image: "https://unsplash.com/photos/j6TTJ5R46Ew"
    // },
    // {
    //     id: 26,
    //     name: "Vintage Wooden Dresser",
    //     description: "A vintage wooden dresser with brass handles and a rustic finish. Adds character to any bedroom.",
    //     price: 549.99,
    //     featured: false,
    //     bestSeller: true,
    //     category: "dressers",
    //     image: "https://unsplash.com/photos/DPEPYPBZpB8"
    // },
    {
        id: 27,
        name: "Scandinavian White Dresser",
        description: "A clean, white Scandinavian-style dresser with three drawers. Ideal for modern spaces.",
        price: 299.99,
        featured: false,
        bestSeller: false,
        category: "dressers",
        image: "dresser1.jpeg"
    },
    {
        id: 28,
        name: "Rustic Farmhouse Dresser",
        description: "A large rustic dresser with distressed wood and black metal accents. Provides ample storage.",
        price: 625.00,
        featured: true,
        bestSeller: true,
        category: "dressers",
        image: "dresser2.jpeg"
    },
    {
        id: 29,
        name: "Minimalist Walnut Dresser",
        description: "A minimalist dresser made from walnut, offering four smooth-gliding drawers.",
        price: 479.99,
        featured: false,
        bestSeller: false,
        category: "dressers",
        image: "dresser3.jpeg"
    },
    {
        id: 30,
        name: "Dark Oak Tall Dresser",
        description: "A tall dresser crafted from dark oak with five drawers. Great for saving floor space.",
        price: 510.00,
        featured: true,
        bestSeller: false,
        category: "dressers",
        image: "dresser4.jpeg"
    },

    // Lamps
    // {
    //     id: 31,
    //     name: "Industrial Table Lamp",
    //     description: "A stylish industrial-style table lamp with an exposed bulb. Adds a modern touch to any room.",
    //     price: 89.99,
    //     featured: true,
    //     bestSeller: true,
    //     category: "lamps",
    //     image: "https://unsplash.com/photos/7F65HDP0-E0"
    // },
    // {
    //     id: 32,
    //     name: "Classic Brass Lamp",
    //     description: "A classic table lamp with a brass finish and a white linen shade. Timeless and elegant.",
    //     price: 129.99,
    //     featured: false,
    //     bestSeller: true,
    //     category: "lamps",
    //     image: "https://unsplash.com/photos/hOIfLJoYPi8"
    // },
    {
        id: 33,
        name: "Modern LED Floor Lamp",
        description: "A sleek floor lamp with LED lighting, ideal for living rooms or offices.",
        price: 150.00,
        featured: true,
        bestSeller: false,
        category: "lamps",
        image: "lamp1.jpeg"
    },
    {
        id: 34,
        name: "Geometric Desk Lamp",
        description: "A geometric design desk lamp with adjustable height and an angled shade.",
        price: 74.99,
        featured: false,
        bestSeller: false,
        category: "lamps",
        image: "lamp2.jpeg"
    },
    {
        id: 35,
        name: "Art Deco Floor Lamp",
        description: "An Art Deco-inspired floor lamp with brass detailing and frosted glass. Perfect for art lovers.",
        price: 199.99,
        featured: true,
        bestSeller: false,
        category: "lamps",
        image: "lamp3.jpeg"
    },
    {
        id: 36,
        name: "Wooden Tripod Lamp",
        description: "A modern wooden tripod lamp with a neutral linen shade, adding warmth to any room.",
        price: 139.99,
        featured: false,
        bestSeller: true,
        category: "lamps",
        image: "lamp4.jpeg"
    }
];

// Add more products for other categories following the same structure.


const getProducts = () => {
    return furnitureProducts;
}

export { getProducts };