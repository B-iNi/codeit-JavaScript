/*********************************************************//코드잇 자바스크립트 기초 공부//****************************************************/

                                                           //과제17. 피보나치수열
//15번째 까지 구해봐
let previous = 0;
let current = 1;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous;  // previous를 임시 보관소 temp에 저장
  previous = current;
  current += temp;  // temp에는 기존 previous 값이 저장돼 있음
}

//아직도 어려움 피보나치수열 ㅅㅂ 못알아듣겠네..
/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제16. 반복문
//구구단 만들기
let a,b;
for(a=1;a<10;a++){
  for(b=1;b<10;b++){
    console.log(`${a} * ${b} = ${a*b}`)
  }
}
//이전에 아무것도 모르고 쌩 노가다로 만든 코드임  (미쳤네... 지금 하라고 해도 못할듯... 왜 저렇게 했을까..저따구로 했는데 작동이 정상적으로 되는게 신기할 따름...)
/*
let i = 1
for(let o = 1 ; o<=9;o++){
  console.log(`${i} * ${o} = `+i * o);
  if (o==9){
    i++;
   for(let o = 1 ; o<=9; o++){
     console.log(`${i} * ${o} = `+i * o);
     if (o==9){
       i++;
       for(let o = 1 ; o<=9; o++){
         console.log(`${i} * ${o} = `+i * o);
       if (o==9){
       i++;
       for(let o = 1 ; o<=9; o++){
         console.log(`${i} * ${o} = `+i * o);
       if (o==9){
       i++;
       for(let o = 1 ; o<=9; o++){
         console.log(`${i} * ${o} = `+i * o);
     if (o==9){
       i++;
       for(let o = 1 ; o<=9; o++){
         console.log(`${i} * ${o} = `+i * o);
     if (o==9){
       i++;
       for(let o = 1 ; o<=9; o++){
         console.log(`${i} * ${o} = `+i * o);
     if (o==9){
       i++;
       for(let o = 1 ; o<=9; o++){
         console.log(`${i} * ${o} = `+i * o);
     if (o==9){
       i++;
       for(let o = 1 ; o<=9; o++){
         console.log(`${i} * ${o} = `+i * o);
    
       }
   }
       }
   }
       }
   }
       }
   }
       }
   }
       }
   }
       }
   }
  }
  }
}*/
/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제15-1. while 반복문2
//정수 n의 약수는 n을 어떤 수로 나누었을 때 나누어떨어지게 하는 정수를 의미합니다. 만약 정수 i가 정수 n의 약수라면, n을 i로 나누었을 때 나머지가 0이 됩니다.
//while문을 활용해서 정수 180의 약수를 모두 출력하고, 총 몇 개의 약수가 있는지 출력하는 프로그램을 작성해 보세요.

const n = 180;
let k =0,count = 0;
while(k<=180){
  k++;
  if(180%k==0){
    count++;
    console.log(k);
  }
}
console.log(`180의 약수는 총 ${count}개 입니다.`)

/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제15. while 반복문
//1부터 100까지의 숫자들 중 홀수만 입력하라.
let i=0;                        /*       <for문이라면>        */                                                           //변수 i를 선언하고 초기값 지정
while(i<100){                   /* for(let i=0;i<100;i++){   */                                                           //while 문으로 반복 범위 지정
  i++;                          /*     if(i%2!=0){           */                                                          // i 값은 1씩 증가
  if(i%2!=0){                   /*       console.log(i);     */                                                           //if 조건으로 홀수 설정
    console.log(i);             /*      }                    */                                                           //출력
  }                             /*  }                        */
}

/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제14-1. for 반복문2
//높이별로 *이 입력되도록 하기
function printTriangle(height) {
  for(let i=0;i<=height;i++){
    console.log('*'.repeat(i));                           //  '문자'.repeat(i)   ===>  '문자'를 repeat == 반복해서 출력한다  (i) 번 만큼
  }                                                       // 입력하고자 하는 문자를 반복해서 입력할 때 사용함 !!!!!!!
}

//테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);

/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제14. for 반복문
// Q. 1부터 100까지의 숫자들 중 짝수들만 나렬하라
for (let Q =2; Q<=100; Q++){                         //반복문인 for을 사용하는데 변수선언 없이 그냥 집어넣어버리면 안됨!!!!
  if(Q%2==0)                                         // 아무것도 선언한 변수가 없기에 for 문 안에 let 으로 선언. 있다면 그냥 생략해도 될텐데... 까먹음...
    console.log(Q);
}
           
/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제13. swich문 응용
//swich 문을 이용, 각 함수에 맞게끔 출력하시오

let VIPPrice = 15;                       //각 등급별 가격을 나타내는 변수 선언
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

function checkPrice(grade){                //테스트코드 입력 받을 함수 호출
  switch (grade){
    case'R':
      console.log (`${grade}석 금액은 ${RPrice}만원 이다.`);                                             //  function 함수 (파라미터){
      break;                                                                                          //    swich (파라미터){
    case'VIP':                                                                                        //       case'파라미터' :
      console.log (`${grade}석 금액은 ${VIPPrice}만원 이다.`);                                           //          console.log("내용");
      break;                                                                                          //              break;
    case'S':                                                                                          //     }
      console.log (`${grade}석 금액은 ${SPrice}만원 이다.`);                                             //   }
      break;
    case'A':                                                                                          //  여러 선택사항이 있을때 스위치 문을 이용해 열고   선택지(케이스)를 선언한다!!!!
      console.log (`${grade}석 금액은 ${APrice}만원 이다.`);
      break;
    case'B':
      console.log (`VIP,R,S,A 중 고르시오.`);
      break;  
  }
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');

/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제12-3. if 제어문4
//나의 나이와,성별을 담은 함수와 호칭을 담은 변수가 있다.
//상대 나이와 성별에 따른 호칭이 알맞게 표현하라

let myAge = 26;
let myGender = 'male';

let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

function whatShouldICallYou(Age, Gender){
  if(Age == 26){
    return callFriend;                                                                     //각 호칭들로 결과값을 리턴시켜야 함!!!!
  }
  else if(Age < 26 && Gender == "male"){
    return callYoungerBrother;
  }
  else if(Age < 26 && Gender == "female"){
    return callYoungerSister;
  }
  else if (Age > 26 && Gender == "female"){
    return callOlderSister;
  }
  else{
    return callOlderBrother;
  }
}

//테스트 코드                                                                                 //테스트 코드에 함수와, 그 값이 적혀 있음 하지만,
let result01 = whatShouldICallYou(25, 'female');
let result02 = whatShouldICallYou(20, 'male');
let result03 = whatShouldICallYou(26, 'female');
let result04 = whatShouldICallYou(30, 'male');
let result05 = whatShouldICallYou(31, 'female');                                             //밑에 출력 console.log가 결과값을 따로 출력하게끔 되어있음으로 각 값들을 호칭 변수로 리턴해야한다

console.log(result01);
console.log(result02);
console.log(result03);
console.log(result04);
console.log(result05);

/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제12-1. if 제어문2
function printGrade(a,b){                                                        
  let totalscore = a + b;
  if(totalscore >=90){                                                     //조건을 제시
    console.log ("A");
  }
  else if(totalscore >= 80){                                               //조건에 안맞을 경우
    console.log("B");
  }
  else if(totalscore >= 70){                                               //조건에 안맞을 경우
    console.log("C");
  }
  else if(totalscore >= 60){
    console.log("D");
  }
  else{                                                                    // else 는 모든 조건을 뺀 나머지를 나타냄으로 별도의 조건이 따로 없다
    console.log("F");
  }
}
// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);
/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제12. if 제어문
function checkHeight(Height){                                                   //테스트 코드에 맞는 함수를 선언
if(Height >= 140){                                                             // if  조건문 선언
  console.log("탑승이 가능 합니다.");
}
else{                                                                         // 조건 이외의 조건에서
  console.log("탑승이 불가능 합니다.");
}
}

// 테스트 코드
checkHeight(140);
checkHeight(135);
checkHeight(170);
/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제11. 함수 변수 복습
let adultTag = "삑!"
let teenagerTag = "삑삑!"
let errorTag = "삑삑삑!"
let transferTag = "환승입니다."                                //변수 지정

function tagNotification(tagCase){                         //함수 선언
  console.log(tagCase);                                    //출력
}


// 테스트 코드
tagNotification(adultTag);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(adultTag);
/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제10-3. 함수 이용 출력 기본값
 function orderSetMenu(sandwich,drink = "스프라이트"){
  console.log(`주문하신 ${sandwich}, ${drink}세트 나왔습니다!`);    //함수선언에서 파타미터의값이 정해지지 않아서 기본값이 존재할 경우
}                                                             // function 함수 (파라미터 = "기본값"){
                                                              // 해당 값에 = 그리고 '기본값' 입력해 줘야함!!!
//테스트 코드
orderSetMenu('코드웨잇 클럽');
orderSetMenu('터키베이컨 아보카도', '코카콜라');
orderSetMenu('코드웨잇 멜트');
/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제10-2. 함수 이용 계산3
//직사각형의 넓이를 구하시오
function calculateRectangleArea(width,height){
  return width * height
}                                                                            //테스크 코드를 통해 함수가 필요하기에 함수를 호출 
                                                                             //호출된 함수로 계산된 값이 새로운 변수 값에 들어가야함
//테스트 코드                                                                   //return 으로 해당값을 다시 받게끔 해서 적용!!
let area1 = calculateRectangleArea(3, 4);  // 가로 3, 세로 4인 직사각형의 넓이 계산
let area2 = calculateRectangleArea(5, 8);  // 가로 5, 세로 8인 직사각형의 넓이 계산
let area3 = calculateRectangleArea(7, 2);  // 가로 7, 세로 2인 직사각형의 넓이 계산

console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);
/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제10-1. 함수 이용 계산2

function expressMultiplication(x,y){
  console.log(`${x} x ${y} = ${x*y}`);
}

//테스트 코드
expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);

/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제10. 함수 이용 계산1
//이러한 반복적인 작업을 간편하게 나타내기
function logParticipant(name){
  console.log(`${name}(이)가 대화에 참여 했습니다.`);
}
                                                                                //${} 템플릿 리터럴을 사용시!!! 무조건 ` 백틱으로만 감싸야 한다.
                                                                                
//테스트 코드
logParticipant('동수');
logParticipant('윤하');
logParticipant('재준');
logParticipant('동훈');
logParticipant('영희');
logParticipant('신욱');

/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제9. 자료형 응용하기
//숫자형을 담고 있는 변수(material1,material3,material5)과 문자열을 담고 있는 변수(material2,material4)가 있다
//변수끼리 연산해 result1에는 문자열 '34'를 result2에는 숫자형 34를 담아라.

let material1 = 3;
let material2 = '3';
let material3 = 10;
let material4 = '4';
let material5 = 4;
//결과 나타냄
let result1;
let result2;
//그래서 연산값을 넣어줘야함
result1 = material2 + material4;
result2 = material1 * material3 + material5

// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);                                                                                                    /* typeof 는 형식은 문자열인지 숫자형인지 판가름 하는거임*/

/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제8. 템플릿 문자열 실습
//근무자 이름(name),근무시간(time),시급(wege)을 전달 받고 총 급여 계산을 위한total변수 주어짐

function calcWage(name,time,wege){
  let total = time * wege;
                                                                                                                              /* 자바스크립트에서는 ${} 이것으로 표현한다!! */
  console.log(`${name}님의 근무 시간은 총${time}시간이며, 최종 급여는 ${total}원 입니다.`);
}

//테스트 코드
calcWage('김윤식',208,11340);
calcWage('성규재',175,12160);
calcWage('손태웅',161,13070);
calcWage('허우선',222,10980);

/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제7-1. 문자열 실습2
//함수 문자열 개념이용 문장 출력하기
// 영화 '베테랑'에서 "어이가 없네~"라는 대사가 유명했다.

console.log(`영와 '베테랑'에서 "어이가 없네~"라는 대사가 유명했다.`)

/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제7. 문자열 실습1

//함수 문자열 개념을 이용 두 문장을 출력하라
// 한국 영화 역사상 아카데미상을 받은 것은 '기생충'이 처음이다.
// 아리스토텔레스는 "인간은 사회적 동물이다."라고 말했다.

console.log(`한국 영와 역사상 아카데미상을 받은 것은 '기생충'이 처음이다.\n아리스토텔레스는 "인간은 사회적동물이다."라고 말했다.`)

                                                                                                                             /* 자바 스크립트에서는 console.log에서 출력할때 '' 이거랑 "" 이거랑 `` 이거 다 가능!!! */
/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제6. 파라미터 응용 함수 호출 계산2

//맡긴 금액 (amount), 맡기는 기간(term), 이자율(rate)를 입력 받으면 이자를 계산해 주는 함수(interestcalculator)함수를 작성하라

function interestcalculator (amount, trem, rate){
    return amount * trem * rate / 100;
}                                                                              // 선언한 함수의 계산 값을 return 해서 돌려줘야한다!!!
let myMoney = 3650000;                                                         // 그래서 return이 필요하다!!
let myInterest = interestcalculator(myMoney, 1, 4);
let totalMoney = myMoney + myInterest;


console.log('맡긴 금액은 ' + myMoney + '원 입니다.');
console.log('이자는 ' + myInterest + '원 입니다.');
console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.');

/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제5. 파라미터 응용 함수 호출 계산

 function interestCalculator(amount, saveTerm, interestRate){
  let money = amount * saveTerm * interestRate / 100;
  let total = amount + money
 
  console.log('맡긴 금액은 ' + amount + '원 입니다.');
  console.log('이자는 ' + money +'원 입니다.');
  console.log('최종 받을 금액은 ' + total + '원 입니다.');
}
interestCalculator(3650000, 1, 4);

/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제4. 파라미터 응용 함수 호출 계산

function bmiCalculator(name,weight,height){
    console.log(name + `님의 체질량지수는 `+ weight/(height*height/10000)+`입니다.`);
}
  
  // 테스트 코드
  bmiCalculator('홀쭉이', 43.52, 160);
  bmiCalculator('코린이', 61.25, 175);
  bmiCalculator('통통이', 77.76, 180);

/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제3. 파라미터 응용 함수 호출함

  function teraToGiga(a){
    console.log(a + 'TB는');
    console.log(a * 1024 +'GB 입니다.');
    
}
  function teraToMega(b){
    console.log(b + 'TB는');
    console.log(b * 1024 * 1024 +'MB 입니다.');
}
  teraToGiga(2);
  teraToMega(2);

/*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제2. 함수 이용 출력하기
  function printChorus(){
    console.log(`무구궁화 삼천리 화려 강산\n대한 사람 대한으로 길이 보전하세`);
}
                                                                                                //function 함수를 호출하고 정의한다
                                                                                                //JS 에서는 'let'

console.log('1절');
console.log('동해 물과 백두산이 마르고 닳도록');
console.log('하느님이 보우하사 우리나라 만세');
 
console.log('2절');
console.log('남산 위에 저 소나무 철갑을 두른 듯');
console.log('바람서리 불변함은 우리 기상일세');
 
console.log('3절');
console.log('가을 하늘 공활한데 높고 구름 없이');
console.log('밝은 달은 우리 가슴 일편단심일세');
 
console.log('4절');
console.log('이 기상과 이 맘으로 충성을 다하여');
console.log('괴로우나 즐거우나 나라 사랑하세');

                                                              
 /*-------------------------------------------------------------------------------------------------------------------------------------*/
                                                           //과제1. 15라는 숫자 3번 입력해 보기
                                                                                                 //자바 스크립트에서는 출력할 때 console.log 사용
console.log(10+5);
console.log(10*3/2);
console.log(45/3);