window.onload = doThings;

function doThings(){
}

var hotLink = document.getElementById('Hot');
	hotLink.addEventListener('Hot', handleClick);

var coolLink = document.getElementById('Cool');
	coolLink.addEventListener('Hot', handleClick);

function handleClick(evt){
  console.log(evt.target.id);
}
