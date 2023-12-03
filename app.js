// //////////////////////  JAVASCRIPT TASK NO 2 /////////////////////////////////////
var userstring = prompt("Enter any word"); 

var revstring = userstring .split("").reverse().join("");

    document.write(revstring);

if(!userstring){
    alert("Please fill this Field");
       
}
else if(userstring===revstring){
   alert("your word is palondrome");
}
else{
   alert("your word is not palindrome");
}