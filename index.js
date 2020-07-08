const fs = require('fs');
//const mdLinks = require('md-links');
const mdLinks = (path)=>{
  arrayMdLinks =[];
  object =[];
return new Promise((resolve, reject)=>{
fs.readFile(path, 'utf8', (error,data)=>{
  if (error){
    reject(`erro de leitura de arquivo ${error}`)
    console.log(`Error ${error}`)
  }else{ 
    arrayMdLinks = data.match(/\[([^\]]*)\]\((http[s]?:[^\)]*)\)/gm); //(/\[(.*?)\]\(http[s]?:\/\/(.*)/gm);
            arrayMdLinks.forEach(item => {
              object.push({
                text: `${item.match(/\[([^\]]*)\]/gm)}` ,  //)(/\[(.*?)\]/g)}`
                href: `${item.match(/\((http[s]?:[^\)]*)\)/gm)}`, //(/http[s]?:\/\/(.*)/gm)}` ,
                file: path               
            })
            //console.log(`${item.match(/\[(.*?)\]/g)}`);
            //console.log(`${item.match(/http[s]?:\/\/(.*)/gm)}`);
            //console.log(path);
            //console.log(item);
  })
  //console.log(arrayMdLinks);
  resolve(object)
  console.log(object);
}
});
});
}
mdLinks('/home/laboratoria/Área de Trabalho/SAP004-md-links/README.md')

module.exports = mdLinks;


/*const aPromise = new Promise((resolve, reject) => {
const aNumber = 37
resolve(aNumber)
reject(aNumber)
})

aPromise
.then(value => value)
.then ((value)=>{
  console.log(value)
})
.catch((rejectValue)=>{
  console.log({rejectValue})
})*/

/*const mdLinks = require("md-links");
links=[];
fs.readFile(mdLinks, "utf8", function(error, text)  {
  .then(links => {
    => [{ href:, 
        texto:text, 
        file:mdLinks }]
        console.log(texto);
        console.log(mdLinks);

 })
 .catch(
   console.log(error)
   )

mdLinks('/home/laboratoria/Área de Trabalho/SAP004-md-links/files/teste.md')
;*/


//const fs = require('fs'),

//path = '/home/laboratoria/Área de Trabalho/SAP004-md-links/'


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
    throw err;  
});*/

      




