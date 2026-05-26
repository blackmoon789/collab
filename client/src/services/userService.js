import api from './api';

// Placeholder route: GET /api/users/:id
export const getUserProfile = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
