var Stack = function() {  
  /* this = Object.create(Stack.prototype); */ // binds 'new' object at the start of the constructor
  this.storage = {};
  this._size = 0;

  /* return this; */ // automatically return object when constructor is executed with 'new'
};

// You'll likely want to store some values on Stack.prototype to complete this.
// Stack.prototype = {}; // this is provided to us for free, no need to type this

Stack.prototype.push = function(value){
  this.storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function(){
  this._size && this._size--;
  var result = this.storage[this._size];
  delete this.storage[this._size];
  return result;
};

Stack.prototype.size = function(){
  return this._size;
};

// when called this will be invoked with the 'new' keyword
// var events = new Stack();
// var todoList = new Stack();