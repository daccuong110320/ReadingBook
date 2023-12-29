import React, { createContext, useState } from 'react';

type AuthContextType = {
    isLoggedIn: boolean;
    setIsLoggedIn: (status: boolean) => void;
    updateLoggedInStatus: (status: boolean) => void;
};

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    updateLoggedInStatus: () => {},
});

export default AuthContext;