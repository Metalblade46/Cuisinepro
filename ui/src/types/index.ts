export interface Dish {
  id: string;
  name: string;
  ingredients: string[];
  diet: "vegetarian" | "non vegetarian";
  prep_time: number; // in minutes
  cook_time: number; // in minutes
  flavor_profile: "sweet" | "spicy" | "sour" | "bitter" | "savory";
  course: "appetizer" | "main course" | "dessert" | "snack" | "beverage";
  state: string;
  region: string;
  image_url?: string;
  match?: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  favorites: string[]; // dish ids
}

export interface SearchResult {
  type: "dish" | "ingredient" | "region";
  id: string;
  name: string;
  imageUrl?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
