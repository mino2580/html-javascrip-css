const output =document.querySelector('.output');  //oznacenie vystupu a vypis na konzoolu
//console.log(output);              //umiestnenie do konzole
 
const url='list.json';
let myList = [];                    //pole pre ukladanie do historie
let localData = localStorage.getItem('myList');  //uloyenie a nacitanie z historie
  console.log(localData);

window.addEventListener('DOMContentLoaded', () => {  //udalost pripojenia
    output.textContent='Loading.....'; // umiestnenie napisu na loading  ,ktori zmizne po nacitani fetch  u
    if(localData) {
        myList = JSON.parse(localStorage.getItem('myList'));
        console.log(myList);
        maker();
    }else{
        fetch(url).then(rep=>rep.json())     //pripojenie jsna
        .then((data)=>{                      //vypis jsna a uloz do data
            myList=data;
            maker();
            localStorage.setItem('myList',JSON.stringify(myList));  //ulo6 do historie ako retazec
        })
    }
   
});




function maker(){
    output.innerHTML='';
    myList.forEach((el,index) => {            //uloz do pola elementy jsona
        makeList(el,index);                //spusti funkciu s ulozenym polom
   });
}

function makeList(item,index){       //pri volani funkci je pole ulozene v item
    const div=document.createElement('div'); //vtvory element div na stranke
    div.classList.add('box');            //zavolanie clasu box 
    div.innerHTML=`${item.name} #(${item.guests})`;              // vezme atributy jsna a vypise ich
    output.append(div);        //v useku output na stranke vztvori div element s hodnotamz jsona   
    
    
    if(item.status){
        div.classList.add('confirmed'); //namaluje na cerveno podla stzlu z html,podla toho ci je v zozname true alebo false
    }else{
        div.classList.add('notConfirmed')
    }
    div.addEventListener('click',(e)=>{     //ak kliknem mysou,menim barvy
        div.classList.toggle('confirmed');
        div.classList.toggle('notConfirmed');
        console.log((div.classList.contains('confirmed')));
        if(div.classList.contains('confirmed')) {
             myList[index].status=true;
        }else{
            myList[index].status=false;
        }
        savetoStorage();
    });
    const span =document.createElement('span');  //zavola box spana a premaluje prvok
    span.textContent ='X';    //pridanie prvku do pola na stranke
    div.append(span);      
    span.addEventListener('click',(e)=>{
        console.log(index);
        e.stopPropagation();
        div.remove();
        myList.splice(index,1);
       // console.log(myList);
        savetoStorage();
    })
   }

function savetoStorage(){
    console.log(myList);
    localStorage.setItem('myList',JSON.stringify(myList));  //ak to tam nedam ,po refresi to nebude ulozene
        
}

