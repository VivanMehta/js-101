/* 
JS101-JS119 - Small problems / Easy 1 - 1 

Create a function that takes an integer value that is negative/positive/zero
If numebr is odd return True

START
FUNCTION isOdd(number)
    IF number MOD 2 EQUALS 1
        RETURN True
    ELSE
        RETURN False
    END IF
END FUNCTION 
*/


function isOdd(num) {
  if (num % 2 == 1) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(2));
