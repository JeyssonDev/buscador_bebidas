import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
} from '../schemas/recipes.schema';
import { Drink, SearchFilter } from '../types';

export const getCategories = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(url);
  const data = await response.json();
  const result = CategoriesAPIResponseSchema.safeParse(data);

  if (result.success) {
    return result.data;
  }
};

export const getRecipes = async (searchFilters: SearchFilter) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilters.category}&i=${searchFilters.ingredient}`;
  const response = await fetch(url);
  const data = await response.json();

  const result = DrinksAPIResponse.safeParse(data);

  if (result.success) {
    return result.data;
  }
};

export const getRecipeById = async (id: Drink['idDrink']) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  const data = await response.json();

  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);

  if (result.success) {
    return result.data;
  }
};
