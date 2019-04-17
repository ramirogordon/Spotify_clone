import { createStore, compose } from 'redux';
import reducer from './reducers/getData';

const store = createStore(
    reducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;