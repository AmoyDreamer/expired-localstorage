# expired-localStorage
A library of cache based on localStorage that supports expired storage.

## Installing
### Using unpkg CDN
```
<script src="https://unpkg.com/expired-localStorage@1.0.0/index.js"></script>
```
### Using npm
```bash
npm install expired-localStorage --save-dev
```
## Usage
### CommonJS usage
```
const LS = require('expired-localStorage')
```
### Code in Javascript
```
//get data
LS.get('test');
//set data with expires time
LS.set('test', 123, 60000);
//remove data
LS.remove('test');
//clear all data
LS.clear();
```

## Method Description
### Get value from localStorage
LS.get(key)
- {String} key -> key name.(required)

### Set value by localStorage
LS.set(key, value, time)
- {String} key -> key name.(required)
- {Any} value -> data value.(required)
- {Number} time -> expires time, unit is ms, such as passing 60000, that means 1 minute. No value, no expiration.(optional)

### Remove data from localStorage
LS.remove(key)
- {String} key -> key name.(required)

### Clear all cached data
LS.clear()
