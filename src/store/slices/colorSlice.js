//Handled the color context, initial state, reducer and provider

import React, { createContext, useContext, useReducer } from "react";


export const initialState = {
    isLight: true,
  };


export const colorRdeucer = (state = initialState, action) => {
  if (action.type === "TOGGLE") {
    return {
      ...state,
      isLight: !state.isLight,
    };
  } else {
    return state;
  }
};


const ColorContext = createContext();

const Index = ({ children }) => {
  const [state, dispatch] = useReducer(colorRdeucer, initialState);

  return (
    <ColorContext.Provider value={{ isLight: state.isLight, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};

export default Index;

export const UseColorContext = () => useContext(ColorContext);

export const GetColor = () => {
  const { isLight } = UseColorContext();

  const primaryColor = isLight ? "#fff" : "#464646";
  const textColor = isLight ? "#000" : "#fff";

  return {
    primaryColor,
    textColor,
  };
};