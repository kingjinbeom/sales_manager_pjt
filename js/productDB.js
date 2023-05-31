const productDB = new Map();

/* 상품 DB 만들기 시작 */
const addproduct = (pno, mno, name, price, quantity) => {
    console.log('addUser() CALLED!!');

    //  상품번호(no)를 가지고 등록한다.
    productDB.set(pno, {
        p_no: pno,
        m_no: mno,
        p_name: name,
        p_mail: price,
        p_quantity: quantity,
        // p_reg_date: reg_date,
    });

    console.log(productDB.get(pno));
}

