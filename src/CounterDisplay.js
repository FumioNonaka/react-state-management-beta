import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const CounterDisplay = () => {
	const { state, dispatch } = useContext(AppContext);
	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
			<button onClick={() => dispatch({ type: 'increment' })}>+</button>
		</>
	);
};

export default CounterDisplay;
