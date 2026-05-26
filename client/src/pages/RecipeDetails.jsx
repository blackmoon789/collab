import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaHeart, FaShareAlt, FaClock, FaUtensils, FaUser } from 'react-icons/fa';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { getRecipeById } from '../services/recipeService';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (err) {
        setError("Failed to load recipe details. Backend might not be ready.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <Loader message="Loading recipe details..." />;
  if (error) return <div className="container"><ErrorMessage message={error} /><Link to="/recipes" className="btn btn-secondary">Back to Recipes</Link></div>;
  if (!recipe) return <div className="container"><ErrorMessage message="Recipe not found." /><Link to="/recipes" className="btn btn-secondary">Back to Recipes</Link></div>;

  const headerImageStyle = {
    width: '100%',
    height: '400px',
    backgroundColor: 'var(--color-peach)',
    borderRadius: 'var(--border-radius)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    color: 'var(--color-brown)',
    marginBottom: '30px',
  };

  const metaBar = {
    display: 'flex',
    gap: '20px',
    padding: '15px 0',
    borderBottom: '1px solid #ddd',
    borderTop: '1px solid #ddd',
    marginBottom: '30px',
    color: 'var(--color-dark-gray)',
  };

  const layoutStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '40px',
  };

  // Responsive layout would be handled by CSS media queries ideally
  // but keeping it simple here.

  return (
    <div className="container" style={{ maxWidth: '900px' }}>
      <div style={headerImageStyle}>
        {recipe.image ? 'Image goes here' : 'Delicious Recipe Photo'}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>{recipe.title || 'Amazing Recipe Title'}</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-dark-gray)' }}>
            {recipe.description || 'A detailed description of how wonderful this recipe is.'}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn" style={{ backgroundColor: 'var(--color-gray)' }}><FaHeart color="var(--color-orange)" /> Save</button>
          <button className="btn" style={{ backgroundColor: 'var(--color-gray)' }}><FaShareAlt /> Share</button>
        </div>
      </div>

      <div style={metaBar}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaUser /> By {recipe.author?.username || 'Chef'}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaClock /> {recipe.cookTime || '45'} mins</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaUtensils /> {recipe.servings || '4'} servings</span>
      </div>

      <div style={layoutStyle}>
        <div>
          <h3>Ingredients</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {recipe.ingredients ? recipe.ingredients.map((ing, i) => (
              <li key={i} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{ing.quantity} {ing.unit} {ing.name}</li>
            )) : (
              <>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Placeholder Ingredient 1</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Placeholder Ingredient 2</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Placeholder Ingredient 3</li>
              </>
            )}
          </ul>
        </div>

        <div>
          <h3>Instructions</h3>
          <ol style={{ paddingLeft: '20px' }}>
            {recipe.steps ? recipe.steps.map((step, i) => (
              <li key={i} style={{ marginBottom: '20px', paddingLeft: '10px' }}>
                <p>{step.instruction}</p>
              </li>
            )) : (
              <>
                <li style={{ marginBottom: '20px', paddingLeft: '10px' }}>First step to make this awesome dish.</li>
                <li style={{ marginBottom: '20px', paddingLeft: '10px' }}>Second step is where the magic happens.</li>
                <li style={{ marginBottom: '20px', paddingLeft: '10px' }}>Final step, enjoy your meal!</li>
              </>
            )}
          </ol>
        </div>
      </div>

      <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #ddd' }}>
        <h3>Comments</h3>
        <p>Comments section will be integrated when the backend is ready.</p>
        <div style={{ backgroundColor: 'var(--color-gray)', padding: '20px', borderRadius: 'var(--border-radius)', marginTop: '20px' }}>
          <p style={{ margin: 0, color: '#888' }}>No comments yet. Be the first to comment!</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
