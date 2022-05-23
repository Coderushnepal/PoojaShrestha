import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import './public';
import reducers from './reducers/index';

// const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//   })(applyMiddleware(thunk))
// );
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
