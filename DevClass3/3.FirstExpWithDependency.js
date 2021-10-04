//Install the library minimist //before that remember to do npm init 
//node is just like a interpreter ,line by line code ko compile krta hai , node is like a runtime environment
//npm is node package manager
//its like a website where the libararies are registered, we dont need to go to browser,search,download
// we can install from the terminal itself 
//npm install minimist


let minimist=require("minimist");
let args=minimist(process.argv);
console.log(args);
//node "/Users/tamannaverma/Documents/JS/DevClass3/3.FirstExpWithDependency.js" -x 4 -y 7 
//node 3.FirstExpWithDependency.js --name "Sumeet Malik" --age 40 
// minimist x aur y ko args ki ek property bnadega like args.x and args.y
parseInt(args.age);//vese yha parseInt likhne ki jroorat nhi thi ,minimist automatically parse krke deta h 
let age=args.age;
let name=args.name;
if(args.age<=30)
{
    console.log("Welcome "+args.name+"-->You can now join the dance party ");
}
else
{
    console.log("Sorry "+args.name+"--> You cant attend the dance party");
}

/*tamannaverma@Tamannas-MacBook-Air DevCLass3 % node 3.FirstExpWithDependency.js --name "Sumeet Malik" --age 40{
    _: [                        
      '/usr/local/bin/node',
      '/Users/tamannaverma/Documents/JS/DevClass3/3.FirstExpWithDependency.js'
    ],                                      //node aur name of file ko kisi _(undersore) nam ki property ko bnake usme daldiya
    name: 'Sumeet Malik',
    age: 40
  }
  Sorry Sumeet Malik--> You cant attend the dance party

*/