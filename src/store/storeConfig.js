
import { createStore, combineReducers, applyMiddleware } from 'redux';
import compromissosReducer from './reducers/compromissosReducer';
import promise from 'redux-promise'

const reducers = combineReducers({
    dados: compromissosReducer
})

function storeConfig() {
    return applyMiddleware(promise)(createStore)(reducers)
}

export default storeConfig