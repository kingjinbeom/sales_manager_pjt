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
        // m_reg_date: reg_date,
        // m_mod_date: mod_date
    });
    console.log(manufactDB.get(no));
}

/* 제조사 DB 만들기 끝 */

