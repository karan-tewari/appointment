import {createStore,combineReducers} from 'redux';
import {} from './reducers';

const intialState={};

const rootReducers = combineReducers({

});

const store = createStore(
    rootReducers,
    intialState,
)

export default store;