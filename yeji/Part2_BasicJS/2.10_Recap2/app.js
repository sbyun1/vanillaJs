// console.log() : console에 결과를 보여주기 위한 것 ( + browser에서 결과를 보여주는 alert)


// function을 const, let, var와 같은 variable에 할당하면 (variable에 function을 할당하면)
// 그 variable은 add function의 결과 type을 가질 것 (다른 것들은 결과를 return할 것 => 결과를 도출해낼 수 있음)
// 여기서의 add는 아무것도 return 하지 않는다. (just console logging) => 결과를 도출해내지 못함
const calculator = {
  add: function(a,b){
    console.log("hello");     // return 전, 실행 O
    return a + b;
    console.log("bye bye");   // return 후, function이 종료되기 때문에 실행 X
  },
  minus: function(a,b){
    return a - b;
  },
  divide: function(a,b){
    return a / b;
  },
  times: function(a,b){
    return a * b;
  },
  power: function(a,b){
    return a ** b;
  }
};

const addResult = calculator.add(2, 3);
/*
add: function(a,b){
    console.log(a + b);
  }
  function을 const, let, var와 같은 variable에 할당하면 그 variable은 plus function의 결과type을 갖게 될 것 (다른 것은 결과를 return함)
  여기서의 plus는 아무것도 return 하지 않음 (무언가를 console.log만 할 뿐 -> console에 보이긴 하지만, function외부에서 value를 얻고 싶을 때는 부적합)
  console.log() 대신 return을 사용
  variable에 function을 할당하면 variable은 function의 return value를 가지게 되는 것
  return a + b; 를 받으면 addResult에서는 5가 될 것 ! (=> 하지만 이건 return을 했을 때만 가능한 일)
  # 중요한 점 #
  function을 호출 -> return 값 반환 -> function 종료
  - 한번 return 하면 function은 끝남
  - return을 하면, function은 작동을 멈추고 결과 값을 return하고 끝남
  - function은 계속 남아있는 것이 아니라, 실행되고 나면 사라지고, 마지막엔 result(결과)를 남긴다.
  */