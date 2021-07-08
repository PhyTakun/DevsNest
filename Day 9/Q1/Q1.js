const dull= {
    Name: "Plan with no Plan",
    Plan:"No plan",
    GetPlan: function(){
        console.log("What's the plan again?")
    },
    Sum: function(a,b)
    {
        console.log(a+b);
    }
    
}

const hazy = Object.create({
    Name:"Rey Hardning",
    Occupation: "Throwing stuff",
    throwing: function(a){
        console.log("You can throw" + a);
    }
})

function caller(){
    console.log(this);
}

caller.call(dull.Sum(2,3));
caller.apply(hazy.throwing(" Balls"));
var a = caller.bind(dull.Sum(7,3));
console.log(a);

