const salesDB = new Map();

/* 판매 DB 만들기 시작 */
const addSales = (sno, id, pno, price) => {
    console.log('addSales() CALLED!!');

    //  id를 가지고 가입한다.
    salesDB.set(sno, {
        s_no: sno,
        c_id: id,
        p_no: pno,
        s_price: price,
        // s_reg_date: reg_date,
        // s_mod_date: mod_date
    });
    console.log(salesDB.get(sno));
}
/* 판매 DB 만들기 끝 */

