import React from 'react';
import { CounterContainer } from './CounterContainer';
import CounterDisplay from './CounterDisplay';
import './App.css';

function App() {
	return (
		<CounterContainer.Provider>
			<div className="App">
				<CounterDisplay
				/>
			</div>
		</CounterContainer.Provider>
	);
}

export default App;
