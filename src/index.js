import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './components/App';
import reducers from './store/reducers';
import { watchContactsSaga } from './store/sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk, sagaMiddleware)));

sagaMiddleware.run(watchContactsSaga);

const uiThemeConfig = {
  palette: {
    type: 'light',
    primary: {
      main: '#E5703A',
      dark: '#FF945E',
      contrastText: '#fff'
    }
  },
};

const theme = createMuiTheme(uiThemeConfig);

ReactDOM.render(
  <div>
    <CssBaseline />
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  </div>
  ,
  document.querySelector('#root')
)