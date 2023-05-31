document.addEventListener('DOMContentLoaded', function () {
    console.log('DOCUMENT READY!!');

    init();
});

const init = () => {
    console.log('init() READY!!');
    
    addcustomer('gildong','홍길동','gildong@gamil.com','010-1234-5678');
    addcustomer('chango','박찬호','chanho@naver.com','010-9012-3456');
    addcustomer('saeri','박세리','saeri@gdanm.net','010-7890-1234');
    addcustomer('byeonggyu','이병규','byeonggyu@gamil.com','010-5678-9012');
    addcustomer('heungmin','손흥민','heungmin@naver.com','010-3456-7890');
    addManufact('1', 'A제조사', 'AAA시 aaa구 123-456', '010-1478-5236', 'A대리');
    addManufact('2', 'B제조사', 'BBB시 bbb구 789-123', '010-9147-8523', 'B대리');
    addManufact('3', 'C제조사', 'CCC시 ccc구 456-789', '010-6901-4785', 'C대리');
    addManufact('4', 'D제조사', 'DDD시 ddd구 120-345', '010-2369-0123', 'D대리');
    addManufact('5', 'E제조사', 'EEE시 eee구 678-901', '010-4782-9514', 'E대리');
    addSales('5', 'heungmin', '5', '30000');
    addSales('4', 'byeonggyu', '4', '20000');
    addSales('3', 'saeri', '3', '15000');
    addSales('2', 'chanho', '2', '500');
    addSales('1', 'gildong', '1', '10000');
    addproduct('1','1','A상품','10000','50');
    addproduct('2','2','B상품','500','100');
    addproduct('3','3','C상품','15000','20');
    addproduct('4','4','D상품','20000','10');
    addproduct('5','5','E상품','30000','30');
    console.log(salesDB);
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