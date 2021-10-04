let clargs=process.argv;
let n=parseInt(clargs[2]);

for(let i=1;i<=n;i++)
{
let isPrime=ISPRIME(i);
if(isPrime==true)
{
    console.log(i);
}
}
function ISPRIME(x)
{
    let isPrime=true;
    for(let i=2;i*i<=x;i++)
    {
        if(x%i==0)
        {
            return false;
            
        }
    }
    if(isPrime==true)
{
    return true;
}
}
