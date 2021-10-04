let minimist=require('minimist');//using the library minimist

let args=minimist(process.argv); //parsing all the input to the minimist library
let fs=require('fs');//using the already installed library fs, node already have the fs library

let stext=fs.readFileSync(args.source,"utf-8");//using fs.readfilesync function to read the data from the source file i.e source.txt
console.log(stext);//printing the source text

let words=stext.split(" ");//breaking the string text into array
console.log(words);//now printing the array text

for(let i=0;i<words.length;i++)//now converting the all the lower case words array into upper case words array
{
    words[i] = words[i].toUpperCase();
}
console.log(words);//printing the upper case word array

let dtext=words.join(" ");//now joing the word array and converting the array into string by joing it with the spaces in between
console.log(dtext);//printing the text to be printed in the destination file

fs.writeFileSync(args.destination, dtext, "utf-8");//now writing the desired text at desired destination