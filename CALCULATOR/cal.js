function userInput(val)
{
    document.getElementById("display").value=document.getElementById("display").value+val;
}
function clearDisplay ()
{
    document.getElementById("display").value="";
}
function calculate()
{
    var u=document.getElementById("display").value;
    var result=eval(u);
    document.getElementById("display").value=result;
}
function find()
{
    var v=document.getElementById("display").value;
    var result=Math.sqrt(v);
    document.getElementById("display").value=result;
}
