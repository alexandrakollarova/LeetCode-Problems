var flipAndInvertImage = function(A) { 
    let copyA = []
    let reversed = []
    let wrapper = []
    
    for (let i = 0; i < A.length; i++) {
        copyA = A[i] 
        for (let j = 0; j < copyA.length; j++) {
            if (copyA[j] === 1) {
                copyA[j] = 0
            } else {
                copyA[j] = 1
            }
        }       
          
        reversed = copyA.reverse()
        wrapper.push(reversed)
    }
    return wrapper
      
};