/* 가입일, 등록일 등 날짜 생성 함수 */

const getCurrentDateTime = () => {
  console.log("getCurrentDateTime CALLED!!");

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1; //0: 1월, 1: 2월...
  let date = today.getDate();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  return `${year}-${month}-${date}\n${hours}:${minutes}:${seconds}`;
};

// 개발단계(true), 배포단계(false)
// const consoleFlag = true;
// if (consoleFlag) {
//   console = {};
//   console.log = function () { };
//   console.warn = function () { };
//   console.error = function () { };
//   console.info = function () { };
// }
