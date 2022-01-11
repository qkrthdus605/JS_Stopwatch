let min = 0;
let sec = 0;
let ms = 0; // 시간의 초기값 설정

// 각 변수 별로 html에서 element를 가져오는 코드를 작성
const millisec = document.querySelector('#millisec');
const second = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes');

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let interval;

// 시작 버튼 클릭 시 시간이 10ms 증가
startBtn.addEventListener('click', ()=>{
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

function startTimer () {
  ms++; 
  if(ms > 9){
    millisec.innerHTML = ms;
  }else{
    millisec.innerHTML = "0" + ms;
  }
  if (ms > 99) {
    sec++;
    if(sec > 9){
      second.innerHTML = sec;
    }else{
      second.innerHTML = "0" + sec;
    }
    // 초기화
    ms = 0;
    millisec.innerHTML = "00";
  } 
  if (sec > 59){
      min++;
      if(min > 9){
        minutes.innerHTML = min;  
      }else{
        minutes.innerHTML = "0" + min;
      }
      sec = 0;
      second.innerHTML = "00";
  }    
}

// 일시정지 버튼 클릭 시 시간 증가가 정지
stopBtn.addEventListener('click', ()=>{
  clearInterval(interval);
})

// 리셋 버튼 클릭 시 시간이 상태로 초기화
resetBtn.addEventListener('click', function(){
  clearInterval(interval);
  ms = 0;
  sec = 0;
  min = 0;
  millisec.innerHTML = "00";
  second.innerHTML = "00";
  minutes.innerHTML = "00";
})

