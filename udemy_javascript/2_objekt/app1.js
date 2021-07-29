    const person = 
    {
        "firstName" : "Laurence",
        "lastName" : "Svekis",
        "x1" : 1,
        "x2" : false,
        "interests" : ["JavaScript","HTML","CSS"],
        "courses" : [
            { "name" : "JavaScript","length" :15  },
            { "name" : "HTML", "length" :10 },
            {"name" : "CSS", "length" :20}
                    ]
    }
    
   // console.log(person);
    /* let x=1;
    console.log(person["x"+x]);
    x++;
    console.log(person["x"+x]); */
    const courses = person["courses"];

    courses.forEach((course,index)=>{
   // console.log(course);
    //console.log(course.name);
    })

for(const prop in person) {   //zobrazenie hodnot
    // console.log(prop);
}
 
const keys =Object.keys(person);  //vypis klucov
//console.log(keys);

keys.forEach((key)=>{             //vypis klucov
    //console.log(person[key]);
    })
    
    const vals = Object.values(person);  //kopirovanie objektu do druheho objektu
    //console.log(vals);
  
    vals.forEach((val)=>{
   // console.log(val);
    })
    const entries = Object.entries(person);
    //console.log(entries);
    
      for(const arr of entries){  //vzpis hodnot a klucov naraz
    //console.log(arr[0]);
    //console.log(arr[1]);
    }  
      