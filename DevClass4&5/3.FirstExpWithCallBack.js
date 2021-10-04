//task 1 =reading a file
//task 2 =keep all the primes till n and store it in a array 
//task2 will be started with task 1 
//then measure the time taken by task 2 including its start and the end time
//now measure the time tasken by task 1 including its start and the end time
//then measure the total time taken by task 1 ans task 2

//CLI-->   node 4.CreatingABigFile.js --destination source.txt --num 100000
let minimist=require('minimist');
let fs= require('fs');
let args=minimist(process.argv);
console.log(args.number);
console.log(typeof(args.number));
let source=args.source;


//Task 1 going to start i.e starting with reading the source file

let time1_1=Date.now();                                                     //no.of millisecond elapsed since 1 jan 1970 
console.log("Task 1 started at "+ time1_1%100000);                          //hume bas time ki last 5 digit chahiye 

fs.readFile(source,function(err,data)                                                   //reading the file 
{
    let time1_2=Date.now();                                                     //time taken to read the file

    console.log(data);                                                    //Printing the source text
    console.log("The time task by task 1 is"+((time1_2)-(time1_1)));                  //Printing the time taken by task 1
    
});                            


//Task 2 going to start i.e starting with find the prime numbers till n

let num =parseInt(args.number);                                //taking input,till what number we want to print primes

let time2_1 = Date.now();                                      //starting time for task 2
console.log("Task 2 started at "+(time2_1%100000));
let array=[];                                                  //creating the array in which all the primes will be pushed
for(let i=1;i<=num;i++)
{
    let ans =IsPrime(i);
    if(ans==true)
    {
        array.push(i);                                         //if i is prime then push it in the array 
    }
}

function IsPrime(num)                                          // created the function prime
{ let flag=true;
    for(let i=2;i*i<=num;i++)
    {
        if(num%i==0)
        {
            flag=false;
            break;
        }
    }
    return flag;
}

let time2_2=Date.now();                                            //so task 2 ended at this time
console.log("Task 2 ended at "+time2_2%100000);
console.log(array);                                                //printing the array consisting all the prime numbers till n
console.log("Time taken by Task 2 is "+((time2_2)-(time2_1)));                               //printing the total time taken by the task 2
//console.log("Toatl time taken by task 1 and task 2 is "+time1_2-time1_1);            // printing the total time

