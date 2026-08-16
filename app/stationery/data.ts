export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  pages: number;
  size: string;
  binding?: string;
  format?: string;
  description: string;
  customized?: boolean;
  Customized?: boolean;
  images: string[];
  categories: string[];
  featured: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  paper?: string
  images: string[];
  productSlugs: string[];
}

// ─────────────────────────────────────────────
// PRODUCTS
// To add a product: copy a block and update fields.
// categories: array of category slugs this product belongs to.
// images: first image = primary, rest = gallery.
// ─────────────────────────────────────────────

export const ALL_PRODUCTS: Product[] = [
  // ── A5 TO-DO LISTS / PLANNERS ──
  {
    id: "focus",
    slug: "focus-a5-weekly-planner",
    name: "Focus – A5 Weekly Planner",
    price: 69,
    pages: 50,
    size: "A5",
    format: "Tear & Use",
    description: "Minimal weekly planner with a clean, structured layout for organizing daily tasks and priorities.",
    images: ["/stationery/products/Focus – A5 Weekly Planner.png"],
    categories: ["a5-todo-planner"],
    featured: true,
  },
  {
    id: "juno",
    slug: "juno-a5-todo-list",
    name: "Juno – A5 To-Do List",
    price: 69,
    pages: 50,
    size: "A5",
    format: "Tear & Use",
    description: "Cute pastel to-do list with playful notes, hearts, stars and a soft aesthetic.",
    images: ["/stationery/products/Juno – A5 To-Do List.png"],
    categories: ["a5-todo-planner"],
    featured: true,
  },
  {
    id: "poppy",
    slug: "poppy-a5-todo-list",
    name: "Poppy – A5 To-Do List",
    price: 69,
    pages: 50,
    size: "A5",
    format: "Tear & Use",
    description: "Playful pastel to-do list with priority sections, cheerful florals and a fun, energetic aesthetic.",
    images: ["/stationery/products/Poppy – A5 To-Do List.png"],
    categories: ["a5-todo-planner"],
    featured: false,
  },
  // ── 10x21 TO-DO LISTS ──
  {
    id: "mochi",
    slug: "mochi-todo-list",
    name: "Mochi – 10 × 21 cm To-Do List",
    price: 59,
    pages: 50,
    size: "10 × 21 cm",
    format: "Tear & Use",
    description: "Cute minimalist to-do list featuring a sleepy character and soft pastel tones.",
    images: ["/stationery/products/Mochi – 10 × 21 cm To-Do List.png"],
    categories: ["todo-10x21"],
    featured: false,
  },
  {
    id: "willow",
    slug: "willow-todo-list",
    name: "Willow – 10 × 21 cm To-Do List",
    price: 59,
    pages: 50,
    size: "10 × 21 cm",
    format: "Tear & Use",
    description: "Soft pastel to-do list with elegant flowing patterns and a calm, minimal aesthetic.",
    images: ["/stationery/products/Mochi – 10 × 21 cm To-Do List.png"],
    categories: ["todo-10x21"],
    featured: false,
  },
  {
    id: "bubbles",
    slug: "bubbles-todo-list",
    name: "Bubbles – 10 × 21 cm To-Do List",
    price: 59,
    pages: 50,
    size: "10 × 21 cm",
    format: "Tear & Use",
    description: "Cute pastel to-do list with adorable sleepy characters and a soft, playful aesthetic.",
    images: ["/stationery/products/Bubbles – 10 × 21 cm To-Do List.png"],
    categories: ["todo-10x21"],
    featured: false,
  },
  {
    id: "orbit",
    slug: "orbit-todo-list",
    name: "Orbit – 10 × 21 cm Customized To-Do List",
    price: 59,
    pages: 50,
    size: "10 × 21 cm",
    format: "Tear & Use",
    customized: true,
    description: "Space-themed to-do list with astronauts and planets, customized as per customer request.",
    images: ["/stationery/products/Orbit – 10 × 21 cm Customized To-Do List.png"],
    categories: ["todo-10x21", "customized"],
    featured: false,
  },
  // ── A6 NOTEPADS ──
  {
    id: "valor",
    slug: "valor-a6-notepad",
    name: "Valor – A6 Notepad",
    price: 49,
    pages: 100,
    size: "A6",
    binding: "Wiro Binding",
    customized: true,
    description: "Bold superhero-themed notepad with a Captain America-inspired design, customized as per customer request.",
    images: ["/stationery/products/Valor – A6 Notepad.png"],
    categories: ["a6-notepads", "customized"],
    featured: false,
  },
  {
    id: "striker",
    slug: "striker-a6-notepad",
    name: "Striker – A6 Notepad",
    price: 49,
    pages: 100,
    size: "A6",
    binding: "Wiro Binding",
    customized: true,
    description: "Bold football-themed notepad featuring a dynamic Ronaldo design, customized as per customer request.",
    images: ["/stationery/products/Striker – A6 Notepad.png"],
    categories: ["a6-notepads", "customized"],
    featured: false,
  },
  {
    id: "pulse",
    slug: "pulse-a6-notepad",
    name: "Pulse – A6 Notepad",
    price: 49,
    pages: 100,
    size: "A6",
    binding: "Wiro Binding",
    customized: true,
    description: "Bold Ronaldo-themed notepad with a striking typographic design, customized as per customer request.",
    images: ["/stationery/products/Pulse – A6 Notepad.png"],
    categories: ["a6-notepads", "customized"],
    featured: false,
  },
  {
    id: "rosie",
    slug: "rosie-a6-notepad",
    name: "Rosie – A6 Notepad",
    price: 49,
    pages: 100,
    size: "A6",
    binding: "Wiro Binding",
    description: "Soft floral notepad with delicate bows, pastel tones and a sweet, elegant aesthetic.",
    images: [
      "/stationery/products/Rosie – A6 Notepad.png",
      "/stationery/products/Rosie – A6 Notepad2.png",
      "/stationery/products/Rosie – A6 Notepad3.png",
    ],
    categories: ["a6-notepads"],
    featured: true,
  },
  {
    id: "mabel",
    slug: "mabel-a6-notepad",
    name: "Mabel – A6 Notepad",
    price: 49,
    pages: 100,
    size: "A6",
    binding: "Wiro Binding",
    description: "Cute bunny-themed notepad with soft pastel tones, delicate bows and a charming vintage-inspired aesthetic.",
    images: [
      "/stationery/products/Mabel – A6 Notepad.png",
      "/stationery/products/Mabel – A6 Notepad2.png",
      "/stationery/products/Mabel – A6 Notepad3.png",
    ],
    categories: ["a6-notepads"],
    featured: false,
  },
  // ── A6 NOTEBOOKS ──
  {
    id: "eden",
    slug: "eden-a6-notebook",
    name: "Eden – A6 Notebook",
    price: 49,
    pages: 100,
    size: "A6",
    binding: "Wiro Binding",
    description: "Soft watercolor-inspired notebook with a calm botanical feel and elegant, nature-inspired aesthetic.",
    images: [
      "/stationery/products/Eden – A6 Notebook.png",
      "/stationery/products/Eden – A6 Notebook2.png",
      "/stationery/products/Eden – A6 Notebook3.png",
    ],
    categories: ["a6-notebooks"],
    featured: false,
  },
  // ── A6 TO-DO LIST ──
  {
    id: "haven",
    slug: "haven-a6-todo-list",
    name: "Haven – A6 To-Do List",
    price: 39,
    pages: 100,
    size: "A6",
    format: "Tear & Use",
    description: "Calm minimalist to-do list with soft sage tones and cozy desk-inspired details.",
    images: [
      "/stationery/products/Haven – A6 To-Do List.png",
      "/stationery/products/Haven – A6 To-Do List2.png",
    ],
    categories: ["a6-todo"],
    featured: false,
  },
  // ── A5 NOTEPADS ──
  {
    id: "gingham",
    slug: "gingham-a5-notepad",
    name: "Gingham – A5 Notepad",
    price: 79,
    pages: 100,
    size: "A5",
    binding: "Wiro Binding",
    description: "Classic blue gingham design with a clean, timeless and stylish stationery aesthetic.",
    images: [
      "/stationery/products/Gingham – A5 Notepad.png",
      "/stationery/products/Gingham – A5 Notepad2.png",
      "/stationery/products/Gingham – A5 Notepad3.png",
      "/stationery/products/Gingham – A5 Notepad4.png",
    ],
    categories: ["a5-notepads"],
    featured: true,
  },
  // ── A5 NOTEBOOKS ──
  {
    id: "meadow-bloom",
    slug: "meadow-bloom-a5-notebook",
    name: "Meadow Bloom – A5 Notebook",
    price: 79,
    pages: 100,
    size: "A5",
    binding: "Wiro Binding",
    description: "A soft pastel blue-and-pink gingham cover with playful flowers and a cute bow detail. Fresh, cheerful and stationery-inspired.",
    images: [
      "/stationery/products/Meadow Bloom A5 Notebook.png",
      "/stationery/products/Meadow Bloom A5 Notebook2.png",
      "/stationery/products/Meadow Bloom A5 Notebook3.png",
      "/stationery/products/Meadow Bloom A5 Notebook4.png",
    ],
    categories: ["a5-notebooks"],
    featured: false,
  },
  {
    id: "sage-grove",
    slug: "sage-grove-a5-notebook",
    name: "Sage Grove – A5 Notebook",
    price: 79,
    pages: 100,
    size: "A5",
    binding: "Wiro Binding",
    description: "A soft mint-green notebook with leafy details and an organic, minimal design. Calm, fresh and clean, with a botanical personality.",
    images: [
      "/stationery/products/Sage Grove A5 Notebook.png",
      "/stationery/products/Sage Grove A5 Notebook2.png",
      "/stationery/products/Sage Grove A5 Notebook3.png",
      "/stationery/products/Sage Grove A5 Notebook4.png",
    ],
    categories: ["a5-notebooks"],
    featured: false,
  },
  {
    id: "blush-plaid",
    slug: "blush-plaid-a5-notebook",
    name: "Blush Plaid – A5 Notebook",
    price: 79,
    pages: 100,
    size: "A5",
    binding: "Wiro Binding",
    description: "A soft pink plaid design with delicate floral details and a cute retro-stationery feel.",
    images: [
      "/stationery/products/Blush Plaid A5 Notebook.png",
      "/stationery/products/Blush Plaid A5 Notebook2.png",
      "/stationery/products/Blush Plaid A5 Notebook3.png",
      "/stationery/products/Blush Plaid A5 Notebook4.png",
      "/stationery/products/Blush Plaid A5 Notebook5.png",
    ],
    categories: ["a5-notebooks"],
    featured: false,
  },
  {
    id: "jetset",
    slug: "jetset-a5-notebook",
    name: "Jetset – A5 Notebook",
    price: 79,
    pages: 100,
    size: "A5",
    binding: "Wiro Binding",
    Customized: true,
    description: "A travel-inspired design featuring airplanes, clouds and a boarding-pass detail. Jetset has a clean, playful travel-journal aesthetic.",
    images: [
      "/stationery/products/Jetset A5 Notebook.png",
      "/stationery/products/Jetset A5 Notebook2.png",
      "/stationery/products/Jetset A5 Notebook3.png",
      "/stationery/products/Jetset A5 Notebook4.png",
    ],
    categories: ["a5-notebooks", "customized"],
    featured: false,
  },
];

// ─────────────────────────────────────────────
// CATEGORIES
// productSlugs: list of product slugs in this category.
// A product can belong to multiple categories.
// ─────────────────────────────────────────────

export const STATIONERY_CATEGORIES: Category[] = [
  {
    slug: "a5-notebooks",
    name: "A5 Notebooks",
    description: "Premium A5 notebooks with wiro binding. Perfect for journaling, notes, and ideas.",
    images: [
      "/stationery/categories/A5 Notebooks.png",
      "/stationery/categories/A5 Notebooks2.png",
      "/stationery/categories/A5 Notebooks3.png",
    ],
    productSlugs: ["meadow-bloom-a5-notebook", "sage-grove-a5-notebook", "blush-plaid-a5-notebook", "jetset-a5-notebook"],
  },
  {
    slug: "a5-notepads",
    name: "A5 Notepads",
    description: "Clean A5 notepads with wiro binding for everyday use.",
    images: ["/stationery/categories/Gingham – A5 Notepad.png"],
    productSlugs: ["gingham-a5-notepad"],
  },
  {
    slug: "a5-todo-planner",
    name: "A5 To-Do List / Planner",
    description: "Structured A5 planners and to-do lists. Tear & Use format.",
    images: [
      "/stationery/categories/A5 To Do List.png",
      "/stationery/categories/A5 To Do List2.png",
    ],
    productSlugs: ["focus-a5-weekly-planner", "juno-a5-todo-list", "poppy-a5-todo-list"],
  },
  {
    slug: "a6-notebooks",
    name: "A6 Notebooks",
    description: "Compact A6 notebooks with wiro binding for on-the-go notes.",
    images: ["/stationery/categories/Eden – A6 Notebook.png"],
    productSlugs: ["eden-a6-notebook"],
  },
  {
    slug: "a6-notepads",
    name: "A6 Notepads",
    description: "Pocket-sized A6 notepads with wiro binding.",
    images: ["/stationery/categories/A6 Notepads.png"],
    productSlugs: ["valor-a6-notepad", "striker-a6-notepad", "pulse-a6-notepad", "rosie-a6-notepad", "mabel-a6-notepad"],
  },
  {
    slug: "a6-todo",
    name: "A6 To-Do List",
    description: "Compact A6 to-do lists. Tear & Use format.",
    images: ["/stationery/categories/Haven – A6 To-Do List.png"],
    productSlugs: ["haven-a6-todo-list"],
  },
  {
    slug: "todo-10x21",
    name: "To-Do Lists 10 × 21 cm",
    description: "Unique 10 × 21 cm tear & use to-do lists with playful designs.",
    images: ["/stationery/categories/To Do lists 10 x 21 cm.png"],
    productSlugs: ["mochi-todo-list", "willow-todo-list", "bubbles-todo-list", "orbit-todo-list"],
  },
  {
    slug: "customized",
    name: "Customized",
    description: "Products customized as per customer request. Order yours today.",
    images: [
      "/stationery/categories/A6 Notepads Customized.png",
      "/stationery/categories/Jetset A5 Notebook.png",
    ],
    productSlugs: ["valor-a6-notepad", "striker-a6-notepad", "pulse-a6-notepad", "orbit-todo-list", "jetset-a5-notebook"],
  },
];

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
export const getFeaturedProducts = (): Product[] =>
  ALL_PRODUCTS.filter((p) => p.featured);

export const getProductBySlug = (slug: string): Product | undefined =>
  ALL_PRODUCTS.find((p) => p.slug === slug);

export const getCategoryBySlug = (slug: string): Category | undefined =>
  STATIONERY_CATEGORIES.find((c) => c.slug === slug);

export const getProductsByCategory = (slug: string): Product[] => {
  const cat = getCategoryBySlug(slug);
  if (!cat) return [];
  return cat.productSlugs
    .map((s) => ALL_PRODUCTS.find((p) => p.slug === s))
    .filter((p): p is Product => p !== undefined);
};

export const getRelatedProducts = (product: Product, limit = 4): Product[] =>
  ALL_PRODUCTS.filter(
    (p) =>
      p.slug !== product.slug &&
      p.categories.some((c) => product.categories.includes(c))
  ).slice(0, limit);