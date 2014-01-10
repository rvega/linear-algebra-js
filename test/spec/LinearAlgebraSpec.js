if(typeof(require)==='function'){
   var LinearAlgebra = require('LinearAlgebra');
}

describe('LinearAlgebra',function(){
   describe('rotate2D',function(){
      it('should calculate rotations correctly', function(){
         var initialPoint = [[1,0]];
         var angle = Math.PI/2;
         var newPosition = LinearAlgebra.rotate2D(initialPoint, angle);
         expect(newPosition).toEqual([[0,1]]);

         newPosition = LinearAlgebra.rotate2D(initialPoint, Math.PI);
         expect(newPosition).toEqual([[-1,0]]);

         newPosition = LinearAlgebra.rotate2D(initialPoint, Math.PI*3/2);
         expect(newPosition).toEqual([[0,-1]]);

         newPosition = LinearAlgebra.rotate2D(initialPoint, Math.PI*2);
         expect(newPosition).toEqual([[1,0]]);
         
         newPosition = LinearAlgebra.rotate2D(initialPoint, Math.PI/4);
         expect(newPosition).toEqual([[0.70711,0.70711]]);
      });
   });

   // describe('transpose',function(){
   //    it('should transpose matrices correctly', function(){
   //       var A = [[1,2,3,4], [5,6,7,8]];
   //       var B = LinearAlgebra.transposeMatrix(A);
   //       expect(B).toEqual([[1,5],[2,6],[3,7][4,8]]);
   //    });
   // });

   describe('translate2D',function(){
      it('should calculate translations correctly', function(){
         var initialPoint = [[0,0]];
         var translation = [[1,-1]];

         var newPosition = LinearAlgebra.translate2D(initialPoint, translation);
         expect(newPosition).toEqual([[1,-1]]);

      });
   });

   describe('matrixMult',function(){
      it('should return the correct value for multiplying two matrices', function(){
         var A = [[1,2]];
         var B = [[3],[4]];

         var C = LinearAlgebra.matrixMult(A,B);
         expect(C).toEqual( [[11]] );

         C = LinearAlgebra.matrixMult(B,A);
         expect(C).toEqual( [[3,6], [4,8]] );
      });

      it('should throw an error if matrices are the wrong size', function(){
         var A = [[1,2]];
         var B = [[3,4]];

         var mult = function(){
            LinearAlgebra.matrixMult(A,B);
         }

         expect(mult).toThrow();
      });
   });
});
