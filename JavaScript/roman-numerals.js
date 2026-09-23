class RomanNumerals {
    static toRoman(int){
        var solution = '';
        var roman;
        var lookup = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50,
                      XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
      
        for(roman in lookup)
        {
            while(int >= lookup[roman])
            {
               solution += roman;
               int -= lookup[roman]
            }
        }
        return solution;
    }

    static fromRoman(romanNumeral){
      var solution = 0;
      var character;
      var lookup = {CM: 900, M: 1000, CD: 400, D: 500, XC: 90, C: 100, XL: 40,
                    L: 50, IX: 9, X: 10, IV: 4, V: 5, I: 1};  
      
      for (character in lookup)
        {
          while (romanNumeral.includes(character))
              {
              solution += lookup[character];
              romanNumeral = romanNumeral.replace(character,"")
              }
        }
      return solution;
    }
}