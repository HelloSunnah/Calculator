function Deleteme(){
    document.getElementById("MyResult").value=""

  }
  function Calculator(NEwValue){
    document.getElementById("MyResult").value +=NEwValue;

  }
function Answer()
{
var a=document.getElementById("MyResult").value;
var b=eval(a);
document.getElementById("MyResult").value=b
}
