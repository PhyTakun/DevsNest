const btn = document.querySelector("button")

async function get_data(){
    const items = await fetch("https://api.quotable.io/random");
    const res = await items.json();
    return [res.content,res.author];

    
}
var que = document.getElementById('qu');

btn.addEventListener('click',async()=>{
   let data = await get_data();
   let inside = `<b> ${data[0]} </b> <i>${data[1]}</i>`;
   que.innerHTML = inside;
} )
