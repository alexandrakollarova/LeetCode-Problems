/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const copyA = []
    const copyB = []
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            copyA.push(A[i])            
        } else {
            copyB.push(A[i]) 
        }
    }   
    return copyA.concat(copyB)
};