

function fn1()
{
    alert('hello world')
    // var x=document.getElementById('txt1').value;
    // alert(x);
}

document.onload=fn2();
function fn2()
{
    alert('body is loaded')
    document.getElementById('btn').addEventListener('click',fn1());       
}