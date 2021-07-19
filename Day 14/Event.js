para = document.createElement('p');
con = document.getElementById('cont');
function print(){
    let x = "This is clicked once";
    para.innerHTML = x;
    con.appendChild(para);
}

function print_2(){
    let x = "This is clicked twice";
    para.innerHTML = x;
    con.appendChild(para);
}