const customerDB = new Map();

/* 고객 DB 만들기 시작 */
const addcustomer = (id, name, mail, phone, reg_date) => {
    console.log('addUser() CALLED!!');

    //  id를 가지고 등록한다.
    customerDB.set(id, {
        c_id: id,
        c_name: name,
        c_mail: mail,
        c_phone: phone,
        c_reg_date: reg_date,
    });

    console.log(customerDB.get(id));
}

addcustomer('gildong','홍길동','gildong@gamil.com','010-1234-5678');
addcustomer('chango','박찬호','chanho@naver.com','010-9012-3456');
addcustomer('saeri','박세리','saeri@gdanm.net','010-7890-1234');
addcustomer('byeonggyu','이병규','byeonggyu@gamil.com','010-5678-9012');
addcustomer('heungmin','손흥민','heungmin@naver.com','010-3456-7890');