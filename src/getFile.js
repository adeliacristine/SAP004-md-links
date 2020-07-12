const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
//const stats = require("./stats.js");


const getFile = (file, options) => {
	let arrayMdLinks = [];
	object = [];
	return new Promise((resolve, reject) => {
		fs.readFile(file, 'utf8', (error, data) => {

			if (data) {
				const pathFile = path.resolve(file);
				arrayMdLinks = data.match(/\[([^\]]*)\]\((http[s]?:[^\)]*)\)/gm),
					arrayMdLinks.forEach(item => {
						const text = item.match(/\[([^\]]*)\]/)[1];
						const href = item.match(/\((http[s]?:[^\)]*)\)/)[1];
						object.push({
							text,
							href,
							file: pathFile
						})
					})

				if (options && options.validate) {
					return resolve(Promise.all(object.map(result => {
						return validateOp(result)
					}
					)))

				} else {
					resolve(object)
				}
				} else {
				reject(`erro de leitura de arquivo ${error}`)
			}
		})
	})
}

const validateOp = (elem) => {
	return new Promise((resolve, reject) => {
		if (elem.href.indexOf('https:') === 0) {
			https.get(elem.href, (res) => {
				let values = {
					code: res.statusCode,
					message: res.statusMessage,
				};
				elem.validate = values;
				resolve(elem)
			}).on("error", (error) => {
        reject (error)
			})
		} else if (elem.href.indexOf('http:') === 0) {
			http.get(elem.href, (res) => {
				let values = {
					code: res.statusCode,
					message: res.statusMessage,
				};
				elem.validate = values;
				resolve(elem)
			}).on("error", (error) => {
				console.log(error)
			})
		} else {
			reject(error)
		}

	})
}
module.exports = getFile;