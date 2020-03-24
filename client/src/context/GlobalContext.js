import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

const initialState = {
  exercice: [{username: '', description: '', duration: '', date: ''}],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addExercice(exercice) {
    console.log(exercice, 'from addExercice');
    dispatch({
      type: 'ADD_EXERCICE',
      payload: exercice,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        addExercice,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
