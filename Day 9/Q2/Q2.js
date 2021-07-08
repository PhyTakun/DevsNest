document.getElementById('box').addEventListener('click',box_1)
document.getElementById('box2').addEventListener('dblclick',box_2)

function box_1(){
    document.getElementById('box').style.backgroundColor= "red";
}

function box_2(){
    document.getElementById("box2").innerHTML = "I was double clicked! uwu";
}

