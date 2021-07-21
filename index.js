const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const express = require('express');
const app = express();
const path = require('path');

// let input = process.argv[2];
// const langCode = franc(input);

// if(langCode === 'und') {
// 	console.log("SORRY!!, We couldn't find the language, try with some more sample text!".red)
// }
// else{
// 	const language = langs.where("3",langCode);
// 	console.log(language.name.green);	
// }

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
	res.render('index');
})

app.post('/', (req,res) => {
	let { language } = req.body;
	let langCode = franc(language);
	if(langCode === 'und') {
		res.render('guess', {langCode, guess: ''});
		// console.log("SORRY!!, We couldn't find the language, try with some more sample text!".red)
	}
	else{
		let guess = langs.where("3",langCode);
		res.render('guess', {langCode, guess});
		// console.log(guess.name.green);	
	}
})

app.listen(8080, () => {
	console.log('LISTENING TO PORT 8080!!!');
})