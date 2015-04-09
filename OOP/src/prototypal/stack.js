var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance._size = 0;

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this._size] = value;
  this._size++;
};

stackMethods.pop = function(){
  this._size && this._size--;
  var result = this.storage[this._size];
  delete this.storage[this._size];
  return result;
};

stackMethods.size = function(){
  return this._size;
};
