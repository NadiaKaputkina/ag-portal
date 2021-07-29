import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer';

export default async function create() {
    const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = applyMiddleware(thunkMiddleware)

    const enhances = compose(middleware, composeEnhancers())

    const store = createStore(
        rootReducer,
        enhances
    );

    return {store}
}