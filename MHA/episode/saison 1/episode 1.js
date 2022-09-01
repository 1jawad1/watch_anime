function list1(){
  document.getElementById('m').classList.toggle("lal");
}
window.onload = () => {
  let creatImg=document.createElement("img");
  creatImg.setAttribute("src","https://img.icons8.com/carbon-copy/100/44a9ff/documentary.png",);
  creatImg.setAttribute("height","100");
  creatImg.setAttribute("width","100");
  creatImg.style.position="relative"
  creatImg.style.left="50px"
  let img=document.querySelector(".m").children[2]
  console.log(img)
  document.querySelector(".m").replaceChild(creatImg,img)
  let creatImg1=document.createElement("img");
  creatImg1.setAttribute("src","https://img.icons8.com/ios-glyphs/30/44a9ff/home-page--v1.png",);
  creatImg1.setAttribute("height","29");
  creatImg1.setAttribute("width","29");
  creatImg1.setAttribute("class","img3");
  let img1=document.querySelector(".m").children[5]
  console.log(img1)
  document.querySelector(".m").replaceChild(creatImg1,img1)
}
let episode=1;

  function suivant(){


//episode 2
    let divs=document.querySelector(".divs");
    let video=document.querySelector(".divs").children[5];
    

    
    if(episode<25){
      episode=episode+1
    }else{
      episode=episode-24
    }
    console.log(episode)
    if(episode==2){
      let episode_suivant=document.createElement("iframe")
    episode_suivant.setAttribute("src","https://video.sibnet.ru/shell.php?videoid=4665165")
    episode_suivant.setAttribute("class","video")
    episode_suivant.setAttribute("frameborder","0")
    episode_suivant.setAttribute("scrolling","no")
      divs.replaceChild(episode_suivant,video)
      document.querySelector(".episode-num").textContent="episode 2"
    }
    if(episode==3){
      let episode_suivant=document.createElement("iframe")
    episode_suivant.setAttribute("src","https://video.sibnet.ru/shell.php?videoid=4665172")
    episode_suivant.setAttribute("class","video")
    episode_suivant.setAttribute("frameborder","0")
    episode_suivant.setAttribute("scrolling","no")
      divs.replaceChild(episode_suivant,video)
      document.querySelector(".episode-num").textContent="episode 3"
    }
    if(episode==4){
      let episode_suivant=document.createElement("iframe")
    episode_suivant.setAttribute("src","https://video.sibnet.ru/shell.php?videoid=4665172")
    episode_suivant.setAttribute("class","video")
    episode_suivant.setAttribute("frameborder","0")
    episode_suivant.setAttribute("scrolling","no")
      divs.replaceChild(episode_suivant,video)
      document.querySelector(".episode-num").textContent="episode 4"
    }
    if(episode==5){
      let episode_suivant=document.createElement("iframe")
    episode_suivant.setAttribute("src","https://video.sibnet.ru/shell.php?videoid=4665172")
    episode_suivant.setAttribute("class","video")
    episode_suivant.setAttribute("frameborder","0")
    episode_suivant.setAttribute("scrolling","no")
      divs.replaceChild(episode_suivant,video)
      document.querySelector(".episode-num").textContent="episode 5"
    }
  
    
  
  
    }








