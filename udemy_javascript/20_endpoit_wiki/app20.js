const url = 'https://www.discoveryvip.com/shared/test1.json';  //vebova stanka odkial cerpam info pre json databazu
const localUrl = 'people.json';           //druhy sposob naciatania jsona
const btn = document.querySelector('.btn');   //oznacenie tlacitka
const output = document.querySelector('.output');   //oznacenie vystupu
const inputVal = document.querySelector('.val');   //oznacenie vstupu
  inputVal.style.display = 'none';  //zmizne popisove pole
btn.textContent = 'Load JSON data'; //ulozenie textu do tlacitka
let attemptCounter = false;     //pocitadlo
let myList = [];  

btn.addEventListener('click',(e)=>{  //posielam pozadavek na fetch localurl,kliknutim na button
    getData(localUrl);
})

 

 
function getData(urlPath){          // pracuj z lokalnym textom
    fetch(urlPath).then(rep => {
        return rep.json()
    }).then((json)=>{
        maker(json);      //spusti maker funkciu,ktora prehlada json pomocou foreach
    }).catch(err=>{       //ak je chzba vyhodi to do konzole
         if(!attemptCounter){
            getData(url);  //pokial bude chyba poskytni  data z webu 
        }
        attemptCounter = true;  
        console.log(err);
    })
}


function maker(data){
        output.innerHTML = '<h1>JSON Data</h1><br></br>';  //vypis na obrazovvku
        data.forEach((el,index ) => {
            console.log(index,el);
            myList=data;
             output.innerHTML += `<div>${el.name.first} ${el.name.last}</div>`;  //vypis mien na novu lajnu
            output.innerHTML += `<div>${el.location.city} ${el.location.country}</div>`; // //vypis lokacii a mesta
            output.innerHTML += `<div>${el.age} </div><br></br>`;
       
    });
} 

function savetoStorage(){
   // console.log(myList);
    localStorage.setItem('myList',JSON.stringify(myList));  //ak to tam nedam ,po refresi to nebude ulozene
        
}