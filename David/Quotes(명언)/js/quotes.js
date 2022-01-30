const quotes = [
    {
        quote: "아무렇게나 적어도 명언이 된다.",
        author: "김대원",
    },
    {
        quote: "아무 적어도 명언이 된다.",
        author: "김대원",
    },
    {
        quote: "나 적어도 명언이 된다.",
        author: "김대원",
    },
    {
        quote: "아무렇게나  된다.",
        author: "김대원",
    },
    {
        quote: "아무렇게나 적명언이 된다.",
        author: "김대원",
    },
    {
        quote: "아무렇도 명언이 된다.",
        author: "김대원",
    },
    {
        quote: "아무렇게나 어도 명언이 된.",
        author: "김대원",
    },
    {
        quote: "아무렇게나 적어도 명언이.",
        author: "김대원",
    },
    {
        quote: "아무렇.",
        author: "김대원",
    },
    {
        quote: "어도 명언이 된다.",
        author: "김대원",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");



//random을 이용한 함수 
//.ceil()은 1.01이여도 2를 반환, 즉 무조건 올림
//.floor()는 1.99999여도 1을 반환, 즉 무조건 내림
// function arrayLenght(){
//     Math.floor(Math.random() * 10)
// }

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;