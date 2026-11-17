export const CURRENCY = "$";

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  emoji: string;
  origin: string;
  certification: string;
  description: string;
  tags: string[];
  bestseller?: boolean;
};

export const categories = [
  { name: "Grains & Pulses", emoji: "🌾" },
  { name: "Honey & Sweeteners", emoji: "🍯" },
  { name: "Spices & Herbs", emoji: "🌿" },
  { name: "Oils & Ghee", emoji: "🫒" },
  { name: "Fruits & Vegetables", emoji: "🥕" },
  { name: "Tea & Coffee", emoji: "🍵" },
  { name: "Snacks & Dry Fruits", emoji: "🥜" },
  { name: "Gift Hampers", emoji: "🎁" },
];

export const products: Product[] = [
  {
    slug: "organic-brown-rice",
    name: "Organic Brown Rice",
    category: "Grains & Pulses",
    price: 6.5,
    unit: "1 kg",
    emoji: "🍚",
    origin: "Punjab farms",
    certification: "India Organic",
    description:
      "Whole-grain brown rice, unpolished and naturally nutty. Grown without synthetic pesticides and packed within days of milling.",
    tags: ["vegan", "gluten-free"],
    bestseller: true,
  },
  {
    slug: "wild-forest-honey",
    name: "Wild Forest Honey",
    category: "Honey & Sweeteners",
    price: 12.9,
    unit: "500 g",
    emoji: "🍯",
    origin: "Nilgiri forests",
    certification: "USDA Organic",
    description:
      "Raw, unfiltered honey harvested sustainably from wild forest hives. Thick, golden and full of floral depth.",
    tags: ["raw", "sugar-free"],
    bestseller: true,
  },
  {
    slug: "cold-pressed-mustard-oil",
    name: "Cold-Pressed Mustard Oil",
    category: "Oils & Ghee",
    price: 9.8,
    unit: "1 L",
    emoji: "🫒",
    origin: "Rajasthan",
    certification: "India Organic",
    description:
      "Traditionally cold-pressed from organic mustard seeds. Bold aroma, ideal for everyday cooking and pickles.",
    tags: ["vegan", "cold-pressed"],
    bestseller: true,
  },
  {
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    category: "Spices & Herbs",
    price: 4.2,
    unit: "200 g",
    emoji: "🌿",
    origin: "Erode, Tamil Nadu",
    certification: "India Organic",
    description:
      "High-curcumin turmeric, sun-dried and stone-ground. Vivid golden colour and earthy flavour.",
    tags: ["vegan", "gluten-free"],
    bestseller: true,
  },
  {
    slug: "a2-desi-ghee",
    name: "A2 Desi Ghee",
    category: "Oils & Ghee",
    price: 18.5,
    unit: "500 ml",
    emoji: "🧈",
    origin: "Gir farms, Gujarat",
    certification: "India Organic",
    description:
      "Slow-simmered, bilona-method ghee from grass-fed A2 cows. Rich, grainy and aromatic.",
    tags: ["grass-fed", "gluten-free"],
  },
  {
    slug: "organic-toor-dal",
    name: "Organic Toor Dal",
    category: "Grains & Pulses",
    price: 5.9,
    unit: "1 kg",
    emoji: "🫘",
    origin: "Maharashtra",
    certification: "India Organic",
    description:
      "Unpolished split pigeon peas that cook soft and creamy. A protein-rich daily staple.",
    tags: ["vegan", "high-protein"],
  },
  {
    slug: "green-tea-leaves",
    name: "Himalayan Green Tea",
    category: "Tea & Coffee",
    price: 8.4,
    unit: "100 g",
    emoji: "🍵",
    origin: "Darjeeling",
    certification: "EU Organic",
    description:
      "Hand-plucked whole leaves with a fresh, gentle sweetness. Brews a clear, light cup.",
    tags: ["vegan", "antioxidant-rich"],
    bestseller: true,
  },
  {
    slug: "raw-almonds",
    name: "Raw California Almonds",
    category: "Snacks & Dry Fruits",
    price: 11.2,
    unit: "500 g",
    emoji: "🥜",
    origin: "California",
    certification: "USDA Organic",
    description:
      "Crunchy, unroasted almonds. A clean snack for mornings, baking or overnight soaking.",
    tags: ["vegan", "gluten-free"],
  },
  {
    slug: "organic-jaggery",
    name: "Organic Jaggery Blocks",
    category: "Honey & Sweeteners",
    price: 3.6,
    unit: "500 g",
    emoji: "🟤",
    origin: "Kolhapur",
    certification: "India Organic",
    description:
      "Unrefined cane jaggery with a deep caramel taste. A mineral-rich alternative to white sugar.",
    tags: ["vegan", "unrefined"],
  },
  {
    slug: "baby-spinach",
    name: "Baby Spinach Bunch",
    category: "Fruits & Vegetables",
    price: 2.5,
    unit: "250 g",
    emoji: "🥬",
    origin: "Local farm, 40 km away",
    certification: "India Organic",
    description:
      "Tender leaves harvested the morning of dispatch. Perfect for salads, smoothies and sautés.",
    tags: ["vegan", "fresh"],
  },
  {
    slug: "black-pepper-whole",
    name: "Whole Black Pepper",
    category: "Spices & Herbs",
    price: 5.5,
    unit: "100 g",
    emoji: "⚫",
    origin: "Wayanad, Kerala",
    certification: "India Organic",
    description:
      "Plump, pungent peppercorns from shade-grown vines. Grind fresh for the best aroma.",
    tags: ["vegan", "gluten-free"],
  },
  {
    slug: "donne-welcome-hamper",
    name: "Donne Welcome Hamper",
    category: "Gift Hampers",
    price: 29.0,
    unit: "6 items",
    emoji: "🎁",
    origin: "Curated by Donne",
    certification: "Mixed organic",
    description:
      "A hand-packed box with honey, tea, almonds, jaggery, turmeric and rice. A thoughtful gift in eco packaging.",
    tags: ["gift", "eco-packaging"],
    bestseller: true,
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const formatPrice = (n: number) => `${CURRENCY}${n.toFixed(2)}`;
