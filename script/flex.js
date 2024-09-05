let myObjet = {nam:"Abhulime",age:40, cars:{dept:"pr",grad:[
  {na:"ford", mo:["we","ho"],yu:"de"}
,{na:"benz", mo:["wa","ho"],yu:"te"}]}}
 let outa = myObjet.cars.grad 
 let txt = ""
 for(let i in outa){
  txt+= "<h1>" + outa[i].na + "</h1>"
  for(let k in outa[i].mo){
    txt+=outa[i].mo[k] + "<br   > "
  }
 }

function ya(){
  let p = document.forms["forma"]["fname","lname","fame"].value
  if(p == ""){
    alert("Please,fill the from")
    return false
  }else{
    let x = document.getElementById("che").disabled = true
    
  }
}


function myFunction(){
  var x = document.getElementById("forma1");
var tx = "";
var i;
for (i = 0; i < x.length; i++) {
  tx =  x.elements[i].value + "<br>";
}
document.getElementById("de").innerHTML = tx;
}
let ap = document.getElementsByName("fname")

for(let i = 0;i<ap.length;i++){
  if(ap[i].type == "submit"){
    ap[i].value="finish"
  }
}
function ok(){
  let cha = document.getElementById("ma");
  if(cha.classList.contains("fo")){
    cha.classList.toggle("naa")
  }else{
    cha.classList.add("hu")
  }

} 
function to(){
  var x = document.getElementById("mea")
  document.getElementById("demo").innerHTML=x.value
}