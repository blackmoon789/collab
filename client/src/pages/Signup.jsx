import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { signupUser } from '../services/authService';
import ErrorMessage from '../components/ErrorMessage';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Placeholder for backend signup integration
      const data = await signupUser({ username, email, password });
      if (data && data.token) {
        login(data.token);
        navigate('/profile');
      } else {
        // Mock success
        login("mock-jwt-token");
        navigate('/profile');
      }
    } catch (err) {
      setError("Signup failed. Backend might not be ready yet.");
      // Fallback for UI testing
      login("mock-jwt-token");
      navigate('/profile');
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--border-radius)',
    boxShadow: 'var(--shadow-md)',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: 'var(--border-radius)',
    outline: 'none',
  };

  return (
    <div className="container">
      <div style={containerStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Join RecipeHub</h2>
        
        {error && <ErrorMessage message={error} />}

        <form onSubmit={handleSubmit}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
              required
              placeholder="Choose a username"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
              placeholder="Create a password"
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '12px' }}
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--color-orange)', fontWeight: 'bold' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
