/**
 * Created by liorr_000 on 17/1/2016.
 */
export default {
    get: function(k) {
        try {
            return JSON.parse(localStorage.getItem(k));
        }
        catch(e) {
            return null;
        }
    },
    set: function(k, v) {
        localStorage.setItem(k, JSON.stringify(v));
    }
};