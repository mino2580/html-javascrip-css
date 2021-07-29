
//   *** ZAKLADY JavaScriptu ***  

// DEKLARACE HLAVNI FUNKCE
function myMainFunction() 
{
    // DEKLARACE CISELNE PROMENNE:
    var n = 2*1;

    // DEKLARACE RETEZCE:
    var message = 'Sude cislo: '

    // DEKLARACE POLE:
    var myArray = [1, 2, 3, 4, 5, 6, 7];

    // SMYCKA FOR
    for (var i = 0; i < myArray.length; i++) 
    {
       // PODMINKA A VOLANI FUNKCE: 
       if(positiveMod(i, n) == 0)
       {
           alert(message + i);
           console.info(message + i);
       }
    }

    alert('Konec funkce');
    console.info('Konec funkce');
}

// VOLANI FUNKCE PRI NACITANI STRANKY:
myMainFunction();

// DEKLARACE POMOCNE FUNKCE
function positiveMod(x, p) 
{
    x = x % p;
    if (x < 0) {
        x = p + x;
    }
    return x;
}