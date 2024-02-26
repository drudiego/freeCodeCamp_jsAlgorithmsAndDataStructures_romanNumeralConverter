function convertToRoman(num) {

    //First, create an object where the keys are the roman numerals and the values are the arabic numerals
    let table = {
      'M': 1000,
      'CM': 900,
      'D': 500,
      'CD': 400,
      'C': 100,
      'XC': 90,
      'L': 50,
      'XL': 40,
      'X': 10,
      'IX': 9,
      'V': 5,
      'IV': 4,
      'I': 1,
      '': 0
    }
  
    //Then, create and empty array to receive the roman numerals
    const roman = []
  
    //Then create a while loop which ends when the function parameter 'num' reaches 0. Inside the while loop, create a for loop which iterates every key in the object
    while (num > 0){
      for (let key in table){
  
        //If the value of the key is lower or equal the current 'num', it pushes the key (which is the roman numeral) to the 'roman' array, then subtract the value of that key from the 'num' and break the current for loop.
        if (table[key] <= num){
          roman.push(key)
          num -= table[key]
          break
        }
      }
    }
  
    //When 'num' finally reaches 0, all the letters to form the roman number will be in the 'roman' array. The function ends by returning the join method in the 'roman' array, giving the expected result
   return roman.join('');
  }
  
  console.log(convertToRoman(3999));