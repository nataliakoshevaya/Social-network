import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sidebar-reducer';

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPages: dialogsReducer,
    sidebar: sideBarReducer
});


let store = createStore(reducer);


export default store;