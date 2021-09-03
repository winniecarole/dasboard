
let student =[{
   "name":"Alfreds Futterkiste",
   "vorname":"Maria Anders",
   "gesclecht":"frau",
   "classe":  1
},
{
    "name":"Junior",
    "vorname":"Tongle",
    "gesclecht":"frau",
    "classe":  1
 },
 {
    "name":"Paul",
    "vorname":"Paul",
    "gesclecht":"Paul",
    "classe":  2
 },
 {
    "name":"Tongle",
    "vorname":"winnie",
    "gesclecht":"frau",
    "classe":  1
 },
 {
     "name":"Muster",
     "vorname":"Muster",
     "gesclecht":"frau",
     "classe":  1
  },
  {
     "name":"Paul",
     "vorname":"Paul",
     "gesclecht":"jung",
     "classe":  2
  },
  {
    "name":"Tongle",
    "vorname":"winnie",
    "gesclecht":"frau",
    "classe":  1
 },
 {
     "name":"Muster",
     "vorname":"Muster",
     "gesclecht":"frau",
     "classe":  1
  },
  {
     "name":"Paul",
     "vorname":"Paul",
     "gesclecht":"jung",
     "classe":  2
  },{
    "name":"Tongle",
    "vorname":"winnie",
    "gesclecht":"frau",
    "classe":  1
 },
 {
     "name":"Muster",
     "vorname":"Muster",
     "gesclecht":"frau",
     "classe":  1
  },
  {
     "name":"Paul",
     "vorname":"Paul",
     "gesclecht":"jung",
     "classe":  2
  }

]

let classe_prüfung=[
    {
        "classe":1,
         "prüfung":["oop","diskrete Math","gdi","rechnertnetze"]
    },
    {
        "classe":2,
         "prüfung":["wpw","digitaltechni"]
    },
    {
        "classe":3,
         "prüfung":["oop","wbs"]
    },
    {
        "classe":4,
         "prüfung":["wpw","digitaltechni"]
    },
    {
        "classe":5,
         "prüfung":["oop","wbs"]
    },
    {
        "classe":6,
         "prüfung":["wpw","digitaltechni"]
    },
    {
        "classe":7,
         "prüfung":["oop","wbs"]
    },
    {
        "classe":8,
         "prüfung":["wpw","digitaltechni","aud"]
    }

]

console.log("hallo");
var anzahl_student =document.getElementById('anzahl_student');
console.log(student.length);

anzahl_student.innerHTML=student.length;

var jung=0;
var madschen=0;



student.forEach(function(student){
    
   let result=student.gesclecht.localeCompare("frau");
   if(result===0){
       madschen++;
   }else{
       jung++;
   }
 })
/* Anzahl junge */
 var anzahl_junge=document.getElementById('anzahl_junge');
 anzahl_junge.innerHTML=jung;

 /** Anzahl mädschen */
 var anzahl_madschen=document.getElementById('anzahl_madschen');
 anzahl_madschen.innerHTML=madschen;

 var anzahl_classe_prüfung=0;

 for(let i=0;i<classe_prüfung.length;i++){
   anzahl_classe_prüfung=anzahl_classe_prüfung+classe_prüfung[i].prüfung.length;
}

 var anzahl_prufung=document.getElementById('anzahl_prufung');
 anzahl_prufung.innerHTML=anzahl_classe_prüfung;

 //anzahl classe
 var anzahl_classe=document.getElementById('anzahl_classe');
 anzahl_classe.innerHTML=classe_prüfung.length;