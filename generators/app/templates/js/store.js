'use strict';

import { createStore, combineReducers } from 'redux';

// Import all reducers

// Page reducers
import HomeReducer from './pages/Home/Home-reducers';

// All reducers
var reducers = combineReducers({
    HomeReducer
});

// Create the site's store
var store = createStore(
    reducers, {},
    // Redux Dev Tool chrome extension.. download @ https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
    window.devToolsExtension ? window.devToolsExtension() : undefined
);

export default store;
