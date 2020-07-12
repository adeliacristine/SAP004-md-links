const stats = (links) =>{
const allLinks = links.map((a)=>a.href);
return {
Total: allLinks.length
}
}
//module.exports = stats;