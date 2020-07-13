const fs = require('fs');
const getFile = require("./src/getFile.js");
const getDir = require("./src/getDir.js");

const mdLinks = (file, options) => {
  return new Promise((resolve, reject) => {
    fs.stat(file, (error, stats) => {
      if(error){
        reject('Não foi encontrado nenhum arquivo com o nome fornecido');
      }else if (stats.isDirectory()) {
        resolve(getDir(file, options));
      } else if (stats.isFile()) {
        resolve(getFile(file, options));
      }
    });
  });
}
module.exports = mdLinks;