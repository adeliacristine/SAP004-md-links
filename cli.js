#!/usr/bin/env node

const mdLinks = require("./index.js");
const file = process.argv[2];
//console.log(file)
const validate = process.argv.includes('--validate');
mdLinks(file,{validate}).then((result)=>{
	console.log(result);
}).catch((error)=> {
	console.log(error)
});