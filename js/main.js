const quoteText = document.querySelector('#text');
const quoteAuthor = document.querySelector('#author');
const newQuoteBtn = document.querySelector('#new-quote');


createQuote()
	.catch(err => console.log(err));

async function createQuote() {
	const postStream = await fetch('https://github.com/kuba-bujak/Random-Quote-Generator/blob/main/quotes.json');
	const colorStream = await fetch('https://github.com/kuba-bujak/Random-Quote-Generator/blob/main/colors.json');
	const colors = await colorStream.json()
	const posts = await postStream.json();

	let i = Math.floor(Math.random() * posts.length);
	let x = Math.floor(Math.random() * colors.length);

	const text = posts[i].quote;
	const author = posts[i].author;
	const fontColor = colors[x].color;

	quoteText.innerText = text;
	quoteAuthor.innerText = author;
	document.body.style.backgroundColor = fontColor;
	document.body.style.color = fontColor;
	document.querySelectorAll('.button').forEach(button => {
		button.style.backgroundColor = fontColor;
	})
}

newQuoteBtn.addEventListener('click', createQuote);
