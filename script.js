window.onload=ready;        //ready is not called. ref of ready is stored in onload (which is a function pointer)
function ready()
{
    document.getElementById('btn').addEventListener('click',fn2);
    document.getElementById('file1').addEventListener('change', fn1);
    document.getElementById('dt1').addEventListener('change',fn1);
}
function fn1(e)
{
    console.log(e);
}

function fn2()
{
    var x=document.getElementById('dt1').value;
    alert(x);
    var dt=new Date(x);          //create an object of date. To the constructor of Date, i supply a value
    alert(dt)
    console.log(dt)
}