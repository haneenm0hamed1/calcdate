let btn = document.getElementById("btn")
  btn.onclick= function CalcDate(){
    
    let currentyear= new Date()
    let birthday = document.getElementById("date").value
    let age = currentyear.getFullYear() -parseInt(birthday)
   return document.getElementById("age").innerHTML=` عمرك هو${age}  سنه`
}