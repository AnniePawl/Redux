import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Counter from './Counter'
import CounterList from './CounterList'
import Total from './Total'

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Total />
        <CounterList />
      </div>
    </Provider>
  );
}

export default App;
