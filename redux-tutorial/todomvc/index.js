import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'

const store = configureStore()
const app = document.getElementById('app')

render(
	<Provider store={store}>
		<App />
	</Provider>
,app)
