import React, { createContext, useState } from 'react';

const ComponentContext = createContext();

const ComponentProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('Description');

  return (
    <ComponentContext.Provider value={{ activeComponent, setActiveComponent }}>
      {children}
    </ComponentContext.Provider>
  );
};

export { ComponentContext, ComponentProvider };