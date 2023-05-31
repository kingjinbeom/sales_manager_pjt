/* 화면 초기화(기능 실행시 뷰 지정) */

/* 회원가입, 로그인, 로그아웃, 예약, 예약리스트 순서*/
const CLIENT_REG_VIEW = 1;
const MANUFACTURER_REG_VIEW = 2;
const PRODUCT_REG_VIEW = 3;
const SALE_REG_VIEW = 4;
const RES_LIST_VIEW = 5;

let clientRegWrap = "";
let manufacturerRegWrap = "";
let productRegWrap = "";
let saleRegWrap = "";
let resListWrap = "";

/*회원가입, 로그인, 예약, 예약리스트 기능 실행시 위치 가져옴*/
const initViews = () => {
    console.log("initViews() CALLED!!");

    clientRegWrap = document.querySelector("div.client_reg_wrap");
    manufacturerRegWrap = document.querySelector("div.manufacturer_reg_wrap");
    productRegWrap = document.querySelector("div.product_reg_wrap");
    saleRegWrap = document.querySelector("div.sale_reg_wrap");
    resListWrap = document.querySelector("div.res_list_wrap");
};

/* 선택된 뷰만 보이게 하기 */
const showSelectedView = (viewNO) => {
    console.log("showSelectedView() CALLED!!");
    switch (viewNO) {
        case CLIENT_REG_VIEW:
            clientRegWrap.style.display = "block";
            manufacturerRegWrap.style.display = "none";
            productRegWrap.style.display = "none";
            saleRegWrap.style.display = "none";
            resListWrap.style.display = "none";
            break;

        case MANUFACTURER_REG_VIEW:
            clientRegWrap.style.display = "none";
            manufacturerRegWrap.style.display = "block";
            productRegWrap.style.display = "none";
            saleRegWrap.style.display = "none";
            resListWrap.style.display = "none";
            break;

        case PRODUCT_REG_VIEW:
            clientRegWrap.style.display = "none";
            manufacturerRegWrap.style.display = "none";
            productRegWrap.style.display = "block";
            saleRegWrap.style.display = "none";
            resListWrap.style.display = "none";
            break;

        case SALE_REG_VIEW:
            clientRegWrap.style.display = "none";
            manufacturerRegWrap.style.display = "none";
            productRegWrap.style.display = "none";
            saleRegWrap.style.display = "block";
            resListWrap.style.display = "none";
            break;

        case RES_LIST_VIEW:
            clientRegWrap.style.display = "none";
            manufacturerRegWrap.style.display = "none";
            productRegWrap.style.display = "none";
            saleRegWrap.style.display = "none";
            resListWrap.style.display = "block";
            break;
    }
};
