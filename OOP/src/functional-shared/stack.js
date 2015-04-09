var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values

  // I can't use a closure when borrowing method from a shared class
  // bind them to the 'instance' class and access them using 'this'
  // name collision at 'size', renaming variable to '_size'
  instance.storage = {};
  instance._size = 0;


  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;

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
