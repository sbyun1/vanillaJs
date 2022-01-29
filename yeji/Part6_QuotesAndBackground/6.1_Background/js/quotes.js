const quotes = [
    {
        quote: 'I never dreamed about success, I worked for it',
        author: 'Estee Lauder'
    },
    {
        quote: 'Do not try to be original, just try to be good.',
        author: 'Paul Rand'
    },
    {
        quote: 'Do not be afraid to give up the good to go for the great',
        author: 'John D. Rockefeller'
    },
    {
        quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
        author: 'Martin Luther King Jr.'
    },
    {
        quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
        author: 'Thomas Edison'
    },
    {
        quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
        author: 'REid Hoffman'
    },
    {
        quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
        author: 'Tim O Reilly'
    },
    {
        quote: 'Some people dream of success, while other people get up every morning and make it happen',
        author: 'Wayne Huizenga'
    },
    {
        quote: 'The only thing worse than starting something and falling.. is not starting something',
        author: 'SEth Godin'
    },
    {
        quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
        author: 'Jim Rohn'
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/* randomneww(무작위성)
    1) Array 안에 있는 element에 어떻게 접근하나?
        ex. console.log(quotes[0]);
        array안에 quote 갯수가 10개이기 때문에 0~9까지의 element가 있다.
            => 0~9까지의 숫자를 주는 function 필요 => Math module 사용 (Math 안에 많은 function이 있지만 그 중에 random()에 대해 알아보자)
        
    2) Math.random() : 0부터 1 사이의 랜덤한 숫자를 제공
        - 숫자를 곱해서 사용 (* 숫자)
            => 10까지의 element를 구하기 위해서는 "* 10"을 하자 (= Math.random() * 10)
        - Math.random()은 소수점 자리수가 출력 : 이걸 없애기 위해서는 세가지 function을 사용할 수 있다.
        ⓐ Math.round() : 숫자에 반올림
            ex. 1.1이 있다면, round() 사용 시   -> return 1
                1.2, 1.3, 1.4도 모두           -> return 1
                하지만 1.5, 1.6, 1.7, 1.8은     -> return 2
        ⓑ Math.ceil() : 숫자를 천장(ceil)까지 높여줌
            ex. 1.1이 있다면, ceil() 사용 시   -> return 2
                1.01만 되어도                  -> return 2
        ⓒ Math.floor() : 숫자를 바닥(floor)까지 내려줌
            ex. 1.9가 있다면, floor() 사용 시  -> return 1
                1.999999도                    -> return 1
    3) random하게 얻은 숫자에 10을 곱해서 floor() 사용하기
*/

//Math.floor(Math.random() * 10) : 전부가 숫자가 된다는 것 명심
//console.log(quotes[Math.floor(Math.random() * 10)]);

// 하지만 문제는 여기 숫자 10을 hard coding 했다는 점 (딱 10가지의 element만 가지고 있을 때 동작한다는 것)
// 추가했을 때도 사용할 수 있도록 -> Array의 길이를 알아내자
// Array.length 사용
// console.log(quotes[Math.floor(Math.random() * quotes.length)]);

// todayQuote variable에 저장
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
/* 
    * 여기서 기억할 것 *
    1. Math.random() : 0부터 1 사이의 랜덤한 숫자 (소수점 아래 숫자 포함)
    2. 1번에서 나온 숫자에 array의 길이만큼의 숫자를 곱해줌
    3. 2번에서 나온 숫자를 floor()로 내림시켜줌
    4. 그리고나서 quotes Array 내부에서 무엇인지 탐색하는 것
*/

// quotes와 author를 화면에 보여주기
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;