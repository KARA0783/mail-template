//メール原文を制作する関数
let createMail = (recv, bill,) => {
  let message = `${recv}様
  いつもご利用頂き有り難うございます。
  今月のご請求額は${bill}円です。
  ご確認をお願いいたします。`
  console.log(message);
};

//購入額に手数料を追加する関数
let addCharge = (bill) => {
  return bill * 1.07;
};

//取引先データ
let data = [
  { name:`櫻井`, bill:40000, crg:true },
  { name:`二宮`, bill:25000, crg:false },
];

//メール作成実行
for ( let rec of data ){
  let bill = rec[`bill`];
  if( rec[`crg`] ){
    bill = addCharge(bill);
  }
  createMail(rec[`name`],bill);
};
