const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "God is dead.",
    author: "Nietzsche",
  },
  {
    quote:
      "It ain't what you don't know that gets you into trouble. It's what you know for sure that just ain't so.",
    author: "Mark Twain",
  },
  {
    quote: "See you on the next one, bye bye!",
    author: "Nicolas Serrano Arevalo",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do not love.",
    author: "Hemmingway",
  },
  {
    quote:
      "As I grow older, I pay less attention to what men say. I just watch what they do.",
    author: "Andrew Carnegie",
  },
  {
    quote: "Twitter is a waste of time.",
    author: "Alex Ferguson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
