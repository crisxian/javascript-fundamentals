var bind = function(fn, target){
  return function(){
  	return fn.apply(target, arguments);
  }
};