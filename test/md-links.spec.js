const mdLinks = require('../index.js');
const path = require('path');
const way = '/home/laboratoria/Área de Trabalho/SAP004-md-links/teste/README2.md';
const way1 = '/home/laboratoria/Área de Trabalho/SAP004-md-links/teste';



const arrayObj =[
  {
    text: 'Jest',
    href: 'https://jestjs.io/es-ES/',
    file:  '/home/laboratoria/Área de Trabalho/SAP004-md-links/teste/README2.md',
  },
  {
    text: 'Documentação do NPM',
    href: 'https://docs.npmjs.com/',
    file:  '/home/laboratoria/Área de Trabalho/SAP004-md-links/teste/README2.md',
  },
];

const arrayValida = [
  {
    text: 'Jest',
    href: 'https://jestjs.io/es-ES/',
    file: '/home/laboratoria/Área de Trabalho/SAP004-md-links/teste/README2.md',
    validate: {
      code: 200,
      message: 'OK'
    }
  },

  {
    text: 'Documentação do NPM',
    href: 'https://docs.npmjs.com/',
    file: '/home/laboratoria/Área de Trabalho/SAP004-md-links/teste/README2.md',
    validate: {
      code: 200,
      message: 'OK'
    }
  }
]





describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  })
});

test('should return an array the objects for File', () => {
    mdLinks(way).then((result) => {
    expect(result).toEqual(arrayObj)
   })
  })

test('should return an array the objects validate for File', () => {
 mdLinks(way,'-- validate').then((resolve)=>{
  expect(result).toEqual({arrayValida})
 })
  })


test('should return an array the objects for Dir', () => {
  const result1 = "Esse diretório contem os seguintes arquivos, escolha o que deseja ler e passe o caminho completo. Suas opções são:README2.md"
  mdLinks(way1).then((result) => {
   expect(result).toEqual(result1)
  })
 })

 test('should return an array the objects validate for Dir', () => {
  const result1 = "Esse diretório contem os seguintes arquivos, escolha o que deseja ler e passe o caminho completo. Suas opções são:README2.md"
  mdLinks(way1,'-- validate').then((result) => {
   expect(result).toEqual(result1)
  })
 })