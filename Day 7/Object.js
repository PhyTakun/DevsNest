
//Q1 reading
var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(Object.keys(student))


//Q2
var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(Object.keys(student))
delete student.rollno
console.log(Object.keys(student))

//Find the length Q3
var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(Object.keys(student).length);

// Getting the reading status check Q4

var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
                { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
                { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 



//Finding the volume Q5 
for (let x in library)
{
    console.log(library[x].title, " " ,library[x].readingStatus)
}


function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
  }
  
  Cylinder.prototype.Volume = function () {
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
  };
  
  var cyl = new Cylinder(34,23);
  console.log('volume =', cyl.Volume().toFixed(4));