const container = document.querySelector('.container')
var total_seats = 36;
var booked_seats = 0;

const booked_seats_var = document.getElementById("booked")
const remaining_seats_var = document.getElementById("remain")

function update()
{
    booked_seats_var.innerText = booked_seats;
    remaining_seats_var.innerText = total_seats - booked_seats;
}

for(let x =0;x<36;x++)
{
    const seat = document.createElement("div");
    seat.classList.add('seat');
    seat.addEventListener('click',(event) =>{

        const element = event.target;
        if(element.classList.contains("occupied")){
            element.classList.remove('occupied');
            booked_seats--;
        }
       
        else{
            element.classList.add('occupied');
            booked_seats++;
        }

        update()
    });
    container.appendChild(seat);
}