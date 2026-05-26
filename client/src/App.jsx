import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetails from './pages/RecipeDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import UploadRecipe from './pages/UploadRecipe';

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <Navbar />
          <main className="page-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/:id" element={<RecipeDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/upload" element={<UploadRecipe />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
