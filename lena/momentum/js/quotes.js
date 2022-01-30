const quotes = [
    {
        quote:"The secret of getting ahead is getting started.",
        author:"Mark Twain",
    },
    {
        quote:"The best way to get started is to quit talking and begin doing.",
        author:"Walt Disney",
    },  
    {
        quote:"Take action. An inch of movement will bring you closer to your goals than a mile of intention.",
        author:"Steve Maraboli",
    },  
    {
        quote:"You don’t have to be great to start, but you have to start to be great.",
        author:"Zig Ziglar",
    },  
    {
        quote:"You are never too old to set another goal or to dream a new dream.",
        author:"C.S. Lewis"
    },  
    {
        quote:"No-one can make you feel inferior without your consent.",
        author:"Eleanor Roosevelt",
    },  
    {
        quote:"It does not matter how slowly you go as long as you do not stop.",
        author:"Confucius",
    },  
    {
        quote:"Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit.",
        author:"Conrad Hilton",
    },  
    {
        quote:"The greatest discovery of all time is that a person can change his future by merely changing his attitude.",
        author:"Oprah Winfrey",
    },  
    {
        quote:"Don't bother just to be better than your contemporaries or predecessors. Try to be better than yourself.",
        author:"William Faulkner"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 
//uses random() to get index
//multiply by the length of the array to get range between 0 ~ length of an array

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

/*
NOTES:
    Math
    1. random() :: gives random number between 0 ~ 1
    2. round() :: rounds up to the nearest integer
    3. ceil() :: rounds a number up to the next largest integer. 
            1.1 -> 2
            1.9 -> 2
            1.01 -> 2
            1.0 -> 1
    4. floor() :: returns the largest integer less than or equal to x. 
            1.1 -> 1 
            1.9 -> 1
            1.999 -> 1
*/
