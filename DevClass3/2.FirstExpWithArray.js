// Create an array 
// Ask from user what size of array the user want 
// take the elements of array as input from user 
//then print the array on console
let args=process.argv;
let size=parseInt(args[2]);
let array=[];//In JavaScript , there is no need to provide the size of array at the time of initializing the array 
for(let i=0;i<size;i++)
{
    array[i]=parseInt(args[i+3]);
}
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}
console.log(array);