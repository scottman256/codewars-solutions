function validISBN10(isbn) {
    if (isbn.match(/^\d{9}([0-9]|X)$/) == null)
      return false;
  else
    return ISBNcheck(isbn);
}

function ISBNcheck(isbn)
{
      var sum = 0;
      for (let i=0; i < 10; i++)
          sum += parseIntX(isbn[i]) * (i+1);
      if (sum% 11 == 0) return true; else return false;
}

function parseIntX(int)
{
  let num = parseInt(int);
  if (!isNaN(num)) return num; else return 10;
}