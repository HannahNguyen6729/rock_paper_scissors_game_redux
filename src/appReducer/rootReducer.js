import {combineReducers} from 'redux';
import appReducer from './AppReducer';

const rootReducer = combineReducers({
    gameReducer: appReducer,
});
export default rootReducer;