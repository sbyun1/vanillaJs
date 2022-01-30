const quotes = [
{ 
    quote: "Without continuous personal development, you are now all that you will ever become and hell starts when the person you are meets the person you could have been",
    author: "Eli cohen",
},
{ 
    quote: "Working hard for something we don't care about is called stressed, working hard for something we love is called passion.",
    author: "Simon Sinek",
},
{ 
    quote: "Don't let the fear of losing be greater than the excitement of winning.",
    author: "Robert Kiyosaki ",
},
{ 
    quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    author: "Dale Carnegie",
},
{ 
    quote: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
},
{ 
    quote: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
    author: "Vince Lombardi",
},
{ 
    quote: "It is your determination and persistence that will make you a successful person.",
    author: "Kenneth J Hutchins",
},
{ 
    quote: "You can waste your life drawing lines. Or you can live your life crossing them.",
    author: "Shonda Rhimes",
},
{ 
    quote: "Be poor, humble and driven. Don't be afraid to shift or pivot.",
    author: "Alex Rodriguez",
},
{ 
    quote: "일단 똥을 싸면 모든 사람들이 박수를 쳐줄 것이다.",
    author: "똥쟁이",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// Math.random() < 랜덤 수를 생성할 수 있는 function
// Math.round() < 반올림할 수 있는 함수 ex) 1.5 = 2, 1.2 = 1
// Math.ceil() < 수를 작게 설정해도 천장으로 올려주는 함수 ex) 1.1 = 2, 1.01 = 2
// Math.floor() < ceil 과 다르게 바닥으로 내려주는 함수 ex) 1.9999999 = 1
