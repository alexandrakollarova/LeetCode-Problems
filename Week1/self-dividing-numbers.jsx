var selfDividingNumbers = function(left, right) {    
    let strings = []
    let zeroLess = []
    let results = []
    
    for (let i = left; i <= right; i++) {
        strings.push(i.toString())      
    }   
    
    for (let j = 0; j < strings.length; j++) {
        if (!(strings[j].includes('0'))) {
            zeroLess.push(strings[j])
        }        
    }
    
    for (let i = 0; i < zeroLess.length; i++) {  
        let isSelfDividing = true        
        for (let j = 0; j < zeroLess[i].length; j++) {
            convertedString = parseInt(zeroLess[i])            
            convertedString2 = parseInt(zeroLess[i][j])            
            if (convertedString % convertedString2 !== 0) {                 
                isSelfDividing = false                
            }
        }
        if (isSelfDividing) {
            results.push(convertedString)
        }        
    }       
   return results 
};