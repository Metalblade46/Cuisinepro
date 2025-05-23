"use server";
import { Dish } from "../types";

const API_URL = process.env.API_URL || "http://localhost:3001";

export const getAllDishes = async (): Promise<Dish[]> => {
  try {
    const response = await fetch(`${API_URL}/dishes`, {
      cache: "no-store",
    });
    const dishes = await response.json();
    return dishes;
  } catch (error) {
    console.error("Error fetching dishes:", error);
    return [];
  }
};

export const getDishById = async (id: number): Promise<Dish | null> => {
  try {
    const response = await fetch(`${API_URL}/dishes/${id}`, {
      cache: "no-store",
    });
    const dish = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch dish");
    }
    return dish;
  } catch (error) {
    console.error("Error fetching dish:", error);
    return null;
  }
};

export const getDishIngredients = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_URL}/dishes/ingredients`, {
      cache: "no-store",
    });
    const ingredients = await response.json();
    return ingredients;
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    return [];
  }
};

export const getDishStates = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_URL}/dishes/states`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch states");
    }
    const states = await response.json();
    return states;
  } catch (error) {
    console.error("Error fetching states:", error);
    return [];
  }
};

export const getDishRegions = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_URL}/dishes/regions`, {
      cache: "no-store",
    });
    const regions = await response.json();
    return regions;
  } catch (error) {
    console.error("Error fetching regions:", error);
    return [];
  }
};

export const getDishesByIngredients = async (
  ingredients: string[]
): Promise<Dish[]> => {
  try {
    const response = await fetch(
      `${API_URL}/dishes/search?ingredients=${ingredients.join(",")}`
    );
    const dishes = await response.json();
    return dishes;
  } catch (error) {
    console.error("Error fetching dishes by ingredients:", error);
    return [];
  }
};
