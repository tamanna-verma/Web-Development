let minimist=require("minimist");
let fs=require("fs");
let jsdom=require("jsdom");
let args=minimist(process.argv);
fs.readFile(args.source,"utf-8",function(err,html)
{
let dom=new jsdom.JSDOM(html);
let document=dom.window.document;

let description=document.querySelectorAll("div.match-info > div.description");
for(let i=0;i<description.length;i++)
{
console.log(description[i].textContent);
}
}
)
