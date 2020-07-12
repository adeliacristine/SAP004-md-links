array=[]
object=[]
const stats = () =>{
	
/*const href = item.match(/\((http[s]?:[^\)]*)\)/)[1];
const allLinks = href.map((a)=>a.href);*/
console.log(allLinks);
array.forEach(item => {
	const href = item.match(/\((http[s]?:[^\)]*)\)/)[1];
	const allHref = href.length;
	object.push({
		total: allHref,
		Quebrado: pathFile,
		unicos:c
	})
})

}
console.log(href)
//console.log(allHref)
//module.exports = stats;

