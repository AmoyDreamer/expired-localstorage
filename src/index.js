/**
 * @author Allen Liu
 * @desc A library of cache based on localStorage that supports expired storage.
 */
(function(){
    var LS = function(obj) {
        if (obj instanceof LS) return obj
        if (!(this instanceof LS)) return new LS(obj)
        this.LSwrapped = obj;
    }
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = LS;
        }
        exports.LS = LS;
    } else {
        this.LS = LS;
    }
    var store = window.localStorage;
    /**
     * @desc: Get value from localStorage
     * @param: {String} key -> key name.(required)
     */
    LS.get = function(key) {
        var obj = store.getItem(key) ? JSON.parse(store.getItem(key)) : void 0
        if (undefined === obj) return void 0
        //There are non-standard data structure or expired data
        if (typeof obj !== 'object' || undefined === obj.value || undefined === obj.expires || typeof obj.expires !== 'number' || this.isExpired(obj.expires)) {
            //Remove old data structure or expired data
            this.remove(key);
            return void 0
        }
        return obj.value
    }
    /**
     * @desc: Set value by localStorage
     * @param: {String} key -> key name.(required)
     * @param: {Any} value -> data value.(required)
     * @param: {Number} time -> expires time, unit is ms, such as passing 60000, that means 1 minute.(optional)
     */
    LS.set = function(key, value, time) {
        if (undefined === value) return
        var now = (new Date()).getTime();
        var expires = typeof time === 'number' && time > 0 ? now + time : -1;
        var obj = JSON.stringify({
            value: value,
            expires: expires
        });
        store.setItem(key, obj)
    }
    /**
     * @desc: Remove data from localStorage
     * @param: {String} key -> key name.(required)
     */
    LS.remove = function(key) {
        store.removeItem(key)
    }
    /**
     * @desc: Clear all cached data
     */
    LS.clear = function() {
        store.clear()
    }
    /**
     * @desc: Determine whether the current key is expired
     */
    LS.isExpired = function(expires) {
        //Expires time is never set
        if (expires === -1) return false
        return (new Date()).getTime() > expires
    }
}.call(this))
