/**const a = '3';
const b = 7;
var c = a + b;
var d = Number(a) + 7;
console.log(c);
console.log(d);

var a = '50';
console.log(parseInt(7 + 8.3));
console.log(7 + 8.3);
console.log(typeof(Number(a))); */


/**var a = {
    b: 1,
    c: 2,
    d: 3,
}
for(var h in a){
    console.log(`${h} có giá trị là ${a[h]}`)
} */


/**const num = 5;
const str = '5';
const obj = new Object('5');
console.log(num == str);
console.log(num === str);
console.log(str == obj);
console.log(str === obj); 
console.log(Object.is(num, str)); */


/**var number = 10;
if(number < 0){
    console.log(`${number} là số âm`);
}else if(number > 0){
    console.log(`${number} là số dương`);
}else{
    console.log('0');
} */


/**var thu = 9;
switch (thu){
    case 1:
        console.log('Chủ nhật');
        break;
    case 2:
        console.log('Thu 2');
        break;
    case 3:
        console.log('Thu 3');
        break;
    case 4:
        console.log('Thu 4');
        break;
    case 5:
        console.log('Thu 5');
        break;
    case 6:
        console.log('Thu 6');
        break;
    case 7:
        console.log('Thu 7');
        break;
    default:
        console.log('Khong cos');
} */


/**
//in 1 so lon hon 0
var number = -3;
try{
    if(isNaN(number)){
        console.log(`${number} khong phai so`);
    }if(number < 0){
        throw new Error('So nho hon 0');
    }
    console.log(number);
}catch(eror){
    console.log('Loi: ' + eror.message);
}finally{
    console.log('finally');
} */


const obj = {};
obj.x = 3;
const key = 'y';
obj[key] = 4;
for(a in obj){
    console.log(`${a}: ${obj[a]}`);
}