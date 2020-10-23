import React, { createContext, useReducer } from 'react';
import reducer from './reducder';

const initialState = { count: 0 };
export const AppContext = createContext(initialState);
export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};
