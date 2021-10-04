let minimist=require("minimist");
let fs=require("fs");
let args=minimist(process.argv);

let array=[];
for(let i=0;i<args.num;i++)
{
    array.push(i);
}

let data=array.join("\n");                   //ye jo array bna isko string bnado with a distance of 1 line in each array element

fs.writeFileSync(args.destination,data);
fs.appendFileSync(args.destination,data);
fs.appendFileSync(args.destination,data);
fs.appendFileSync(args.destination,data);


//CLI-->    node 4.CreatingABigFile.js --destination=source.txt --num=100000