import bruschettaImg from "@/assets/bruschetta.jpg";
import caesarSaladImg from "@/assets/caesar-salad.jpg";
import lobsterBisqueImg from "@/assets/lobster-bisque.jpg";
import salmonImg from "@/assets/salmon.jpg";
import steakImg from "@/assets/steak.jpg";
import risottoImg from "@/assets/risotto.jpg";
import friedRiceImg from "@/assets/fried-rice.jpg";
import spicyChickenImg from "@/assets/spicy-chicken.jpg";
import ramenImg from "@/assets/ramen.jpg";
import tunaSandwichImg from "@/assets/tuna-sandwich.jpg";
import teriyakiBowlImg from "@/assets/teriyaki-bowl.jpg";
import lambChopsImg from "@/assets/lamb-chops.jpg";
import potatoWedgesImg from "@/assets/potato-wedges.jpg";
import friesImg from "@/assets/fries.jpg";
import burgerImg from "@/assets/burger.jpg";
import chickenNuggetsImg from "@/assets/chicken-nuggets.jpg";
import cocktailImg from "@/assets/cocktail.jpg";
import summerSourImg from "@/assets/summer-sour.jpg";
import mineralWaterImg from "@/assets/mineral-water.jpg";
import tropicalDrinkImg from "@/assets/tropical-drink.jpg";
import freshSodaImg from "@/assets/fresh-soda.jpg";
import tiramisuImg from "@/assets/tiramisu.jpg";
import lavaCakeImg from "@/assets/lava-cake.jpg";
import pannaCottaImg from "@/assets/panna-cotta.jpg";

export type DietaryTag = "Vegan" | "Vegetarian" | "Gluten-Free" | "Spicy";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: DietaryTag[];
  ingredients: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
}

export const categories: MenuCategory[] = [
  { id: "starters", name: "Starters", emoji: "🥗" },
  { id: "mains", name: "Mains", emoji: "🍽️" },
  { id: "snacks", name: "Snacks", emoji: "🍟" },
  { id: "drinks", name: "Drinks", emoji: "🍸" },
  { id: "desserts", name: "Desserts", emoji: "🍰" },
];

export const menuData: MenuItem[] = [
  // ── Starters ──
  {
    id: "bruschetta",
    name: "Heirloom Tomato Bruschetta",
    description: "Grilled sourdough, vine-ripened tomatoes, fresh basil, aged balsamic reduction.",
    price: 140,
    image: bruschettaImg,
    category: "starters",
    tags: ["Vegan"],
    ingredients: ["Sourdough bread", "Heirloom tomatoes", "Fresh basil", "Extra virgin olive oil", "Aged balsamic vinegar", "Garlic", "Sea salt"],
  },
  {
    id: "caesar-salad",
    name: "Classic Caesar Salad",
    description: "Crisp romaine, shaved Parmigiano-Reggiano, garlic croutons, house-made dressing.",
    price: 160,
    image: caesarSaladImg,
    category: "starters",
    tags: ["Vegetarian"],
    ingredients: ["Romaine lettuce", "Parmigiano-Reggiano", "Sourdough croutons", "Caesar dressing", "Lemon", "Anchovy", "Garlic"],
  },
  {
    id: "lobster-bisque",
    name: "Lobster Bisque",
    description: "Creamy New England bisque, Maine lobster, crème fraîche, smoked paprika.",
    price: 190,
    image: lobsterBisqueImg,
    category: "starters",
    tags: ["Gluten-Free"],
    ingredients: ["Maine lobster", "Heavy cream", "Tomato paste", "Shallots", "Cognac", "Crème fraîche", "Smoked paprika", "Fish stock"],
  },
  {
    id: "spicy-chicken",
    name: "Spicy Chicken Wings",
    description: "Crispy free-range wings, house gochujang glaze, sesame, scallion garnish.",
    price: 170,
    image: spicyChickenImg,
    category: "starters",
    tags: ["Spicy", "Gluten-Free"],
    ingredients: ["Free-range chicken wings", "Gochujang paste", "Honey", "Garlic", "Sesame seeds", "Scallions", "Rice vinegar"],
  },

  // ── Mains ──
  {
    id: "salmon",
    name: "Pan-Seared Atlantic Salmon",
    description: "Wild-caught salmon, citrus beurre blanc, roasted asparagus, microgreens.",
    price: 340,
    image: salmonImg,
    category: "mains",
    tags: ["Gluten-Free"],
    ingredients: ["Atlantic salmon", "Butter", "White wine", "Lemon", "Asparagus", "Shallots", "Fresh herbs", "Microgreens"],
  },
  {
    id: "steak",
    name: "Wagyu Beef Tenderloin",
    description: "A5 wagyu, truffle jus, pomme purée, seasonal vegetables.",
    price: 580,
    image: steakImg,
    category: "mains",
    tags: ["Gluten-Free"],
    ingredients: ["A5 Wagyu beef", "Black truffle", "Veal jus", "Yukon Gold potatoes", "Butter", "Cream", "Seasonal vegetables"],
  },
  {
    id: "risotto",
    name: "Wild Mushroom Risotto",
    description: "Arborio rice, porcini & shiitake mushrooms, truffle oil, aged Parmesan.",
    price: 280,
    image: risottoImg,
    category: "mains",
    tags: ["Vegetarian", "Gluten-Free"],
    ingredients: ["Arborio rice", "Porcini mushrooms", "Shiitake mushrooms", "White wine", "Parmesan", "Truffle oil", "Shallots", "Vegetable stock"],
  },
  {
    id: "fried-rice",
    name: "Chicken Fried Rice",
    description: "Wok-tossed jasmine rice, free-range chicken, farm eggs, crispy garlic chips.",
    price: 240,
    image: friedRiceImg,
    category: "mains",
    tags: [],
    ingredients: ["Jasmine rice", "Free-range chicken", "Farm eggs", "Garlic", "Soy sauce", "Sesame oil", "Green onion", "Carrots", "Peas"],
  },
  {
    id: "ramen",
    name: "Tonkotsu Ramen",
    description: "18-hour pork bone broth, chashu pork, soft-boiled egg, nori, pickled ginger.",
    price: 260,
    image: ramenImg,
    category: "mains",
    tags: ["Spicy"],
    ingredients: ["Pork bone broth", "Ramen noodles", "Chashu pork", "Soft-boiled egg", "Nori", "Pickled ginger", "Green onion", "Sesame seeds"],
  },
  {
    id: "tuna-sandwich",
    name: "Seared Tuna Sandwich",
    description: "Yellowfin tuna, wasabi aioli, butter lettuce, artisan sourdough toast.",
    price: 220,
    image: tunaSandwichImg,
    category: "mains",
    tags: [],
    ingredients: ["Yellowfin tuna", "Sourdough bread", "Wasabi aioli", "Butter lettuce", "Red onion", "Capers", "Lemon"],
  },
  {
    id: "teriyaki-bowl",
    name: "Teriyaki Rice Bowl",
    description: "Glazed chicken thigh, steamed rice, pickled vegetables, toasted nori.",
    price: 250,
    image: teriyakiBowlImg,
    category: "mains",
    tags: ["Gluten-Free"],
    ingredients: ["Chicken thigh", "Teriyaki sauce", "Steamed rice", "Pickled daikon", "Carrots", "Edamame", "Toasted nori", "Sesame seeds"],
  },
  {
    id: "lamb-chops",
    name: "Herb-Crusted Lamb Chops",
    description: "New Zealand lamb, rosemary crust, mint chimichurri, roasted root vegetables.",
    price: 440,
    image: lambChopsImg,
    category: "mains",
    tags: ["Gluten-Free"],
    ingredients: ["New Zealand lamb rack", "Rosemary", "Thyme", "Garlic", "Dijon mustard", "Mint", "Parsley", "Root vegetables"],
  },

  // ── Snacks ──
  {
    id: "potato-wedges",
    name: "Seasoned Potato Wedges",
    description: "Crispy skin-on wedges, smoked paprika, house-made garlic aioli.",
    price: 120,
    image: potatoWedgesImg,
    category: "snacks",
    tags: ["Vegan", "Gluten-Free"],
    ingredients: ["Yukon Gold potatoes", "Smoked paprika", "Garlic powder", "Olive oil", "Rosemary", "Sea salt", "Garlic aioli"],
  },
  {
    id: "fries",
    name: "Truffle Parmesan Fries",
    description: "Hand-cut golden fries, truffle oil drizzle, shaved Parmesan, fresh herbs.",
    price: 140,
    image: friesImg,
    category: "snacks",
    tags: ["Vegetarian"],
    ingredients: ["Russet potatoes", "Truffle oil", "Parmesan", "Fresh parsley", "Garlic", "Sea salt"],
  },
  {
    id: "burger",
    name: "Smash Burger",
    description: "Double dry-aged patties, aged cheddar, special sauce, brioche bun.",
    price: 220,
    image: burgerImg,
    category: "snacks",
    tags: [],
    ingredients: ["Dry-aged beef patties", "Aged cheddar", "Brioche bun", "Tomato", "Butter lettuce", "Red onion", "House special sauce", "Pickles"],
  },
  {
    id: "chicken-nuggets",
    name: "Crispy Chicken Nuggets",
    description: "Buttermilk-brined chicken, panko crust, honey mustard & sriracha mayo.",
    price: 150,
    image: chickenNuggetsImg,
    category: "snacks",
    tags: ["Spicy"],
    ingredients: ["Chicken breast", "Buttermilk", "Panko breadcrumbs", "Honey mustard", "Sriracha mayo", "Garlic powder", "Paprika"],
  },

  // ── Drinks ──
  {
    id: "old-fashioned",
    name: "Smoked Old Fashioned",
    description: "Bourbon, applewood smoke, Demerara syrup, Angostura bitters, orange zest.",
    price: 180,
    image: cocktailImg,
    category: "drinks",
    tags: ["Gluten-Free", "Vegan"],
    ingredients: ["Bourbon whiskey", "Demerara sugar", "Angostura bitters", "Orange peel", "Applewood chips", "Luxardo cherry"],
  },
  {
    id: "summer-sour",
    name: "Summer Sour",
    description: "Citrus vodka, elderflower, fresh lemon, rosemary sprig, egg white foam.",
    price: 160,
    image: summerSourImg,
    category: "drinks",
    tags: ["Gluten-Free"],
    ingredients: ["Citrus vodka", "Elderflower liqueur", "Fresh lemon juice", "Egg white", "Simple syrup", "Rosemary"],
  },
  {
    id: "mineral-water",
    name: "Sparkling Mineral Water",
    description: "San Pellegrino sparkling, fresh lime wedge, served chilled.",
    price: 80,
    image: mineralWaterImg,
    category: "drinks",
    tags: ["Vegan", "Gluten-Free"],
    ingredients: ["San Pellegrino sparkling water", "Fresh lime"],
  },
  {
    id: "tropical-sweet",
    name: "Tropical Sweet Punch",
    description: "Mango, passion fruit, pineapple, coconut cream, crushed ice.",
    price: 140,
    image: tropicalDrinkImg,
    category: "drinks",
    tags: ["Vegan", "Gluten-Free"],
    ingredients: ["Mango purée", "Passion fruit", "Pineapple juice", "Coconut cream", "Lime", "Crushed ice"],
  },
  {
    id: "fresh-soda",
    name: "House-Made Lemon Soda",
    description: "Fresh-squeezed lemon, raw cane sugar, sparkling water, mint leaves.",
    price: 100,
    image: freshSodaImg,
    category: "drinks",
    tags: ["Vegan", "Gluten-Free"],
    ingredients: ["Fresh lemons", "Raw cane sugar", "Sparkling water", "Fresh mint", "Ice"],
  },

  // ── Desserts ──
  {
    id: "tiramisu",
    name: "Classic Tiramisu",
    description: "Espresso-soaked ladyfingers, mascarpone cream, Valrhona cocoa dusting.",
    price: 160,
    image: tiramisuImg,
    category: "desserts",
    tags: ["Vegetarian"],
    ingredients: ["Mascarpone", "Ladyfinger biscuits", "Espresso", "Marsala wine", "Egg yolks", "Valrhona cocoa", "Heavy cream"],
  },
  {
    id: "lava-cake",
    name: "Chocolate Lava Cake",
    description: "Molten dark chocolate center, tahitian vanilla gelato, gold leaf.",
    price: 180,
    image: lavaCakeImg,
    category: "desserts",
    tags: ["Vegetarian"],
    ingredients: ["Dark chocolate 70%", "Butter", "Eggs", "Sugar", "Flour", "Tahitian vanilla gelato", "Edible gold leaf"],
  },
  {
    id: "panna-cotta",
    name: "Vanilla Panna Cotta",
    description: "Bourbon vanilla bean, berry coulis, fresh blackberries, mint.",
    price: 150,
    image: pannaCottaImg,
    category: "desserts",
    tags: ["Vegetarian", "Gluten-Free"],
    ingredients: ["Heavy cream", "Bourbon vanilla bean", "Sugar", "Gelatin", "Mixed berry coulis", "Fresh blackberries", "Mint"],
  },
];
