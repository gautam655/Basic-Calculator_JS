var input=document.getElementById("input");
var butt=document.getElementById("butt");
var clear=document.getElementById("clear");
var equal=document.getElementById("equal");
var sum=document.getElementById("sum");
var sub=document.getElementById("sub");
var mul=document.getElementById("mul");
var div=document.getElementById("div");
var deci=document.getElementById("deci");

var equ="";
input.innerText="0";
butt.addEventListener("click",function(event){
  if(event.target.matches("button") && event.target.id!="equal")
  {
    if(event.target.value==".")
      {
        deci.disabled=false;
      }
    if(event.target.value=="+" || event.target.value=="-" || event.target.value=="x" || event.target.value=="÷")
    {
      sum.disabled=true;
      sub.disabled=true;
      mul.disabled=true;
      div.disabled=true;
      
    }
    else
    {
      sum.disabled=false;
      sub.disabled=false;
      mul.disabled=false;
      div.disabled=false;
      
    }
    equ+=event.target.value;
    input.innerHTML=equ;
  }
});

clear.addEventListener('click',function(){
  equ="";
  input.innerHTML="";
  deci.disabled=false;
});

equal.addEventListener('click',function(){
  var check=equ;
  check=check.replace("x","*");
  check=check.replace("÷","/");
  console.log(check);
  input.innerHTML=eval(check);
  equ=eval(check);
});
