import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';



document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.store = store;
    window.logout = logout();
    ReactDOM.render(<Root store={store} />, root);
});