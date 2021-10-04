//Task is to create a source file with all the words in small letters 
// then create a program to use file system library 
//read the data of source file 
//store it in a variable and then convert the small letters into capital letters 
//then transfer those capital letters into destination file by writing using the file system library
let minimist=require('minimist');
let fs=require('fs');
let args=minimist(process.argv);
let sourceText = fs.readFileSync(args.source,"utf-8");
console.log(sourceText);
let destinationText=sourceText.toUpperCase();
console.log(destinationText);
fs.writeFileSync(args.destination,destinationText,"utf-8");



/* Output
node 1.FirstExpWithFileManipulation.js --source source.txt --destination destination.txt
ye 
ek 
source 
file 
hai 
ok???? got it???
YE 
EK 
SOURCE 
FILE 
HAI 
OK???? GOT IT???
*/