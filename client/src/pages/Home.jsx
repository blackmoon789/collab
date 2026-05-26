import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import RecipeCard from '../components/RecipeCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { getRecipes } from '../services/recipeService';

const Home = () => {
  const [trendingRecipes, setTrendingRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        // This is a placeholder call. When backend is ready, this will fetch real data.
        const data = await getRecipes();
        setTrendingRecipes(data);
      } catch (err) {
        setError("Failed to fetch trending recipes. Backend might not be connected yet.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  const sectionStyle = {
    padding: '40px 20px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  };

  const categoriesStyle = {
    display: 'flex',
    gap: '15px',
    overflowX: 'auto',
    paddingBottom: '15px',
    marginTop: '20px',
  };

  return (
    <div className="container">
      <Hero />
      
      <section style={sectionStyle}>
        <div style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
          <SearchBar onSearch={(q) => console.log('Search:', q)} />
        </div>

        <h2>Explore Categories</h2>
        <div style={categoriesStyle}>
          <CategoryCard title="Breakfast" emoji="🍳" />
          <CategoryCard title="Lunch" emoji="🥗" />
          <CategoryCard title="Dinner" emoji="🍝" />
          <CategoryCard title="Desserts" emoji="🍰" />
          <CategoryCard title="Vegetarian" emoji="🥦" />
          <CategoryCard title="Quick Meals" emoji="⏱️" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Trending Recipes</h2>
        {loading ? (
          <Loader message="Loading trending recipes..." />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : trendingRecipes.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--color-dark-gray)' }}>No trending recipes found. Be the first to share one!</p>
        ) : (
          <div style={gridStyle}>
            {trendingRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </section>
      
      <section style={{...sectionStyle, backgroundColor: 'var(--color-peach)', borderRadius: 'var(--border-radius)', marginTop: '40px'}}>
        <h2 style={{ textAlign: 'center' }}>Featured Chefs</h2>
        <p style={{ textAlign: 'center', color: 'var(--color-brown)' }}>Join our community of amazing creators.</p>
        {/* Placeholder for featured users */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🧑‍🍳</div>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>👩‍🍳</div>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>👨‍🍳</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
