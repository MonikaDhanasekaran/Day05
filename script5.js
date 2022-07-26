//1.Do the below programs in anonymous function & IIFE
//a. Anonymous Function
var odd = function(b){
    if (b%2!=0){
    return "Odd";
    }
    else{
        return "Even"
    }
    }
    console.log(odd(17));

//IIFE Function
(function odd(a){
    var a = 11;
    if(a%2!=0){
    console.log("Odd");
    }
    else{
    console.log("Even");
    }
    })
    ();

//b.Convert all the strings to tile caps in a string array:
//Anonymous Function
var titlecaps = function(str) {
    return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
    }
console.log(titlecaps("guvi geek"));
//IIFE Function
(function titleCase(st) {
    var st = "guvi geek"
    var t = st.split(" ").reduce( (s, c) => s +""+(c.charAt(0).toUpperCase() + c.slice(1) +" "), '');
    console.log(t);
    })
    ()

//c.Sum of all numbers in an array:
//Anonymous Function
var sumofnumbers=function(arr,sum){
var arr = [2,3,4,5,6];
var sum = 0;
    for(var i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
console.log(sum);
}
sumofnumbers();
//IIFE Function
(function sumofnumbers(arr,sum){
    var arr = [2,3,4,5,6];
    var sum = 0;
    for(var i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
console.log(sum);
})
();

//d.Return all prime numbers in an array
//Anonymous Function
var prime=function(num){
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
//IIFE Function
(function prime(num){
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
})
();
//e.Return all palindromes in an array
//Anonymous Function
var palindrome=function(str,len,mid) {
    var str="oppo";
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
//IIFE Function
(function palindrome(str,len,mid) {
    var str="oppo";
    var len=str.length;
    var mid=Math.floor(len/2);
    for(var i=0;i<mid;i++){
    if(str[i]!==str[len-1-i]){
    console.log("Not Palindrome");
    }
}
console.log("Palindrome");
})
();

//f.Return median of two sorted arrays of same size:
//Anonymous Function:
var sort=function(ar1, ar2, n){
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
      if (i == n)
      {
            m1 = m2;
            m2 = ar2[0];
            break;
       }
      else if (j == n)
      {
            m1 = m2;
            m2 = ar1[0];
            break;
      }
      if (ar1[i] <= ar2[j])
      {
          m1 = m2; 
          m2 = ar1[i];
          i++;
       }
      else
      {
          m1 = m2; 
          m2 = ar2[j];
          j++;
       }
    }
return (m1 + m2)/2;
}
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2){
    var c = sort(ar1, ar2, n1);
    console.log(c);
}
else{
    console.log("Arrays of unequal size");
 }
sort();
//IIFE Function:

//g.Remove duplicates from an array:
//Anonymous Function:
var duplicate=function(char,uniquechar){  
    var char = ['Apple','Banana','Apple','Orange','Banana','Strawberry'];
    var uniquechar = [...new Set(char)];
    console.log(uniquechar);
}
duplicate();
//IIFE Function:
(function duplicate(char,uniquechar){  
    var char = ['Apple','Banana','Apple','Orange','Banana','Strawberry'];
    var uniquechar = [...new Set(char)];
    console.log(uniquechar);
})
();

//h.Rotate an array by k times:
//Anonymous Function:
var rotatearray = function(nums, k) {
    var nums = [1,2,3,4,5];
    var k = 3; 
    for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
    }
console.log(nums);
}
rotatearray();
//IIFE Function:
(function rotatearray(nums, k) {
    var nums = [1,2,3,4,5];
    var k = 3; 
    for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
    }
console.log(nums);
})
();
