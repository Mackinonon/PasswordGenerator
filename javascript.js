const col = ["Red","Blue","Green","Yellow","Orange","Purple","Pink","Brown"]
const ani = ["Dog","Cat","Giraffe","Elephant","Frog","Lion","Parrot","Bear","Horse"]
const sing = ["Rihanna","Brunomars","Edsheeran","Taylorswift","Arianagrande","Justinbieber","Theweekend","Dualipa"]
const car = ["BMW","Volkswagon","Hyundai","Mitsubishi","Audi","Toyota","Nissan"]
// creates arrays for each select value

document.getElementById("but").onclick = function(){
  let num = document.getElementById("numIn").value;
  let len = parseFloat(num);
  if (20<num){
    alert("no more than 20 characters")
  }
  else if (8>num){
    alert("no less than 8 characters")
  }
  else{
    document.getElementById("passout").innerHTML = pass(len);
  }
 }



function pass(num){
  let passwrd = ""
  let slct = document.getElementById("select").value;
  if(slct == "colours"){
    passwrd+=(col[Math.ceil(Math.random()*7)])
  }
  else if(slct == "animals"){
    passwrd+=(ani[Math.ceil(Math.random()*8)])
  }
  else if(slct == "singer"){
    passwrd+=(sing[Math.ceil(Math.random()*7)])
  }
  else if(slct == "cars"){
    passwrd+=(car[Math.ceil(Math.random()*6)])
  }
  // finds which catagory is selected then randomly choses a value from the array
  for(i=0;i<num;i++){
    let rand =
    Math.ceil(Math.random()*31)+32
    if(rand>57){
      rand+=7
      passwrd+=String.fromCharCode(rand);
    }
    else if(rand>90){
      rand+=6
      passwrd+=String.fromCharCode(rand); 
    }
    else{
      passwrd+=String.fromCharCode(rand); 
    }
  }
  return passwrd;
}

document.getElementById("but2").onclick = function(){
  passout.innerHTML = "";
  numIn.value = "";
}