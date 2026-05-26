import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FaUtensils, FaUserCircle, FaPlus } from 'react-icons/fa';

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'var(--color-white)',
    boxShadow: 'var(--shadow-sm)',
    zIndex: 1000,
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--color-orange)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const linksStyle = {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>
        <FaUtensils /> RecipeHub
      </Link>
      <div style={linksStyle}>
        <Link to="/recipes">Explore</Link>
        {isAuthenticated ? (
          <>
            <Link to="/upload" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 15px' }}>
              <FaPlus /> Share
            </Link>
            <Link to="/profile" style={{ fontSize: '1.5rem', color: 'var(--color-brown)' }}>
              <FaUserCircle />
            </Link>
            <button onClick={logout} className="btn btn-secondary" style={{ padding: '8px 15px' }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-secondary">Login</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
