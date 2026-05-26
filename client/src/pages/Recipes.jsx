import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { getRecipes } from '../services/recipeService';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const data = await getRecipes();
        setRecipes(data);
      } catch (err) {
        setError("Failed to load recipes. Backend might not be ready.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px',
    marginTop: '30px',
  };

  const headerStyle = {
    backgroundColor: 'var(--color-yellow)',
    padding: '40px 20px',
    borderRadius: 'var(--border-radius)',
    marginBottom: '30px',
    textAlign: 'center',
  };

  return (
    <div className="container">
      <div style={headerStyle}>
        <h1>All Recipes</h1>
        <p>Browse our entire collection of delicious community recipes.</p>
        <div style={{ marginTop: '20px' }}>
          <SearchBar onSearch={(q) => console.log('Searching for:', q)} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <p>Showing {recipes.length} recipes</p>
        <select style={{ padding: '8px', borderRadius: 'var(--border-radius)', border: '1px solid #ddd' }}>
          <option>Newest First</option>
          <option>Highest Rated</option>
          <option>Quickest Prep</option>
        </select>
      </div>

      {loading ? (
        <Loader message="Fetching delicious recipes..." />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : recipes.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px 0' }}>
          <h3>No recipes found</h3>
          <p>It looks like there aren't any recipes yet. Why not share one?</p>
        </div>
      ) : (
        <div style={gridStyle}>
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;
