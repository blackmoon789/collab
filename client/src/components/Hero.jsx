import { Link } from 'react-router-dom';

const Hero = () => {
  const heroStyle = {
    backgroundColor: 'var(--color-peach)',
    padding: '80px 20px',
    textAlign: 'center',
    borderRadius: 'var(--border-radius-lg)',
    margin: '20px',
    boxShadow: 'var(--shadow-md)',
  };

  const titleStyle = {
    fontSize: '3rem',
    color: 'var(--color-brown)',
    marginBottom: '20px',
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    color: 'var(--color-dark-gray)',
    marginBottom: '30px',
    maxWidth: '600px',
    margin: '0 auto 30px auto',
  };

  const buttonContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  };

  return (
    <div style={heroStyle}>
      <h1 style={titleStyle}>Discover & Share Your Favorite Recipes</h1>
      <p style={subtitleStyle}>
        Join our community of food lovers. Find new inspiration for your next meal or share your own culinary creations with the world.
      </p>
      <div style={buttonContainer}>
        <Link to="/recipes" className="btn btn-primary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
          Explore Recipes
        </Link>
        <Link to="/upload" className="btn btn-secondary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
          Share a Recipe
        </Link>
      </div>
    </div>
  );
};

export default Hero;
