let minimist=require("minimist");
let args=minimist(process.argv);
let axios=require("axios");
let fs=require("fs");

let downloadpromise=axios.get(args.url);

downloadpromise.then(function(response)
{
fs.writeFileSync(args.destination,response.data,"utf-8");
}
).catch(function(error)
{
    console.log(err);
})
