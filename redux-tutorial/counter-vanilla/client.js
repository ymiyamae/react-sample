import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import todoApp from './reducers';
import App from './components/App';

let   store = createStore(todoApp)
const app   = getElementById('app')

render(
	<Provider store={store}>
		<App />
	</Provider>
,app)