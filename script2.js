window.onload=()=>{
    document.getElementById('txt1').onkeyup=checkPasswordStrength;
    document.getElementById('btn1').onclick=()=>{alert('hi')};
    document.getElementById('btn2').addEventListener('click',()=>{
        alert('you clicked btn2')
    });            
};

// window.onload=function(){
//     alert('this is anonymous function')
// };

function checkPasswordStrength()
{
    var txt=document.getElementById('txt1').value;
    var strength='';
    if(txt.length<3)
        strength='<font color=red>weak</font>';
    else if(txt.length<5)
        strength='<font color=orange>moderate</font>';
    else if(txt.length<8)
        strength='<font color=lightgreen>fair</font>';
    else
        strength='<font color=green>strong</font>';
    document.getElementById('div1').innerHTML=strength;
}


function fn1()
{
    alert('working')
}