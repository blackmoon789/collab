import { useState, useEffect, useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { getUserProfile } from '../services/userService';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import RecipeCard from '../components/RecipeCard';

const Profile = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('uploaded'); // 'uploaded' or 'saved'

  useEffect(() => {
    // If not authenticated, the component will redirect (handled below)
    if (!isAuthenticated) return;

    const fetchProfile = async () => {
      try {
        setLoading(true);
        // Assuming user ID 1 for placeholder purposes
        const data = await getUserProfile(1);
        setProfile(data);
      } catch (err) {
        setError("Could not load profile. Backend might not be connected.");
        // Set mock data so the UI can be tested
        setProfile({
            username: "ChefAwesome",
            bio: "I love cooking and sharing recipes!",
            uploadedRecipes: [],
            savedRecipes: []
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (loading) return <Loader message="Loading your profile..." />;

  const headerStyle = {
    backgroundColor: 'var(--color-white)',
    padding: '40px',
    borderRadius: 'var(--border-radius)',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginBottom: '40px',
  };

  const avatarStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-peach)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
  };

  const tabContainer = {
    display: 'flex',
    gap: '20px',
    borderBottom: '2px solid #eee',
    marginBottom: '20px',
  };

  const tabStyle = (isActive) => ({
    padding: '10px 20px',
    cursor: 'pointer',
    borderBottom: isActive ? '3px solid var(--color-orange)' : '3px solid transparent',
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'var(--color-orange)' : 'var(--color-dark-gray)',
    transition: 'var(--transition)',
  });

  return (
    <div className="container">
      {error && <ErrorMessage message={error} />}
      
      <div style={headerStyle}>
        <div style={avatarStyle}>🧑‍🍳</div>
        <div>
          <h1 style={{ margin: 0 }}>{profile?.username || 'Your Username'}</h1>
          <p style={{ color: 'var(--color-dark-gray)', marginTop: '10px' }}>
            {profile?.bio || 'Add a bio to tell people about your cooking style.'}
          </p>
          <button className="btn" style={{ marginTop: '15px', backgroundColor: 'var(--color-gray)' }}>Edit Profile</button>
        </div>
      </div>

      <div style={tabContainer}>
        <div style={tabStyle(activeTab === 'uploaded')} onClick={() => setActiveTab('uploaded')}>
          Uploaded Recipes
        </div>
        <div style={tabStyle(activeTab === 'saved')} onClick={() => setActiveTab('saved')}>
          Saved Recipes
        </div>
      </div>

      <div style={{ padding: '20px 0' }}>
        {activeTab === 'uploaded' && (
          <div>
            {profile?.uploadedRecipes?.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
                {profile.uploadedRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px', backgroundColor: 'var(--color-white)', borderRadius: 'var(--border-radius)' }}>
                <h3>You haven't uploaded any recipes yet.</h3>
                <Link to="/upload" className="btn btn-primary" style={{ marginTop: '15px' }}>Share Your First Recipe</Link>
              </div>
            )}
          </div>
        )}

        {activeTab === 'saved' && (
          <div>
             {profile?.savedRecipes?.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
                {profile.savedRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px', backgroundColor: 'var(--color-white)', borderRadius: 'var(--border-radius)' }}>
                <h3>No saved recipes yet.</h3>
                <Link to="/recipes" className="btn btn-secondary" style={{ marginTop: '15px' }}>Explore Recipes</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
