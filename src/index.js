module.exports = function toReadable (number) {
    
      let numberArray =  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      let tensArray =  ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
         
      if (number < 20) {
        return numberArray[number]
      }
      if (number >= 20 & number < 100) {
        var tens = Math.floor(number / 10)
        if (number == (tens * 10)) {
          return tensArray[tens]
        } else {
          return tensArray[tens] + ' ' + numberArray[number % (tens * 10)]
        }
      }
      if (number >= 100 & number < 1000) {
       
        var hundreds = Math.floor(number / 100)
        var tens = Math.floor((number-hundreds*100)/10)   
        var numeric = number -hundreds*100-tens*10
     
        if (number == hundreds * 100) {
          return numberArray[hundreds] + ' ' + 'hundred'
        } else {
          if ((number - hundreds * 100) < 20) {
    
            return numberArray[hundreds] + ' ' + 'hundred'+' '+ numberArray[number - hundreds * 100]
          } else {
            if (number%10==0){
              return numberArray[hundreds] + ' ' + 'hundred'+' ' +tensArray[tens]
            } else{
            return numberArray[hundreds] + ' ' + 'hundred'+' ' +tensArray[tens] +' '+ numberArray[numeric]
          }
        }
        }
      }
  
}
