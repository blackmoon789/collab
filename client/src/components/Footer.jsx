import { FaUtensils, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'var(--color-brown)',
    color: 'var(--color-cream)',
    padding: '40px 20px',
    marginTop: '60px',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--color-orange)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          <FaUtensils /> RecipeHub
        </div>
        <p>Your collaborative space to discover and share amazing recipes.</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', color: 'var(--color-peach)' }}>
          Made with <FaHeart color="var(--color-orange)" /> by food lovers
        </p>
      </div>
    </footer>
  );
};

export default Footer;
