import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/Main';
import store from './components/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <div className="App">
              <Main />
            </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
