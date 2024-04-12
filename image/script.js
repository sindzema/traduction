//recuperation des element du DOM var titleElement =
)document.getElementById("title");
var textElement=
document.getElementById("text");

//TRADUCTION
var translation ={
    an:{
        title:"welcome",
        text: "select a language above to translate the content."
    },
    fr: {
        title:"Bienvenue"
        text:"selectionnez une langue ci-dessus pour traduire le contenu."

    },
    es:{
        title:"Bienvenido"
        text:"selectionne un idioma arriba para traducir el contenido"
    }
    al:{
        title:"Willkommen"
        text:"wahlen sie oben eine sprache aus,um den inhalt zu ubersentzen"
},
es:{
    title:"Yokoso"
    text:"kontetsu o hon'yaku suru ni wa ue no gengo sentaku shite kudassai"
     },
      };
      //Fonction de traduction
      function translate(language){
        var translation = translations[language];
        if(translation){
            titleElement.textContent = translation.title;
            textElement.textContent=translation.text;
        }
      }
      //Gestionnaire d'evenements pour les boutons de langue
      document.getElementById("lang-an").addEventListener("click",function(){ 
        translate("an");
      });
      document.getElementById("lang-fr").addEventListener("click",function(){ 
        translate("fr");
      });
      document.getElementById("lang-it").addEventListener("click",function(){ 
        translate("it");
      });
      document.getElementById("lang-al").addEventListener("click",function(){ 
        translate("al");
      });
      document.getElementById("lang-jp").addEventListener("click",function(){ 
        translate("jp");
      });
      // Appeler la fonction de traduction avec une langue par defaut
      translate("an");