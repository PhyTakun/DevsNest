function is_array(arr)
{
    var check = Array.isArray(arr);
    return check;
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
