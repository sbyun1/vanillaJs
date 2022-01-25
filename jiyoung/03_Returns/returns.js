/* calculator */
const calculator = {
    plus: function(a, b){
        console.log(a+b);
    },
    minus: function(a, b){
        console.log(a-b);
    },
    times: function(a, b){
        console.log(a*b);
    },
    divide: function(a, b){
        console.log(a/b);
    },
    power: function(a, b){
        console.log(a**b);
    }
}

calculator.plus(20, 2);
calculator.minus(20, 2);
calculator.times(20, 2);
calculator.divide(20, 2);
calculator.power(20, 2);


/* return */
//함수를 통해 결과값을 받기 원할 때 return 사용
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);


/* better calculator */
const betterCalculator = {
    plus: function(a, b){
        return a+b;
    },
    minus: function(a, b){
        return a-b;
    },
    times: function(a, b){
        return a*b;
    },
    divide: function(a, b){
        return a/b;
    },
    power: function(a, b){
        return a**b;
    }
}

const plusRes = betterCalculator.plus(2,3);
const minusRes = betterCalculator.minus(plusRes, 10);
const timesRes = betterCalculator.times(10, minusRes);
const divideRes = betterCalculator.divide(timesRes, plusRes);
const powerRes = betterCalculator.power(divideRes, minusRes);

/* 콘솔창에 걍 입력해도 나옴
console.log(plusRes);
console.log(minusRes);
console.log(timesRes);
console.log(divideRes);
console.log(powerRes);
*/

//ctrl+d 하면 한 번에 바꾸기 가넝..