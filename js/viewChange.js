/* 화면 초기화(기능 실행시 뷰 지정) */

/* 회원가입, 로그인, 로그아웃, 예약, 예약리스트 순서*/
const CLIENT_REG_VIEW = 1;
const MANUFACTURER_REG_VIEW = 2;
const PRODUCT_REG_VIEW = 3;
const SALES_REG_VIEW = 4;
const SALES_LIST_VIEW = 5;

let signUpWrap = "";
let signInWrap = "";
let reservationWrap = "";
let listWrap = "";

/*회원가입, 로그인, 예약, 예약리스트 기능 실행시 위치 가져옴*/
const initViews = () => {
  console.log("initViews() CALLED!!");

  signUpWrap = document.querySelector("div.sign_up_wrap");
  signInWrap = document.querySelector("div.sign_in_wrap");
  reservationWrap = document.querySelector("div.res_wrap");
  listWrap = document.querySelector("div.res_list_wrap");
};

/* 선택된 뷰만 보이게 하기 */
const showSelectedView = (viewNO) => {
  console.log("showSelectedView() CALLED!!");
  switch (viewNO) {
    case SIGN_UP_VIEW:
      signUpWrap.style.display = "block";
      signInWrap.style.display = "none";
      reservationWrap.style.display = "none";
      listWrap.style.display = "none";
      break;

    case SIGN_IN_VIEW:
      signUpWrap.style.display = "none";
      signInWrap.style.display = "block";
      reservationWrap.style.display = "none";
      listWrap.style.display = "none";
      break;

    case SIGN_OUT_VIEW:
      signUpWrap.style.display = "none";
      signInWrap.style.display = "block";
      reservationWrap.style.display = "none";
      listWrap.style.display = "none";
      break;

    case RESERVATION_VIEW:
      signUpWrap.style.display = "none";
      signInWrap.style.display = "none";
      reservationWrap.style.display = "block";
      listWrap.style.display = "none";
      break;

    case RES_LIST_VIEW:
      signUpWrap.style.display = "none";
      signInWrap.style.display = "none";
      reservationWrap.style.display = "none";
      listWrap.style.display = "block";
      break;
  }
};
