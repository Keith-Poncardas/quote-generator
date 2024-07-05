
const card = document.querySelector(".card");

const quoteText = document.getElementById("quote-text");
const quoteCite = document.getElementById("quote-citing");

const copyBtn = document.getElementById("copy-btn");
const tweetBtn = document.getElementById("tweet-btn");
const newQuoteBtn = document.getElementById("new-quote-btn");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote(quote) {
  quoteText.textContent = quote.text;
  quoteCite.textContent = quote.author;
}

function copyQuote() {
  const textToCopy = quoteText.textContent + " - " + quoteCite.textContent;
  const textarea = document.createElement("textarea");

  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');

  document.body.removeChild(textarea);
}

function tweetQuote() {
  const URL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteCite.textContent}`;
  window.open(URL, '_blank');
}

function animateQuoteContainer() {
  const animate = 'animate__fadeInDown';
  card.classList.remove(animate);

  card.classList.add('animate__animated', animate);

  newQuoteBtn.disabled = true;
  tweetBtn.disabled = true;
  copyBtn.disabled = true;

  card.addEventListener('animationend', function () {

    card.classList.remove(animate);

    newQuoteBtn.disabled = false;
    tweetBtn.disabled = false;
    copyBtn.disabled = false;

  }, { once: true })
}

function generateQuote() {
  const randomQuote = getRandomQuote();
  displayQuote(randomQuote);
  animateQuoteContainer();
}

newQuoteBtn.addEventListener('click', generateQuote);
tweetBtn.addEventListener('click', tweetQuote);
copyBtn.addEventListener('click', copyQuote);

function initializePage() {
  generateQuote();
}

window.addEventListener('load', initializePage);