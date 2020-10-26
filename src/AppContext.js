import React, { createContext, useReducer } from 'react';
import reducer from './reducder';

const initialState = { count: 0 };
export const AppContext = createContext(initialState);
export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialCount);
	const reset = () => dispatch({ type: 'reset' });
	const decrement = () => dispatch((prevCount) => prevCount - 1);
	const increment = () => dispatch((prevCount) => prevCount + 1);
	return (
		<AppContext.Provider value={{ count: state.count, reset, decrement, increment }}>
			{children}
		</AppContext.Provider>
	);
};
