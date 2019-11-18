Function.prototype.bind = function(context) {
  var fn = this; // this - функция, из которой мы вызываем bind
  var arg1 = Array.prototype.slice.call(arguments, 1); // аргументы, которые прокидываются в bind

  return function() {
    return fn.apply(context, arg1.concat(Array.prototype.slice.call(arguments))); // возвращаем привязанную функцию со всеми передаваемыми аргументами
  }
}
