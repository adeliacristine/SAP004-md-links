# Md-Links

* [1.O que é o Md-links?](#1-O-que-é-o-Md-links?)
* [2. Como usar.](#2-Como-usar)
* [3. Instalando a biblioteca.](#3-Instalando-a-biblioteca)
* [4. Ultilizando a biblioteca.](#4-Ultilizando-a-biblioteca)
* [5. Autores.](#5-Autores)
***

## O que é o Md-links?
Md-Links é um biblioteca desenvolvida com o intuitto de fazer a leitura de arquivos md e apresentar todos os links disponoveis nesse texto e identificar quais links são vãlidos ou não.

## Como usar
Para usar a biblioteca basta passar o caminho do arquivo ou diretorio atraves de uma CLI (linha de comando) no terminal de seu coputador. 
Uma vez que o caminho correto for passado, todos os links que forem encontrados serão apresentados.

## Instalando sua biblioteca
Para realizar a isntalação basta digital em seu terminal o seguinte comando:

```sh
npm install https://github.com/adeliacristine/SAP004-md-links
```
## Ultilizando a biblioteca

Aguarde o final da instalação.

É necessario saber qual arquivo ou diretorio se deseja ler.
Em seu terminal digite md-links e o caminho do arquivo que se deseja ler.
Exemplo:

```sh
md-links <pasta ou arquivo desejado>
```
Ao passar o caminho correto esse comando já te retornará todos os links encontrados em seu arquivo md.

Para verificar a validação de cada link de seu arquivo é necessario rodar o seguinte comando em seu terminal:

```sh
md-links <pasta ou arquivo desejado> --validate
```
Todos os links válidos apresentaram a uma mensagem de 'OK'.

## Autores
Projeto desenvolvido por [Adélia Cristine](https://github.com/adeliacristine) no Bootecamp da [Laboratória](https://github.com/laboratoria)


