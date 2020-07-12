const fs = require('fs');

const getDir = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, "utf-8", (error, data) => {
      if (error) {
        reject(`erro de leitura de arquivo ${error}`)
        console.log(`Error ${error}`)
      } else if (data) {
        resolve(`Esse diretório contem os seguintes arquivos, escolha o que deseja ler e passe o caminho completo. Suas opções são:${data}`)
      }
    })
  })
}

module.exports = getDir;