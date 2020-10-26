import { useState } from 'react';
 import { createContainer } from 'unstated-next';

 const useCounter = (initialCount = 0) => {
	const [count, setCount] = useState(initialCount);
	const reset = () => setCount(initialCount);
	const decrement = () => setCount((prevCount) => prevCount - 1);
	const increment = () => setCount((prevCount) => prevCount + 1);
	return { count, reset, decrement, increment };
};
export const CounterContainer = createContainer(useCounter);
