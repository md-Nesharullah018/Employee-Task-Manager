

import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]); 

  // Load data once
  useEffect(() => {
    // Seed localStorage ONLY if empty/
    setLocalStorage();

    const { employees } = getLocalStorage();
    setUserData(employees || []);
  }, []);

  // Sync changes back to localStorage
  useEffect(() => {
    if (userData.length) {
      localStorage.setItem("employees", JSON.stringify(userData));
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
