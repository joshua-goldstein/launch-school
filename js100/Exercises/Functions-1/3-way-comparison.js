compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0

function compareByLength(str1, str2) {
  switch (true) {
    case str1.length < str2.length:
      return -1;
      break;
    case str1.length === str2.length:
      return 0;
      break;
    case str1.length > str2.length:
      return 1;
  }
}
