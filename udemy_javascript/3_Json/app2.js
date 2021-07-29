 //const person = {"last":"svekis","num":001}
 // console.log(person);
 
const url = 'j1.json';
let data = '';

const localData = localStorage.getItem('temp5'); //zapis do historie
//console.log(localStorage);
 
if(!localData) {
    myJson();
    console.log('saved to local storage');
}else {
    console.log(localData);   //retazec,pokial uz existuje
    //navrat spat do objektu
    data = JSON.parse(localData);
    console.log(data);
    console.log(' is local storage');

}  


//myJson();
 


/* 
function myJson(){
fetch(url)
.then(rep => rep.json())  //vrati objekt s moznostou vyhladanim jednotlivych prvkou
//.then(rep => rep.text())// navrat pomocou metodz text vrati retazec,
.then(json => {  //sipkz su nieco ako yavolaj funkciu a ona vrati data
data = json;
console.log(data);  //nacita obsah zo suboru j1.json a zobrazi na konzole
})
}
  */


 
function myJson(){
    fetch(url)
     .then(rep => rep.text())  // navrat pomocou metodz text vrati retazec,
    .then(json => {            //sipkz su nieco ako yavolaj funkciu a ona vrati data
    data = JSON.parse(json);
   //console.log(data);   
   let str = JSON.stringify(data);  //navrat objektu
     // console.log(str);     //navrat retayca
      localStorage.setItem('temp5',str);
    })
    }  
    




/*
//const person = {"last":"svekis","num":001}
const url = 'j1.json';
let data = '';
const localData = localStorage.getItem('temp3');
if(!localData){
myJson();
console.log('saved to local storage');
}else{
console.log(localData);
data = JSON.parse(localData);
console.log(data);
}
//console.log(person);

function myJson(){
    fetch(url)
    .then(rep => rep.text())
    .then(json => {
    data = JSON.parse(json);
    //console.log(data);
    let str = JSON.stringify(data);
    //console.log(str);
    localStorage.setItem('temp3',str);
    })
    }
    
    */