import React, { useContext, useState } from 'react';

const GetRecipeContext = React.createContext(null);
const SetRecipeContext = React.createContext(null);

export const useReciptContext = () => {
  return useContext(GetRecipeContext);
};

export const useSetRecipeContext = () => {
  return useContext(SetRecipeContext);
};

export const RecipeProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState([]);

  return (
    <GetRecipeContext.Provider value={recipeData}>
      <SetRecipeContext.Provider value={setRecipeData}>
        {children}
      </SetRecipeContext.Provider>
    </GetRecipeContext.Provider>
  );
};
