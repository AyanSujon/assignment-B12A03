// Problem -01 ( Divide the Asset )
var area = 100;
//write your code here

var divideBy = 2;
    assetWillGet = area / divideBy;
    console.log(assetWillGet);

// ===================================================

// Problem -02 ( Cycle or Laptop ) 
var money = 9999;
//write your code here


if( money >= 25000){
    console.log('Laptop');
}
else if(money >= 10000){
    console.log('Cycle');
}
else{
    console.log('Chocolate');
}
   
// =================================================

//Problem -03 ( Medicine Planner )
var lastDay = 6 ;
//write your code here

for( var day = 1; day <= lastDay; day++ ){
    if(day % 3 !== 0){
        console.log(day + ' - rest');
    }else{
        console.log( day + ' - medicine');
    }
}


// ==================================================

//Problem 04 - (Delete / Store) 
var fileName= "slipdf.txt";
//write your code here

if(fileName.startsWith('#')||
    fileName.includes('.pdf')||
    fileName.includes('.docx')){
    console.log('Store');
}
else{
    console.log('Delete');
}