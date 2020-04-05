import React from "react";
import Header from "./components/Header";
import './App.css';
import { Provider } from 'react-redux';
import store from '../src/redux/reducer';
import Routes from "./routes"

function App() {
    return (
      <Provider store={store}>
        <Header />
        <Routes />
      </Provider>
    );
}

export default App;

