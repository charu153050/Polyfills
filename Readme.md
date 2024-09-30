# Map Polyfill
## temp.push(cb(this[i], i, this));
For each element, the callback function cb is called with three arguments:
this[i]: The current element.
i: The index of the current element.
this: The array itself.
The result of the callback function is then pushed into the temp array.