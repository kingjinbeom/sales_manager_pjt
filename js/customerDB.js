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
        // c_reg_date: reg_date,
    });

    console.log(customerDB.get(id));
}
