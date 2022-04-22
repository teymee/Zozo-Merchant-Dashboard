import { combineReducers } from 'redux';

import auth from './auth/reducer';
import app from './app/reducer';
import category from './category/reducer';
import product from './product/reducer';
import bid from './bid/reducer';

export default combineReducers({
    auth,
    app,
    category,
    product,
    bid,
});
