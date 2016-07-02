window.onload = doThings;

function doThings(){
	var 	 = document.getElementById('Hot');
	hotLink.addEventListener('Hot', handleClick);

	var coolLink = document.getElementById('Cool');
		coolLink.addEventListener('Cool', handleClick);

	function handleClick(evt){
	  console.log(evt.target.id);
	}

	//hoverVanTransform
	var hoverVan = document.getElementById('Cool');
	hoverVan.addEventListener('mouseover', handleHover);
	hoverVan.addEventListener('mouseout', releaseHover);

	var hoverVan = document.getElementById('Hot');
	hoverVan.addEventListener('mouseover', handleHover);
	hoverVan.addEventListener('mouseout', releaseHover);

	function handleHover(evt){
		 evt.target.className = 'ButtonHover';
	}

	function releaseHover(evt){
		 evt.target.className = 'ButtonHover2';
	}
}

