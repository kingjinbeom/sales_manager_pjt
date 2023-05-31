document.addEventListener('DOMContentLoaded', function () {
    console.log('DOCUMENT READY!!');

    init();
});

const init = () => {
    console.log('init() READY!!');

    initViews();
    addEvent();
}

const addEvent = () => {
    console.log('addEvent() READY!!');

    /* 메뉴 변경 시작 */

    // 회원 가입 메뉴
    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');

    signUpMenuBtn.addEventListener('click', function () {
        console.log('signUpMenuBtn CLICKED!!');

        showSelectedView(SIGN_UP_VIEW);
    });

    // 로그인 메뉴
    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');

    signInMenuBtn.addEventListener('click', function () {
        console.log('signInMenuBtn CLICKED!!');

        showSelectedView(SIGN_IN_VIEW);
    });

    // 로그아웃 메뉴
    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');

    signOutMenuBtn.addEventListener('click', function () {
        console.log('signOutMenuBtn CLICKED!!');

        signInedMemberId = '';

        setMenuStatus(SIGN_OUT_STATUS);
    });

    // 예약 메뉴
    let resMenuBtn = document.querySelector('div.menu_wrap a.res');
    resMenuBtn.addEventListener('click', function () {
        console.log('writeMenuBtn CLICKED!!');

        if (signInedMemberId === '') {
            alert('Please sign in!!');

            showSelectedView();
            return;
        }

        showSelectedView(RESERVATION_VIEW);
    });


    // 리스트 메뉴
    let listMenuBtn = document.querySelector('div.menu_wrap a.res_list');
    listMenuBtn.addEventListener('click', function () {
        console.log('listMenuBtn CLICKED!!');

        if (signInedMemberId === '') {
            alert('Please sign in!!');

            showSelectedView();
            return;
        }

        resListView();

        showSelectedView(RES_LIST_VIEW);
    });

    /* 메뉴 변경 끝 */

    /* 함수 실행 시작 */

    //회원가입
    let memUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]');
    memUpBtn.addEventListener('click', function () {
        console.log('signUpBtn CLICKED!!');

        let u_id = document.querySelector('div.sign_up_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_up_wrap input[name="u_pw"]').value;
        let u_mail = document.querySelector('div.sign_up_wrap input[name="u_mail"]').value;

        addUser(u_id, u_pw, u_mail);
        alert('SIGN UP SECCESS!!');

        document.querySelector('div.sign_up_wrap input[name="u_id"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="u_pw"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="u_mail"]').value = '';
    });

    //로그인
    let memInBtn = document.querySelector('div.sign_in_wrap input[type="button"]');
    memInBtn.addEventListener('click', function () {
        console.log('signInBtn CLICKED!!');

        let u_id = document.querySelector('div.sign_in_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_in_wrap input[name="u_pw"]').value;

        let isMember = searchUser(u_id, u_pw);
        if (isMember) {
            alert('SIGN IN SUCCESS!!');
            signInedMemberId = u_id;
            setMenuStatus(SIGN_IN_STATUS);

            resListView();
            showSelectedView(RES_LIST_VIEW);
        }
        else {
            alert('SIGN IN FAIL!!');
            signInedMemberId = '';
        }

        document.querySelector('div.sign_in_wrap input[name="u_id"]').value = '';
        document.querySelector('div.sign_in_wrap input[name="u_pw"]').value = '';

    });

    //예약 리스트
    let listBtn = document.querySelector('#btn');
    listBtn.addEventListener('click', function () {
        console.log('writeBtn CLICKED!!');

        let txt = document.querySelector('div.res_wrap input').value;
        addAirRes(txt);
        document.querySelector('div.res_wrap input').value = '';

        resListView();
        showSelectedView(RES_LIST_VIEW);

    });

    /* 함수 실행 끝 */
}


const resListView = () => {
    console.log('resListView() CALLED');

    listWrap.textContent = '';

    let diaryArr = searchAirRes();

    for (let i = 0; i < diaryArr.length; i++) {
        console.log(diaryArr[i]);

        let tpl = document.querySelector('#list_item');
        let clone = document.importNode(tpl.content, true);
        let txt = clone.querySelector('div.txt');

        txt.textContent = diaryArr[i];

        listWrap.prepend(clone);

    }

}