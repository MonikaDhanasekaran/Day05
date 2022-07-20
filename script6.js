//3.Do the below programs in arrow function:

//a.Print odd numbers in an array

var odd = (arr)=>{
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var odds = arr.filter(number => {
    return number % 2 !== 0;
});
console.log(odds);
}
odd();

//b.Convert all the strings to title caps in an array:

//Arrow Function:

var titlecaps = (str)=>{
    return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
}).join(' ');
}
console.log(titlecaps("guvi geek"));

//c.Sum of all numbers in an array:

//Arrow Function:

var sumofnumbers=(arr,sum)=>{
    var arr = [2,3,4,5,6];
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    console.log(sum);
}
sumofnumbers();

//d.Return all the prime numbers in an array:

//Arrow Function:

var prime=(num)=>{
   var num = [2, 3, 4, 5, 6, 7, 8, 9, 10]
   num = num.filter((number) => {
   for (var i = 2; i <= Math.sqrt(number); i++) {
       if (number % i === 0){
          return false;
       }
   }
   return true;
   });
   console.log(num);
}
prime();

//e.Return all the palindromes in an array:

//Arrow Function:

var palindrome=(str,len,mid)=>{
  var str=["oppo"];
  var len=str.length;
  var mid=Math.floor(len/2);
  for(var i=0;i<mid;i++){
    if(str[i]!==str[len-1-i]){
      console.log("Not Palindrome");
    }
  }
  console.log("Palindrome");
 }
palindrome();