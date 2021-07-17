const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
let input = process.argv[2];
const langCode = franc(input);

if(langCode === 'und') {
	console.log("SORRY!!, We couldn't find the language, try with some more sample text!".red)
}
else{
	const language = langs.where("3",langCode);
	console.log(language.name.green);	
}