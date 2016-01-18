/**
 * Created by liorr_000 on 17/1/2016.
 */
import {combineReducers} from 'redux';
import lanes from './lanes';
import notes from './notes';

export default combineReducers({
    lanes,
    notes
});