function list(){
  document.getElementById('m').classList.toggle("la");
document.getElementById('selec').classList.toggle("la");

}
caracter="/:;.,!+"
function rech(){


var a = document.getElementById('selec').value.toLocaleLowerCase();

if (a === 'shingeki no kiojin'||a === 'snk'||a === 'attaques des titans') {
       window.open('SNK/jawad.htm');
}
if (a === 'tokyo revenger'||a === 'tr'||a === 'tokyorevenger') {
  window.open('tokyore/tokyore.htm');
}
if (a === 'jujutsu kaisen'||a === 'jk'||a === 'jujutsukaisen') {
  window.open('jujutsu/jujutsu.htm');
}

if (a === 'vinland saga'||a === 'vs'||a === 'vinlandsaga') {
  window.open('vinland/vinland.htm');
}
if (a === 'god of high school'||a === 'gohs'||a === 'godofhighschool') {
  window.open('godof/godof.htm');
}

if (a === 'demonslayer'||a === 'ds'||a === 'demon slayer') {
  window.open('demon/demon.htm');
}

if (a === 'mha'||a === 'my hero academia'||a === 'myheroacademia') {
  window.open('MHA/MHA.htm');
}

if (a === 'yourname'||a === 'yn'||a === 'your name') {
  window.open('yourname/yourname.htm');
}

if (a === 'tenki no ko'||a === 'tnk'||a === 'les enfants du temps') {
  window.open('tenki/tenki.htm');
}

if (a === 'bublle'||a === 'buble'||a === 'baburu') {
  window.open('bublle/bublle.htm');
}
/*
if (a === 'shingeki no kiojin'||a === 'snk'||a === 'attaques des titans') {
  window.open('SNK/jawad.htm');
}
if (a === 'shingeki no kiojin'||a === 'snk'||a === 'attaques des titans') {
  window.open('SNK/jawad.htm');
}
if (a === 'shingeki no kiojin'||a === 'snk'||a === 'attaques des titans') {
  window.open('SNK/jawad.htm');
}
if (a === 'shingeki no kiojin'||a === 'snk'||a === 'attaques des titans') {
  window.open('SNK/jawad.htm');
}
if (a === 'shingeki no kiojin'||a === 'snk'||a === 'attaques des titans') {
  window.open('SNK/jawad.htm');
}
if (a === 'shingeki no kiojin'||a === 'snk'||a === 'attaques des titans') {
  window.open('SNK/jawad.htm');
}
if (a === 'shingeki no kiojin'||a === 'snk'||a === 'attaques des titans') {
  window.open('SNK/jawad.htm');
}
if (a === 'shingeki no kiojin'||a === 'snk'||a === 'attaques des titans') {
  window.open('SNK/jawad.htm');
}
if (a === 'shingeki no kiojin'||a === 'snk'||a === 'attaques des titans') {
  window.open('SNK/jawad.htm');
}
if (a === 'shingeki no kiojin'||a === 'snk'||a === 'attaques des titans') {
  window.open('SNK/jawad.htm');
}
*/

};
  function recherche(){
    const input=document.querySelector("#search").value;
  
  const element=document.querySelectorAll(".content")
  if(input.length>3){
    for(i=0;i<element.length;i++){
        if(element[i].textContent.toLocaleLowerCase().includes(input.toLocaleLowerCase()) && input !== "sais" && input !== "ison"&& input !== "aison"&& input !== "saison" && input !== "saiso" && input !== "aiso" && input !== "trailer"&& input !== "traile"&& input !== "trail"&& input !== "trai"&& input !== "rail" && input !== "raile" && input !== "railer"&& input !== "aile" && input !== "ailer"&& input !== "iler"){
            if(window.matchMedia("(min-width: 1751px)").matches){
              element[i].style.display="block";
              element[i].style.margin=0;
              element[i].style.position="relative";
              element[i].style.top="0px";
              element[i].style.left=0;
              element[i].style.marginTop="100px";
              element[i].style.marginLeft="500px";
              
            }
            if(window.matchMedia("(min-width: 1481px) and (max-width: 1750px)").matches){
              element[i].style.display="Block";
              element[i].style.margin=0;
              element[i].style.position="relative";
              element[i].style.top="0px";
              element[i].style.left=0;
              element[i].style.marginTop="100px";
              element[i].style.marginLeft="450px";
              
              
            }
            if(window.matchMedia("(max-width: 1480px) and (min-width: 1041px)").matches){
              element[i].style.display="Block";
              element[i].style.margin=0;
              element[i].style.position="relative";
              element[i].style.top="0px";
              element[i].style.left=0;
              element[i].style.marginTop="50px";
              element[i].style.marginLeft="520px";
              
              
            }
            if(window.matchMedia("(max-width: 1040px)").matches){
              element[i].style.display="Block";
              element[i].style.margin=0;
              element[i].style.position="relative";
              element[i].style.top="250px";
              element[i].style.left=0;
              element[i].style.marginTop="50px";
              element[i].style.marginLeft="300px";
              
              
            }

          
          }else{
            element[i].style.display="none"
          
          
        }
    }
  }
  };
/*visibility="hidden"*/
  function demo1(){
    if(document.getElementById("demo1").checked==true){
      let action=document.querySelectorAll(".action")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="hidden"
      }
    }if(document.getElementById("demo1").checked==false){
      let action=document.querySelectorAll(".action")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="visible"
      }
    }
  }
  function demo2(){
    if(document.getElementById("demo2").checked==true){
      let action=document.querySelectorAll(".AVENTURE")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="hidden"
      }
    }if(document.getElementById("demo2").checked==false){
      let action=document.querySelectorAll(".AVENTURE")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="visible"
      }
    }
  }
  
  function demo3(){
    if(document.getElementById("demo3").checked==true){
      let action=document.querySelectorAll(".DRAME")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="hidden"
      }
    }if(document.getElementById("demo3").checked==false){
      let action=document.querySelectorAll(".DRAME")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="visible"
      }
    }
  }

  function demo4(){
    if(document.getElementById("demo4").checked==true){
      let action=document.querySelectorAll(".SPORTS")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="hidden"
      }
    }if(document.getElementById("demo4").checked==false){
      let action=document.querySelectorAll(".SPORTS")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="visible"
      }
    }
  }
  
  function demo5(){
    if(document.getElementById("demo5").checked==true){
      let action=document.querySelectorAll(".FANTASTIQUE")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="hidden"
      }
    }if(document.getElementById("demo5").checked==false){
      let action=document.querySelectorAll(".FANTASTIQUE")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="visible"
      }
    }
  }

  function demo6(){
    if(document.getElementById("demo6").checked==true){
      let action=document.querySelectorAll(".ROMANCE")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="hidden"
      }
    }if(document.getElementById("demo6").checked==false){
      let action=document.querySelectorAll(".ROMANCE")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="visible"
      }
    }
  }
  
  function demo7(){
    if(document.getElementById("demo7").checked==true){
      let action=document.querySelectorAll(".COMEDIE")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="hidden"
      }
    }if(document.getElementById("demo7").checked==false){
      let action=document.querySelectorAll(".COMEDIE")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="visible"
      }
    }
  }
      
  function demo8(){
    if(document.getElementById("demo8").checked==true){
      let action=document.querySelectorAll(".HORREUR")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="hidden"
      }
    }if(document.getElementById("demo8").checked==false){
      let action=document.querySelectorAll(".HORREUR")
      for(i=0;i<action.length;i++){
        action[i].style.visibility="visible"
      }
    }
  }



