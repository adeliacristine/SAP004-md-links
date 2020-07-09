const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require ('https');


const mdLinks = (path, options )=>{
 let arrayMdLinks = [];
  object =[];
return new Promise ((resolve, reject)=>{
fs.readFile(path, 'utf8', (error,data)=>{
 
  if (data) {
  arrayMdLinks = data.match(/\[([^\]]*)\]\((http[s]?:[^\)]*)\)/gm),
  arrayMdLinks.forEach(item => {
    const text = item.match(/\[([^\]]*)\]/)[1];
    const href = item.match(/\((http[s]?:[^\)]*)\)/)[1];
    object.push({
      text,
      href,
      file:path 
  }) 
})


  if (options && options.validate){
    resolve((object.map(result => {
      return validateOp(result)
    })))

  }else{
  resolve(object)
}
}else{
    reject(`erro de leitura de arquivo ${error}`)
    console.log(`Error ${error}`)
}
})
})
}

const validateOp = (elem) =>{
  return new Promise((resolve, reject )=>{
    if(elem.href.indexOf('https:')===0){
      https.get(elem.href,(res)  => {
         let values = {
           code: res.statusCode,
           message: res.statusMessage,
         };
           elem.validate=values;
           resolve(elem)
       }).on("error",(e) => {
       })
    } else if (elem.href.indexOf('http:')===0){
      http.get(elem.href,(res)  =>{
        let values = {
          code: res.statusCode,
          message: res.statusMessage,
        };
          elem.validate=values;
          resolve(elem)
       }).on("error",(e) => {
         console.log(e)
       })
    }
    
  })
}
const options ={validate:true}
mdLinks('/home/laboratoria/Área de Trabalho/SAP004-md-links/README.md',options ).then((a)=>{

  if (options && options.validate){
    a.map(ag=>{
      ag.then(lili=>{
        console.log(lili)
      })
    })
  }else{
  console.log(a)
  }
})





//module.exports = mdLink;



/*let files=[]
fs.stat(path, (err, stats) => { 
  if( !err ){ 
       if(stats.isFile()){ 
           console.log('is file ? ' + stats.isFile());
           fs.readFile(path, "utf8", (error, text) =>  {
            if (error){
              console.log(`Error ${error}`)
            }else{ 
           const regex11 = /(https?:\/\/[^\)]*)/gm;
           const n = text.match(regex11);
           console.log(n)
       }
      }) 
    }
       else if(stats.isDirectory()){ 
        console.log('is directory? ' + stats.isDirectory()); 
        fs.readdir(path,"utf-8", (error,data)=> {
          if (error){
            console.log(`Error ${error}`)
          }else{
            data.forEach(file => { */
               // console.log(data)
               /* console.log(file)
               
                fs.readFile(`./files/${file}`, "utf8", (error, text) =>  {
                  if (error){
                    console.log(`Error ${error}`)
                  }else{
             const tudo = /\[(.*?)\]\(http[s]?:\/\/(.*)/gm;*/
                    //const regex1 = /(https?:\/\/[^\)]*)/gm;
                /*    const regexUrl2 = /http[s]?:\/\/(.*)/gm;
                   const nomeSite = /\[(.*?)\]/g;
                   const nome = text.match(nomeSite);*/
                    //const regex = /\[([^\[\]]+)\]\((https?:\/\/[^\)]*)\)/gm;
                   // const m = text.match(regexUrl2);
                      //const m = text.match(/http[s]?:/)
        /*  console.log("The file contained:", text);
      console.log(m); 
      console.log(nome); 
                
                  }*/
                     
                     
 /*               });
            });
          }
        });
    } 
} 
else
    throw err;  */
