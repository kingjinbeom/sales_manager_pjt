const productDB = new Map();

/* 상품 DB 만들기 시작 */
const addproduct = (pno, mno, name, price, quantity) => {
    console.log('addUser() CALLED!!');

    //  상품번호(no)를 가지고 등록한다.
    productDB.set(no, {
        p_no: pno,
        m_no: mno,
        p_name: name,
        p_mail: price,
        p_quantity: quantity,
        p_reg_date: reg_date,
    });

    console.log(productDB.get(no));
}

addproduct('1','1','A상품','10000','50');
addproduct('2','2','B상품','500','100');
addproduct('3','3','C상품','15000','20');
addproduct('4','4','D상품','20000','10');
addproduct('5','5','E상품','30000','30');