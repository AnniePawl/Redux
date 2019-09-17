import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux' 
import reducers from './reducers'
import Counter from './Counter'
import CounterList from './CounterList'

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterList />
      </div>
    </Provider>
  );
}

export default App;
