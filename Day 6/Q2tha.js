function array_Clone (ob) { 
    return ob.slice();
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
