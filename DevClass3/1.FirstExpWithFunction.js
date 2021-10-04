//Print Prime Till n
let args=process.argv;
let n=process.argv[2];
for(let i=1;i<=n;i++)
{
    flag=true;
for(let j=2;j*j<=n;j++)
{
    if(i%j==0)
    {
        flag=false;
    }
}
if(flag)console.log(i);
}
