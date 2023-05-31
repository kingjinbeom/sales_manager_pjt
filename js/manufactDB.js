const manufactDB = new Map();

/* 제조사 DB 만들기 시작 */
const addManufact = (no, name, address, phone, manager) => {
    console.log('addmanuFact() CALLED!!');

    //  id를 가지고 가입한다.
    manufactDB.set(no, {
        m_no: no,
        m_name: name,
        m_address: address,
        m_phone: phone,
        m_manager: manager,
        m_reg_date: reg_date,
        m_mod_date: mod_date
    });
    console.log(manufactDB.get(no));
}

/* 제조사 DB 만들기 끝 */

addManufact('1', 'A제조사', 'AAA시 aaa구 123-456', '010-1478-5236', 'A대리');
addManufact('2', 'B제조사', 'BBB시 bbb구 789-123', '010-9147-8523', 'B대리');
addManufact('3', 'C제조사', 'CCC시 ccc구 456-789', '010-6901-4785', 'C대리');
addManufact('4', 'D제조사', 'DDD시 ddd구 120-345', '010-2369-0123', 'D대리');
addManufact('5', 'E제조사', 'EEE시 eee구 678-901', '010-4782-9514', 'E대리');