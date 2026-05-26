import api from './api';

// Placeholder route: POST /api/login
export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Placeholder route: POST /api/signup
export const signupUser = async (userData) => {
  try {
    const response = await api.post('/signup', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
