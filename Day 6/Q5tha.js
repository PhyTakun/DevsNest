function max_counter(arr)
{

    var max_freq = 1;
    var counter = 0;
    var item;

    for(let i=0; i<arr.length;i++)
    {
        for(let j=i;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
            {
                counter++;
            }
            if(max_freq < counter)
            {
                max_freq = counter;
                item = arr[i];
            }
        }
        max_freq = 0;
    }

    return item;

}

console.log(max_counter([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))