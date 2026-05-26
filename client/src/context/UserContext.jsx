import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Placeholder for user profile state management.
  // Will be populated by an API call after successful authentication.
  
  const updateProfile = (profileData) => {
    setUser({ ...user, ...profileData });
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};
