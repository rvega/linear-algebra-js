(function(exports){
   // Broken and unused
   // exports.transposeMatrix = function(A){
   //    var rows = A.length;
   //    var cols = A[0].length;
   //    var B = exports.createMatrix(cols,rows);
   //    for(var i=0; i<cols; i++){
   //       for(var j=0; j<rows; j++){
   //          B[i][j] = A[j][i];
   //       }
   //    }
   //    return B;
   // }

   exports.createMatrix = function(rows, cols){
      var A = [];
      for(var i=0; i<rows; i++){
         var row = [];
         for(var j=0; j<cols; j++){
            row.push[0];
         }
         A.push(row);
      }
      return A;
   }

   exports.matrixMult = function(A, B){
      var rowsA = A.length;
      var colsA = A[0].length;

      var rowsB = B.length;
      var colsB = B[0].length;

      if(colsA != rowsB){
         throw new Error('matrixMult: Invalid matrix dimensions.');
      }

      var C = exports.createMatrix(rowsA,colsB);
      for(var i=0; i<rowsA; i++){
         for(var j=0; j<colsB; j++){
            C[i][j] = 0;
            for(var k=0; k<colsA; k++){
               C[i][j] += Math.round(A[i][k]*B[k][j]*100000)/100000;
            }
         } 
      }
      return C;
   }

   exports.translate2D = function(Point, Translation){
      Point[0][2] = 1;
      var transform = [[1,0,0],[0,1,1],[Translation[0][0], Translation[0][1], 1]];
      var A = exports.matrixMult(Point, transform);
      A[0].pop();
      return A;
   }

   exports.rotate2D = function(Point, angle){
      Point[0][2] = 1;
      var transform = [[Math.cos(angle),Math.sin(angle),0],[-Math.sin(angle),Math.cos(angle),0],[0, 0, 1]];
      var A = exports.matrixMult(Point, transform);
      A[0].pop();
      return A;
   }

   exports.test = function(){
      return 'hello world'
   };

})(typeof exports === 'undefined'? this['LinearAlgebra']={}: exports);
