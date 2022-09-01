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
  let creatImg2=document.createElement("img");
  creatImg2.setAttribute("src","https://img.icons8.com/sf-black/64/44a9ff/menu.png",);
  creatImg2.setAttribute("height","45");
  creatImg2.setAttribute("width","40");
  creatImg2.setAttribute("class","barre");
  creatImg2.style.marginTop="35px";
  creatImg2.style.marginRight="5px";
  creatImg2.style.float="right"
  let img2=document.querySelector(".hid").children[0]
  console.log(img2)
  document.querySelector(".hid").replaceChild(creatImg2,img2)

}
