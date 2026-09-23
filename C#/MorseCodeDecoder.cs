class MorseCodeDecoder
{
        public static string Decode(string morseCode)
        {
            string solution = "";
            string[] morseCodeArray = morseCode.Trim().Replace("   "," * ").Split(" ");
            foreach(string morseLetter in morseCodeArray)
            {
                if ("*" == morseLetter)
                    solution += " ";
                else
                    solution += MorseCode.Get(morseLetter);
            }
            return solution;
        }
}