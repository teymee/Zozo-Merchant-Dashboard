import { combineReducers } from 'redux';

import auth from './auth/reducer';
import app from './app/reducer';
import category from './category/reducer';
import product from './product/reducer';

export default combineReducers({
    auth,
    app,
    category,
    product,
});
