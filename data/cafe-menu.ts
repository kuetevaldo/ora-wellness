export type CafeMenuItem = {
  name: string;
  description?: string;
  price: number;
};

export type CafeMenuSection = {
  id: string;
  title: string;
  eyebrow?: string;
  items: CafeMenuItem[];
};

export const cafeMenu: CafeMenuSection[] = [
  {
    id: "viennoiserie",
    title: "Viennoiserie",
    eyebrow: "Petit-déjeuner",
    items: [
      {
        name: "Panier de Pain Artisanal",
        description: "Avec confitures et beurre",
        price: 3000,
      },
      {
        name: "Croissant Nature",
        price: 1000,
      },
      {
        name: "Pain au Chocolat",
        price: 1500,
      },
      {
        name: "Croissant au Thym",
        price: 1500,
      },
      {
        name: "Croissant au Fromage",
        price: 2000,
      },
    ],
  },

  {
    id: "sale",
    title: "Salé",
    eyebrow: "Petit-déjeuner",
    items: [
      {
        name: "Labneh",
        description:
          "Labneh crémeux, tomates, concombre, olives noires et menthe, servi avec du pain pita.",
        price: 9000,
      },
      {
        name: "Halloumi",
        description:
          "Pain markouk, halloumi grillé, tomates, concombre, olives noires et menthe, servi avec du pain pita.",
        price: 9500,
      },
    ],
  },

  {
  id: "oeufs",
  title: "Œufs",
  eyebrow: "Petit-déjeuner",
  items: [
    {
      name: "Omelette aux Blancs d'Œufs",
      description:
        "Blancs d'œufs, épinards et tomates, servie avec un mesclun de salade.",
      price: 4500,
    },
    {
      name: "Omelette Nature",
      description:
        "Omelette, servie avec un mesclun de salade.",
      price: 3500,
    },
    {
      name: "Œufs au Plat",
      description:
        "Œufs frits sur pain toast, servis avec un mesclun de salade.",
      price: 4000,
    },
    {
      name: "Œufs Bénédicte",
      description:
        "Deux œufs pochés sur muffin anglais, sauce hollandaise et salade verte.",
      price: 4000,
    },
  ],
},

{
  id: "avoine",
  title: "Flocons d'Avoine",
  eyebrow: "Petit-déjeuner",
  items: [
    {
      name: "Flocons d'Avoine à la Vanille",
      description:
        "Lait, vanille, pomme, cannelle, noix et raisins secs.",
      price: 7000,
    },
    {
      name: "Flocons d'Avoine au Chocolat",
      description:
        "Lait, cacao, banane, graines de chia, beurre de cacahuète et pépites de chocolat.",
      price: 7000,
    },
  ],
},

{
  id: "yaourt",
  title: "Yaourt Grec",
  eyebrow: "Petit-déjeuner",
  items: [
    {
      name: "Fruits Rouges",
      description:
        "Fruits rouges et granola.",
      price: 5500,
    },
    {
      name: "Datte",
      description:
        "Dattes, yaourt, banane, granola et pépites de chocolat.",
      price: 6000,
    },
  ],
},

{
  id: "salades",
  title: "Salades",
  items: [
    {
      name: "César Classique",
      description:
        "Sucrine & iceberg, tomates séchées, Parmesan et croûtons aux herbes, servis avec une sauce César.",
      price: 8000,
    },
    {
      name: "Thaï",
      description:
        "Nouilles asiatiques, sucrine, choux vert et rouge, carottes, concombre, coriandre, oignon vert, avocat, graines de sésame, gingembre, menthe, citronnelle, croustillants en tempura et cacahuètes concassées, servie avec une sauce asiatique.",
      price: 12000,
    },
    {
      name: "Quinoa et Potiron Grillé",
      description:
        "Roquette, quinoa, fromage de chèvre, potiron grillé, tomates cerises, graines de courge et graines de grenade séchées, servi avec de l'huile au citron.",
      price: 13000,
    },
    {
      name: "Niçoise",
      description:
        "Filet de thon, sucrine, pommes de terre, haricots verts, olives noires, tomates cerises et œufs, servie avec une sauce vinaigrette.",
      price: 14000,
    },
  ],
},

{
  id: "sandwichs",
  title: "Sandwichs",
  items: [
    {
      name: "Le Club",
      description:
        "Poulet grillé, iceberg, omelette, tomates, cornichons, emmental, dinde, mayonnaise légère et moutarde de Dijon, servi avec chips de pomme de terre maison.",
      price: 10000,
    },
    {
      name: "Club Saumon Fumé",
      description:
        "Saumon fumé, laitue, fromage à la crème, aneth, câpres et quartiers de citron, servi avec chips.",
      price: 14000,
    },
    {
      name: "Halloumi Fumé",
      description:
        "Pain markouk halloumi grillé, iceberg, tomates et labneh sauce pesto.",
      price: 8500,
    },
    {
      name: "Croque Monsieur",
      description:
        "Dinde fumée, croissant, fromage et sauce béchamel.",
      price: 7500,
    },
    {
      name: "Croque Madame",
      description:
        "Dinde fumée, fromage, omelette et sauce béchamel.",
      price: 8500,
    },
  ],
},
{
  id: "tartines",
  title: "Tartines",
  items: [
    {
      name: "Avocat",
      description:
        "Graines de chia et piment d'Espelette, servis avec un mesclun de salade verte ou chips de pomme de terre maison.",
      price: 6500,
    },
    {
      name: "Saumon Fumé",
      description:
        "Fromage crémeux, câpres, dés de citron et aneth, servi avec un mesclun de salade verte ou chips de pomme de terre maison.",
      price: 11000,
    },
    {
      name: "Dinde Fumée",
      description:
        "Dinde fumée, avocat, roquette, dijonnaise, accompagnée d'une salade verte ou chips de pomme de terre maison.",
      price: 9500,
    },
    {
      name: "Thon",
      description:
        "Câpres, mayo light et dés de citron, servie avec un mesclun de salade ou chips de pomme de terre maison.",
      price: 7500,
    },
  ],
},

{
  id: "bao",
  title: "Pains Bao",
  items: [
    {
      name: "Poulet Asiatique",
      description:
        "Poulet nappé de sauce arachides, cacahuètes concassées et croustillant.",
      price: 8500,
    },
    {
      name: "Crevettes Bao Noir",
      description:
        "Crevettes frites trempées dans une sauce aigre-douce, ananas séché et coriandre.",
      price: 8500,
    },
  ],
},

{
  id: "snacks",
  title: "À Goûter",
  items: [
    {
      name: "Edamame",
      price: 4000,
    },
    {
      name: "Salade Verte",
      price: 3000,
    },
    {
      name: "Chips de Pomme de Terre Maison",
      price: 3000,
    },
  ],
},

{
  id: "desserts",
  title: "Desserts",
  items: [
    {
      name: "Gâteau aux Fruits de la Passion",
      price: 5000,
    },
    {
      name: "Café et Gâteau au Chocolat",
      price: 5000,
    },
  ],
},
{
  id: "cafes-chauds",
  title: "Cafés Chauds",
  eyebrow: "Boissons",
  items: [
    { name: "Ristretto", price: 2500 },
    { name: "Espresso", price: 2500 },
    { name: "Doppio", price: 3500 },
    { name: "Basha Kahve", price: 2000 },
    { name: "Qahwia", price: 5000 },
    { name: "Americano", price: 3000 },
    { name: "Black Coffee", price: 3000 },
    { name: "French Press", price: 5500 },
    { name: "V60", price: 4000 },
    { name: "Macchiato", price: 3500 },
    { name: "Piccolo", price: 3000 },
    { name: "Cortado", price: 3000 },
    { name: "Flat White", price: 3500 },
    { name: "Cappuccino", price: 4000 },
    { name: "Latte", price: 4000 },
    { name: "Moka", price: 5000 },
    { name: "Moka Blanc", price: 5000 },
  ],
},

{
  id: "cafes-glaces",
  title: "Cafés Glacés",
  eyebrow: "Boissons",
  items: [
    { name: "Americano Glacé", price: 3000 },
    { name: "Latte Glacé", price: 4000 },
    { name: "Moka", price: 5000 },
    { name: "Moka Blanc", price: 5000 },
  ],
},

{
  id: "frappuccino",
  title: "Frappuccino",
  eyebrow: "Boissons",
  items: [
    { name: "Frappuccino au Café", price: 5000 },
    { name: "Frappuccino à l'Espresso", price: 5500 },
  ],
},

{
  id: "the-infusion",
  title: "Thé & Infusion",
  eyebrow: "Boissons",
  items: [
    { name: "Thé", price: 3000 },
    { name: "Infusion", price: 4000 },
  ],
},

{
  id: "nouvelles-boissons",
  title: "Nouvelles Boissons",
  eyebrow: "Boissons",
  items: [
    { name: "Frappuccino Crème au Matcha", price: 7000 },
    { name: "Matcha Latte", price: 6500 },
    { name: "Matcha Glacé", price: 5500 },
  ],
},

{
  id: "boissons-froides",
  title: "Boissons Froides",
  eyebrow: "Boissons",
  items: [
    { name: "Supplément 0.5L", price: 1500 },
    { name: "Supplément 1L", price: 2000 },
    { name: "Eau Gazeuse 0.33L", price: 3500 },
    { name: "Eau Gazeuse 1L", price: 5000 },
    { name: "Boisson Énergisante (Reaktor)", price: 2500 },
    { name: "Soda", price: 1500 },
    {
      name: "Cola, Citron-Citron Vert, Orange, Tonic, Cocktail",
      price: 1500,
    },
  ],
},

{
  id: "protein-shakes",
  title: "Shakes Protéinés",
  eyebrow: "Wellness Drinks",
  items: [
    { name: "Lait d'Amande à la Vanille", price: 10000 },
    { name: "Beurre d'Arachide au Chocolat", price: 9000 },
    { name: "Café", price: 8000 },
    { name: "Banane au Beurre d'Arachide", price: 9000 },
  ],
},

{
  id: "jus-frais",
  title: "Jus Frais Pressés",
  eyebrow: "Wellness Drinks",
  items: [
    { name: "Orange", price: 4000 },
    { name: "Mangue", price: 4000 },
    { name: "Ananas", price: 4000 },
    { name: "Carotte", price: 3500 },
    {
      name: "Fusion Tropicale",
      description: "Ananas, mangue & fruit de la passion.",
      price: 4000,
    },
  ],
},

{
  id: "complements",
  title: "Compléments",
  eyebrow: "Boissons",
  items: [
    {
      name: "Sirops",
      description:
        "Caramel, caramel sans sucre, vanille sans sucre, noisette, chocolat blanc, chocolat.",
      price: 1000,
    },
    {
      name: "Shot de Café",
      price: 1500,
    },
  ],
},
];
