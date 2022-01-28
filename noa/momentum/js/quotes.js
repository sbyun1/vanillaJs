//object가 들어있는 arrays
const quotes = [
  {
    quote: "I must not fear. Fear is the mind-killer. Fear is the little death that brings obliteration.",
    author: "DUNE(Jessica)",
  },
  {
    quote: "Where the fear has gone there will be nothing. Only I will remain.",
    author: "DUNE(Jessica)",
  },
  {
    quote: "Dreams make good stories, but everything important happens when we're awake.",
    author: "DUNE(Duncan Idaho)",
  },
  {
    quote: "A great man doesn't seek to lead. He's called to it.",
    author: "DUNE(Leto Atreides)",
  },
  {
    quote: "You fight when the necessity arises, no matter the mood.",
    author: "DUNE(Gurney Halleck)",
  },
  {
    quote: "The mystery of life isn't a problem to solve, but a reality to experience.",
    author: "DUNE(Jamis)",
  },
  {
    quote: "Dreams are messages from the deep.",
    author: "DUNE",
  },
  {
    quote: "Here I am. Here I remain.",
    author: "DUNE(Leto Atreides)",
  },
  {
    quote: "We must join it. We must float with it.",
    author: "DUNE",
  },
  {
    quote: "My road leads into the desert.",
    author: "DUNE(Paul Atreides)",
  },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//0 ~ 9 까지의 내용을 math.random으로 불러옴
//round : 반올림
//ceil : 올림
//floor : 내림

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//늘어날 것을 감안하여 array의 길이만큼!

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;