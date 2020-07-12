const fs = require('fs');
const http = require('http');
const https = require ('https');
const path = require('path')

const resolveValidateOp = (elem, res) =>{
	console.log('oi')
	let values = {
		code: res.statusCode,
		message: res.statusMessage,
	  };
		 return elem.validate=values;
	}
const validateOp = (elem) =>{
	return new Promise((resolve, reject )=>{
	  if(elem.href.indexOf('https:')===0){
		https.get(elem.href,(res)  => {
			resolve(resolveValidateOp(elem, res))
	/*	   let values = {
			 code: res.statusCode,
			 message: res.statusMessage,
		   };
			 elem.validate=values;
			 resolve(elem)
		 }).on("error",(e) => {
		 })*/
	  })
	}else if (elem.href.indexOf('http:')===0){
		http.get(elem.href,(res)  =>{
			resolve (resolveValidateOp(elem,res))
		 /* let values = {
			code: res.statusCode,
			message: res.statusMessage,
		  };
			elem.validate=values;
			resolve(elem)
		 }).on("error",(e) => {
		   console.log(e)
		 })*/
		})
	  } else {
		  reject(error)
	  }
	  
	})
  }