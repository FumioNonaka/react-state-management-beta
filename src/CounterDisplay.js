import React, { useCallback, useContext } from 'react';
import { AppContext } from './AppContext';

const CounterDisplay = () => {
	const { state, dispatch } = useContext(AppContext);
	const reset = useCallback(() => dispatch({ type: 'reset' }), [dispatch]);
	const decrement = useCallback(() => dispatch({ type: 'decrement' }), [dispatch]);
	const increment = useCallback(() => dispatch({ type: 'increment' }), [dispatch]);
	return (
		<>
			Count: {state.count}
			<button onClick={reset}>Reset</button>
			<button onClick={decrement}>-</button>
			<button onClick={increment}>+</button>
		</>
	);
};

export default CounterDisplay;
