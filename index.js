function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var lis = document.getElementById('app').querySelector('div#nested .target');
  return lis
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(var i = 0;i<lis.length;i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n;
  }
}

function deepestChild(){
  const lis = document.getElementById('app').querySelectorAll('div#grand-node')[0];
  
  var current = lis.querySelectorAll('div');
  
  
  for(var i = 0;i<current.length;i++){
if(!current[i].querySelector('div')){
return current[i];
   }
}
return null;
 
}