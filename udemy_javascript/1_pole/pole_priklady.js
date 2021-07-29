const arr1=['one','string',100,false,[]];/* pole,rozne hodnotz a datove typy */
arr1[2]='test';
arr1[100]=100;
//console.log(arr1[2]);  /* vzber konkretneho prvku s indexom 2 = 100 */
//console.log(arr1); /* ctrl+s ulozim hodnotu a refresujem tym live server */

const arr2=arr1;
/* console.log(arr2); */
arr2[4]='new value'; /* zmena prvku pola, prvok arr2  a arr1 poukayuju na rovnakz objekt v pamati,a tak dochadya k zmene u obidvoch poli  */
//console.log(arr2);    

/* arr1.length =0;    // vymaz pola
console.log(arr1); */   

const arr3= [];
arr1.forEach((el,ind)=>{
    console.log(el);
    arr3[ind]=el;
})

//console.log(arr3);
arr3[4]="changed";
console.log(arr3);

arr1.push('new val');
console.log(arr1);

const arr5=arr1.map((x)=>x);
//clone ro array
console.log(arr5);