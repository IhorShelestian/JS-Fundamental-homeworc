var arr = [];

for (var i = 0; i <= 2; i++) {
   arr[i] = (function (i) {
      return function () {
         console.log(i);
      };
   })(i);
}

arr[2]();

