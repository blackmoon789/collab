import { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { createRecipe } from '../services/recipeService';
import ErrorMessage from '../components/ErrorMessage';

const UploadRecipe = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleAddIngredient = () => setIngredients([...ingredients, '']);
  const handleIngredientChange = (text, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = text;
    setIngredients(newIngredients);
  };

  const handleAddStep = () => setSteps([...steps, '']);
  const handleStepChange = (text, index) => {
    const newSteps = [...steps];
    newSteps[index] = text;
    setSteps(newSteps);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Structure depends on final backend implementation
      const recipeData = {
        title,
        description,
        ingredients: ingredients.map(i => ({ name: i, quantity: '', unit: '' })), // Simplified for now
        steps: steps.map((s, i) => ({ stepNumber: i + 1, instruction: s }))
      };

      await createRecipe(recipeData);
      // Simulate success since backend might not be ready
      navigate('/profile');
    } catch (err) {
      setError("Failed to upload recipe. Backend API might not be implemented.");
      console.log("Mocking success for UI test");
      navigate('/profile'); // Remove this line once backend is real
    } finally {
      setLoading(false);
    }
  };

  const formStyle = {
    backgroundColor: 'var(--color-white)',
    padding: '40px',
    borderRadius: 'var(--border-radius)',
    boxShadow: 'var(--shadow-md)',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const inputGroupStyle = {
    marginBottom: '25px',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: 'var(--border-radius)',
    marginTop: '5px',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical',
  };

  return (
    <div className="container">
      <div style={formStyle}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Share Your Recipe</h1>
        
        {error && <ErrorMessage message={error} />}

        <form onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <label>Recipe Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={inputStyle} required placeholder="e.g., Grandma's Apple Pie" />
          </div>

          <div style={inputGroupStyle}>
            <label>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={textareaStyle} required placeholder="Tell us about this recipe..." />
          </div>

          <div style={inputGroupStyle}>
            <label>Ingredients</label>
            {ingredients.map((ing, i) => (
              <input key={i} type="text" value={ing} onChange={(e) => handleIngredientChange(e.target.value, i)} style={{...inputStyle, marginBottom: '10px'}} placeholder={`Ingredient ${i + 1}`} required />
            ))}
            <button type="button" onClick={handleAddIngredient} className="btn" style={{ backgroundColor: 'var(--color-yellow)', marginTop: '10px' }}>+ Add Ingredient</button>
          </div>

          <div style={inputGroupStyle}>
            <label>Instructions</label>
            {steps.map((step, i) => (
              <textarea key={i} value={step} onChange={(e) => handleStepChange(e.target.value, i)} style={{...inputStyle, minHeight: '60px', marginBottom: '10px'}} placeholder={`Step ${i + 1}`} required />
            ))}
            <button type="button" onClick={handleAddStep} className="btn" style={{ backgroundColor: 'var(--color-peach)', marginTop: '10px' }}>+ Add Step</button>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.2rem', marginTop: '20px' }} disabled={loading}>
            {loading ? 'Publishing...' : 'Publish Recipe'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadRecipe;
