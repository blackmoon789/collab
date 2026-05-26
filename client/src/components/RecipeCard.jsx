import { Link } from 'react-router-dom';
import { FaStar, FaClock } from 'react-icons/fa';

const RecipeCard = ({ recipe }) => {
  const cardStyle = {
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--border-radius)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-md)',
    transition: 'var(--transition)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const imgPlaceholder = {
    height: '200px',
    backgroundColor: 'var(--color-yellow)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-brown)',
    fontSize: '1.2rem',
  };

  const contentStyle = {
    padding: '15px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  };

  const titleStyle = {
    fontSize: '1.2rem',
    margin: '0 0 10px 0',
    color: 'var(--color-brown)',
  };

  const metaStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#666',
    fontSize: '0.9rem',
    marginTop: 'auto',
  };

  return (
    <Link to={`/recipes/${recipe?.id || 'placeholder'}`} style={{ textDecoration: 'none' }}>
      <div style={cardStyle} className="recipe-card-hover">
        <div style={imgPlaceholder}>
          {recipe?.image ? 'Image Here' : 'Delicious Food'}
        </div>
        <div style={contentStyle}>
          <h3 style={titleStyle}>{recipe?.title || 'Placeholder Recipe Title'}</h3>
          <p style={{ fontSize: '0.9rem', marginBottom: '15px' }}>
            {recipe?.description || 'A brief description of this amazing recipe goes here...'}
          </p>
          <div style={metaStyle}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <FaStar color="var(--color-orange)" /> {recipe?.rating || '4.5'}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <FaClock /> {recipe?.time || '30 mins'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
