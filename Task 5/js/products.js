// ===========================
// products.js — Product Data
// ===========================

const PRODUCTS = [
  // Electronics
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    category: "electronics",
    price: 2999,
    originalPrice: 4999,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    description: "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and foldable design. Crystal-clear audio with deep bass and a comfortable memory foam ear cushion — perfect for travel, work, and everyday listening."
  },
  {
    id: 2,
    name: "Smart Watch Pro Series",
    category: "electronics",
    price: 3499,
    originalPrice: 5500,
    rating: 4.3,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    description: "Feature-packed smartwatch with health tracking, GPS, SpO2 monitor, and 7-day battery. Pair with iOS or Android for notifications, workout stats, and an always-on display. Water-resistant up to 50 metres."
  },
  {
    id: 3,
    name: "Mechanical Keyboard RGB",
    category: "electronics",
    price: 1899,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 214,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=300&fit=crop",
    description: "Tenkeyless mechanical keyboard with tactile brown switches, per-key RGB lighting, and a compact aluminium frame. Ideal for programmers and gamers who want both style and performance in a clean form factor."
  },
  {
    id: 4,
    name: "Portable Bluetooth Speaker",
    category: "electronics",
    price: 1299,
    originalPrice: 1999,
    rating: 4.2,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    description: "360-degree surround sound speaker with IP67 waterproof rating, 12-hour playtime, and a rugged rubber chassis. Built-in mic for hands-free calls. Charges fully in 2 hours via USB-C."
  },
  {
    id: 5,
    name: "USB-C 4-Port Hub",
    category: "electronics",
    price: 649,
    originalPrice: 999,
    rating: 4.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description: "Slim aluminium USB-C hub with 4 ports: 2× USB-A 3.0, 1× USB-C PD 60W pass-through, and 1× HDMI 4K@30Hz. Plug-and-play with no drivers needed. Works with MacBook, iPad Pro, and all USB-C laptops."
  },

  // Clothing
  {
    id: 6,
    name: "Classic Fit Oxford Shirt",
    category: "clothing",
    price: 899,
    originalPrice: 1499,
    rating: 4.1,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop",
    description: "100% cotton Oxford weave shirt with a relaxed classic fit. Dressy enough for the office, casual enough for weekends. Button-down collar, chest pocket, and machine-washable fabric that keeps its shape wash after wash."
  },
  {
    id: 7,
    name: "Slim Fit Chino Trousers",
    category: "clothing",
    price: 1099,
    originalPrice: 1799,
    rating: 4.4,
    reviews: 91,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
    description: "Versatile slim-fit chinos in a cotton-stretch blend that moves with you. Four-pocket flat-front construction with a tapered leg — a wardrobe staple from casual outings to smart-casual meetings."
  },
  {
    id: 8,
    name: "Hooded Fleece Sweatshirt",
    category: "clothing",
    price: 749,
    originalPrice: 1199,
    rating: 4.6,
    reviews: 163,
    image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&h=300&fit=crop",
    description: "Soft 300gsm fleece hoodie with a brushed interior for maximum warmth. Kangaroo pocket, ribbed cuffs and hem, and a double-lined hood. Pre-shrunk fabric stays true to size after every wash."
  },
  {
    id: 9,
    name: "Graphic Print Oversized Tee",
    category: "clothing",
    price: 399,
    originalPrice: 699,
    rating: 3.9,
    reviews: 34,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    description: "Relaxed-fit oversized tee in 100% combed cotton. Bold graphic front print with a dropped shoulder and boxy silhouette. Pairs well with joggers or jeans for an effortless everyday look."
  },
  {
    id: 10,
    name: "Quilted Puffer Jacket",
    category: "clothing",
    price: 2199,
    originalPrice: 3499,
    rating: 4.5,
    reviews: 108,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=300&fit=crop",
    description: "Lightweight quilted puffer with a DWR water-repellent shell and synthetic insulation that traps heat without bulk. Packs into its own pocket for easy storage. Ideal for cold commutes and weekend travel."
  },

  // Footwear
  {
    id: 11,
    name: "Running Shoes Air Cushion",
    category: "footwear",
    price: 1799,
    originalPrice: 2999,
    rating: 4.6,
    reviews: 201,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    description: "Engineered mesh upper with Air cushion midsole technology that absorbs impact and returns energy with every stride. Rubber outsole with multi-directional grip — suitable for road and light trail running."
  },
  {
    id: 12,
    name: "Casual Canvas Sneakers",
    category: "footwear",
    price: 899,
    originalPrice: 1499,
    rating: 4.2,
    reviews: 77,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=300&fit=crop",
    description: "Classic low-top canvas sneakers with a vulcanised rubber sole and cushioned insole. The timeless silhouette goes with virtually any outfit. Available in solid and two-tone colourways."
  },
  {
    id: 13,
    name: "Leather Derby Formal Shoes",
    category: "footwear",
    price: 2499,
    originalPrice: 3999,
    rating: 4.7,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&h=300&fit=crop",
    description: "Hand-stitched genuine leather derby with Goodyear-welt construction for long-term durability. Leather lining and cushioned insole for all-day comfort. A polished choice for formal occasions and the office."
  },
  {
    id: 14,
    name: "Slip-On Loafers",
    category: "footwear",
    price: 1199,
    originalPrice: 1899,
    rating: 4.0,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=300&fit=crop",
    description: "Effortlessly stylish slip-on loafers in suede with a penny-strap accent and crepe rubber sole. Lightweight and breathable — ideal for long days on your feet or quick errands."
  },

  // Accessories
  {
    id: 15,
    name: "Minimalist Leather Wallet",
    category: "accessories",
    price: 499,
    originalPrice: 799,
    rating: 4.4,
    reviews: 119,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=300&fit=crop",
    description: "Slim bifold wallet in full-grain vegetable-tanned leather. Holds up to 8 cards with a bill compartment. Develops a unique patina over time — gets better with age."
  },
  {
    id: 16,
    name: "Aviator Sunglasses UV400",
    category: "accessories",
    price: 699,
    originalPrice: 1199,
    rating: 4.1,
    reviews: 68,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
    description: "Classic teardrop aviator frames in lightweight stainless steel with UV400-rated polarised lenses. Reduces glare for driving and outdoor use. Includes a hard case and cleaning cloth."
  },
  {
    id: 17,
    name: "Canvas Backpack 25L",
    category: "accessories",
    price: 1299,
    originalPrice: 1999,
    rating: 4.5,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    description: "Waxed canvas backpack with 25L capacity, padded 15\" laptop sleeve, and multiple organiser pockets. YKK zippers and leather pull tabs throughout. Fits carry-on overhead bins."
  },
  {
    id: 18,
    name: "Stainless Steel Water Bottle",
    category: "accessories",
    price: 349,
    originalPrice: 599,
    rating: 4.3,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
    description: "Double-wall vacuum insulated 750ml bottle. Keeps liquids cold for 24 hours and hot for 12. BPA-free stainless steel interior with a leak-proof lid and powder-coated exterior for a secure grip."
  },

  // Home & Living
  {
    id: 19,
    name: "Bamboo Desk Organizer Set",
    category: "home",
    price: 799,
    originalPrice: 1299,
    rating: 4.4,
    reviews: 63,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    description: "5-piece sustainably sourced bamboo organiser — pen holder, phone stand, card tray, paper tray, and small shelf. Keeps your desk clutter-free with a clean, natural aesthetic."
  },
  {
    id: 20,
    name: "Scented Soy Candle Set",
    category: "home",
    price: 549,
    originalPrice: 899,
    rating: 4.6,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=400&h=300&fit=crop",
    description: "Set of 3 hand-poured 100% soy wax candles in amber glass jars. Fragrances: Cedarwood & Vanilla, Jasmine & Sandalwood, Fresh Linen. Burns cleanly for 40 hours each with a cotton wick."
  },
  {
    id: 21,
    name: "Ceramic Pour-Over Coffee Set",
    category: "home",
    price: 1499,
    originalPrice: 2299,
    rating: 4.8,
    reviews: 47,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    description: "Handcrafted ceramic pour-over dripper and matching mug in a matte speckled glaze. Conical shape promotes optimal water flow for a clean, balanced brew through medium-ground coffee."
  },
  {
    id: 22,
    name: "Printed Throw Pillow Cover",
    category: "home",
    price: 299,
    originalPrice: 499,
    rating: 3.8,
    reviews: 29,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    description: "Soft cotton-linen pillow cover with artisan block-print pattern. Hidden zipper closure, machine washable, fits 45×45cm inserts. Earthy tones that complement any living space."
  },
  {
    id: 23,
    name: "Indoor Plant Pot Set (3pcs)",
    category: "home",
    price: 649,
    originalPrice: 999,
    rating: 4.2,
    reviews: 81,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop",
    description: "Set of 3 minimalist terracotta-style pots in graduated sizes (10cm, 14cm, 18cm). Each includes a drainage saucer and bamboo tray. Ideal for succulents, herbs, and small indoor plants."
  },
  {
    id: 24,
    name: "Wireless Charging Pad",
    category: "electronics",
    price: 899,
    originalPrice: 1499,
    rating: 4.3,
    reviews: 115,
    image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=400&h=300&fit=crop",
    description: "10W Qi-certified wireless charging pad compatible with all Qi-enabled smartphones and earbuds. Ultra-thin silicone surface with LED indicator and foreign-object detection for safe, fast charging."
  },
];
