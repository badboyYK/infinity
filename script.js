let circle = document.querySelectorAll('.circle');


circle.forEach((item)=>{
	for(let j=0;j<80;j++){
		let node = document.createElement('span');
		node.style=`--i:${j}`;
		item.appendChild(node);
	}
})