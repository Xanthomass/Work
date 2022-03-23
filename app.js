var saving = 0
alert("Your Turn!")

do {
   
     var ran = Math.floor(Math.random() * 11)
     saving = ran + saving
     if(saving > 20){
      var pin = true
       alert("Wait a minute...")
       break
    }
     var battle = prompt("Do you want to add a number? " + "You have " +   saving)
     
   } while (battle != "No" )

if (saving > 20) {
   alert("You went over 20! you lost!")
} else {
   var daving = 0
   do {
      var can = Math.floor(Math.random() * 11)
      daving = can + daving
      alert(daving)
      if(daving > 20){
      var sin = true
         alert("You Won!")
      }
   } while (daving <= 16){
      
 }


   alert("The Computer decided to stop at " +  daving)
}
var terry 

if ((daving < saving) && daving < 20){
   var terry = true
   alert("Your value is closer to 20! You win!")
} else{
   var terry = false
   alert("The Computer's value is closer to 20! You Lose!")
}

