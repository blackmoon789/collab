import api from './api';

// Placeholder route: GET /api/recipes
export const getRecipes = async () => {
  try {
    const response = await api.get('/recipes');
    if (!Array.isArray(response.data)) {
      throw new Error("Backend not connected");
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Placeholder route: GET /api/recipes/:id
export const getRecipeById = async (id) => {
  try {
    const response = await api.get(`/recipes/${id}`);
    if (typeof response.data === 'string') {
      throw new Error("Backend not connected");
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Placeholder route: POST /api/recipes
export const createRecipe = async (recipeData) => {
  try {
    const response = await api.post('/recipes', recipeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
