export  function tabconjs (){
var tabcontrol = document.querySelector(".tabcontrol")
var cfather = document.querySelector(".cfather");
  window.onscroll=function(){
  console.log("22");
  if(document.documentElement.scrollTop>=tabcontrol.offsetHeight){
      tabcontrol.style.cssText="position:fixed";
      tabcontrol.style.marginTop=tabcontrol.offsetHeight+"px"
      console.log("da");
  }
  else{console.log("222");
    tabcontrol.style.cssText="position:static";
    tabcontrol.style.marginTop="0px"
    console.log("xioa");
  }
}
console.log("conjs生效了");

}